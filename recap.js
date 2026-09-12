/* recap.js — AI Recap Engine — v3 REAL AI POWERED */

// ══════════════════════════════════════════════════════════════════════════════
// CONFIG — UPDATE THIS URL AFTER DEPLOYING TO VERCEL
// ══════════════════════════════════════════════════════════════════════════════
const RECAP_API_URL = 'https://vercel-recap-api.vercel.app/api/recap';
// ↑↑↑ Replace with your actual Vercel deployment URL ↑↑↑

const CACHE_PREFIX = 'rift-ai-recap-';
const CACHE_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

// ── SPOILER SLIDER ──────────────────────────────────────────────────────────
const spoilerHints = {
    1: 'Safe — broad arc overview only, no specific spoilers',
    2: 'Moderate — key events and character development revealed',
    3: 'Full — complete spoilers including deaths, twists, and reveals'
};

const spoilerSlider = document.getElementById('spoiler-level');
const spoilerHintEl = document.getElementById('spoiler-hint');

function updateSliderStyle() {
    const pct = ((spoilerSlider.value - 1) / 2) * 100;
    spoilerSlider.style.background = `linear-gradient(to right, var(--primary) 0%, var(--primary) ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
    spoilerHintEl.textContent = spoilerHints[spoilerSlider.value];
}
spoilerSlider.addEventListener('input', updateSliderStyle);
updateSliderStyle();

// ── PRESETS ─────────────────────────────────────────────────────────────────
document.querySelectorAll('.preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active-preset'));
        btn.classList.add('active-preset');
        document.getElementById('ch-from').value = btn.dataset.from;
        document.getElementById('ch-to').value = btn.dataset.to;
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// CACHE UTILITIES
// ══════════════════════════════════════════════════════════════════════════════
function getCacheKey(from, to, spoilerLevel, toggles) {
    const toggleHash = [
        toggles.events ? 'e' : '',
        toggles.power ? 'p' : '',
        toggles.deaths ? 'd' : '',
        toggles.romance ? 'r' : '',
        toggles.lore ? 'l' : ''
    ].join('');
    return `${CACHE_PREFIX}${from}-${to}-s${spoilerLevel}-${toggleHash}`;
}

function getFromCache(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        const cached = JSON.parse(raw);
        if (Date.now() - cached.timestamp > CACHE_DURATION_MS) {
            localStorage.removeItem(key);
            return null;
        }
        return cached.data;
    } catch { return null; }
}

function saveToCache(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify({
            timestamp: Date.now(),
            data: data
        }));
    } catch {
        // localStorage full — clear old recap caches
        Object.keys(localStorage)
            .filter(k => k.startsWith(CACHE_PREFIX))
            .sort()
            .slice(0, 5)
            .forEach(k => localStorage.removeItem(k));
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// TYPING EFFECT — Premium word-by-word reveal
// ══════════════════════════════════════════════════════════════════════════════
function typeText(element, text, speed = 12) {
    return new Promise(resolve => {
        // Split into paragraphs first
        const paragraphs = text.split('\n\n').filter(p => p.trim());
        element.innerHTML = '';

        let paraIdx = 0;
        let wordIdx = 0;
        let currentPara = null;
        const allWords = [];

        // Flatten into word objects with paragraph breaks
        paragraphs.forEach((para, pi) => {
            const words = para.trim().split(/\s+/);
            words.forEach((word, wi) => {
                allWords.push({ word, newPara: wi === 0, paraIdx: pi });
            });
        });

        let i = 0;
        const interval = setInterval(() => {
            if (i >= allWords.length) {
                clearInterval(interval);
                resolve();
                return;
            }

            const item = allWords[i];
            if (item.newPara) {
                currentPara = document.createElement('p');
                currentPara.style.marginBottom = '0.75rem';
                currentPara.style.opacity = '0';
                currentPara.style.transform = 'translateY(4px)';
                currentPara.style.transition = 'opacity 0.3s, transform 0.3s';
                element.appendChild(currentPara);
                requestAnimationFrame(() => {
                    currentPara.style.opacity = '1';
                    currentPara.style.transform = 'translateY(0)';
                });
            }

            if (currentPara) {
                currentPara.textContent += (currentPara.textContent ? ' ' : '') + item.word;
            }

            i++;
        }, speed);
    });
}

// ══════════════════════════════════════════════════════════════════════════════
// EXISTING FALLBACK ENGINE (kept for offline/error fallback)
// ══════════════════════════════════════════════════════════════════════════════

function getEventsInRange(from, to, spoilerLevel, toggles) {
    if (!RIFT_DATA || !RIFT_DATA.chapterEvents) return [];
    return RIFT_DATA.chapterEvents.filter(ev => {
        if (ev.ch < from || ev.ch > to) return false;
        if (ev.spoiler > spoilerLevel) return false;
        if (ev.type === 'event') return true;
        if (ev.type === 'powerup') return toggles.power;
        if (ev.type === 'lore') return toggles.lore;
        if (ev.type === 'death') return toggles.deaths;
        if (ev.type === 'romance') return toggles.romance;
        return false;
    });
}

function getArcName(from, to) {
    const mid = Math.floor((from + to) / 2);
    if (mid <= 95) return 'Volume 1: First Nightmare & Academy Arc';
    if (mid <= 350) return 'Volume 2: Forgotten Shore & Dark City Arc';
    if (mid <= 600) return 'Volume 3: Chained Isles Preparation & Dreamscape Arc';
    if (mid <= 750) return 'Volume 4: Second Nightmare & Hope\'s Prison Arc';
    if (mid <= 1060) return 'Volume 5: Return to Waking World & Antarctica (Falcon Scott) Arc';
    if (mid <= 1230) return 'Volume 6: Antarctica Campaign Continuation & Pre-war Arc';
    if (mid <= 1590) return 'Volume 7: Third Nightmare (Great River & Tomb of Ariel) Arc';
    return 'Volume 8+: Post-Twilight & War of the Domains Arc';
}

function buildFallbackSummary(events, from, to, spoilerLevel, toggles) {
    if (events.length === 0) {
        return `Chapters ${from}–${to}: Shadow Slave continues Sunny's ongoing journey. The story maintains its themes of concealed power, clan politics, and Sunny's growing shadow echo army.`;
    }

    const basicEvents = events.filter(e => e.type === 'event');
    const powerUps = events.filter(e => e.type === 'powerup');
    const loreRevs = events.filter(e => e.type === 'lore');
    const rangeSpan = to - from;
    const isTinyRange = rangeSpan <= 10;

    let parts = [];
    if (rangeSpan === 0) parts.push(`Chapter ${from} focus:`);
    else if (isTinyRange) parts.push(`Chapters ${from}–${to} cover:`);
    else parts.push(`Chapters ${from}–${to} span ${getArcName(from, to)}.`);

    if (basicEvents.length > 0) {
        parts.push(basicEvents.slice(0, isTinyRange ? 5 : 6).map(e => e.text).join(' '));
    }
    if (toggles.power && powerUps.length > 0) {
        parts.push('Power developments: ' + powerUps.slice(0, 4).map(e => e.text).join(' '));
    }
    if (toggles.lore && loreRevs.length > 0) {
        parts.push('Lore & world-building: ' + loreRevs.slice(0, 3).map(e => e.text).join(' '));
    }
    return parts.join('\n\n');
}

function generateFallbackRecap(from, to, spoilerLevel, toggles) {
    const events = getEventsInRange(from, to, spoilerLevel, toggles);
    return {
        summary: buildFallbackSummary(events, from, to, spoilerLevel, toggles),
        keyMoments: events.filter(e => e.type === 'event').map(e => ({ ch: e.ch, text: e.text })),
        powerUps: events.filter(e => e.type === 'powerup').map(e => ({ ch: e.ch, text: e.text, detail: e.powerDetail || e.text })),
        loreReveals: events.filter(e => e.type === 'lore').map(e => ({ ch: e.ch, text: e.text, detail: e.loreDetail || e.text })),
        deaths: events.filter(e => e.type === 'death').map(e => ({ ch: e.ch, text: e.deathDetail || e.text })),
        romance: events.filter(e => e.type === 'romance').map(e => ({ ch: e.ch, text: e.romanceDetail || e.text })),
        activeCharacters: getActiveCharacterNames(from, to, events),
        source: 'fallback',
        cached: false
    };
}

function getActiveCharacterNames(from, to, events) {
    const activeIds = new Set();
    events.forEach(e => e.chars && e.chars.forEach(c => activeIds.add(c)));
    if (RIFT_DATA && RIFT_DATA.characters) {
        RIFT_DATA.characters.forEach(c => {
            if (c.firstChapter <= to && c.firstChapter >= from) activeIds.add(c.id);
        });
    }
    return RIFT_DATA.characters
        .filter(c => activeIds.has(c.id))
        .map(c => c.name);
}

// ══════════════════════════════════════════════════════════════════════════════
// AI API CALL
// ══════════════════════════════════════════════════════════════════════════════
async function generateAIRecap(from, to, spoilerLevel, toggles) {
    // Get context events from existing database for AI reference
    const contextEvents = getEventsInRange(from, to, 3, {
        events: true, power: true, deaths: true, romance: true, lore: true
    }).map(e => ({
        ch: e.ch,
        type: e.type,
        spoiler: e.spoiler,
        text: e.text
    }));

    const response = await fetch('https://vercel-recap-api.vercel.app/api/recap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            from, to, spoilerLevel, toggles, contextEvents
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `API error: ${response.status}`);
    }

    return response.json();
}

// ══════════════════════════════════════════════════════════════════════════════
// RENDER RECAP — Takes structured data and fills the UI
// ══════════════════════════════════════════════════════════════════════════════
async function renderRecap(data, from, to, toggles, spoilerLevel, useTypingEffect = true) {
    // ── Title ──
    document.getElementById('ro-title').textContent = `Summary: Ch. ${from}–${to}`;

    // ── Source indicator ──
    const statusEl = document.querySelector('.recap-status');
    if (statusEl) {
        if (data.source === 'ai') {
            statusEl.innerHTML = data.cached
                ? '<span class="status-dot" style="background:#22c55e"></span>AI Cached'
                : '<span class="status-dot" style="background:#3b82f6"></span>AI Generated';
        } else {
            statusEl.innerHTML = '<span class="status-dot" style="background:#f59e0b"></span>Offline Mode';
        }
    }

    // ── Main summary text ──
    const roContent = document.getElementById('ro-content');
    if (useTypingEffect && data.source === 'ai' && !data.cached) {
        await typeText(roContent, data.summary, 10);
    } else {
        roContent.innerHTML = data.summary.split('\n\n').map(para =>
            `<p style="margin-bottom:0.75rem">${para}</p>`
        ).join('');
    }

    // ── Tags row ──
    const tags = [];
    if (toggles.power && data.powerUps && data.powerUps.length > 0) {
        tags.push(`<span class="rtag power">⚡ ${data.powerUps.length} Power-Up${data.powerUps.length > 1 ? 's' : ''}</span>`);
    }
    if (toggles.lore && data.loreReveals && data.loreReveals.length > 0) {
        tags.push(`<span class="rtag lore">📜 ${data.loreReveals.length} Lore Reveal${data.loreReveals.length > 1 ? 's' : ''}</span>`);
    }
    if (toggles.deaths && data.deaths && data.deaths.length > 0) {
        tags.push(`<span class="rtag warning">⚠ ${data.deaths.length} Death${data.deaths.length > 1 ? 's' : ''}</span>`);
    }
    if (toggles.romance && data.romance && data.romance.length > 0) {
        tags.push(`<span class="rtag lore" style="background:rgba(236,72,153,0.08);color:#f472b6;border-color:rgba(236,72,153,0.2)">💜 ${data.romance.length} Relationship Moment${data.romance.length > 1 ? 's' : ''}</span>`);
    }
    if (data.source === 'ai') {
        tags.push(`<span class="rtag" style="background:rgba(59,130,246,0.08);color:#60a5fa;border-color:rgba(59,130,246,0.2);font-size:0.65rem">🤖 Gemini AI</span>`);
    }
    document.getElementById('ro-tags-row').innerHTML = tags.join('') ||
        '<span style="font-size:0.75rem;color:var(--text-dim)">No filters enabled</span>';

    // ── Key Moments ──
    const eventsSection = document.getElementById('ro-events');
    const eventsList = document.getElementById('ro-events-list');
    if (toggles.events && data.keyMoments && data.keyMoments.length > 0) {
        eventsSection.style.display = 'block';
        eventsList.innerHTML = data.keyMoments.slice(0, 8).map(e =>
            `<div class="ro-event-item"><span class="ro-event-dot">▸</span><span class="ro-event-ch">Ch.${e.ch}</span> ${e.text}</div>`
        ).join('');
    } else if (toggles.events) {
        eventsSection.style.display = 'block';
        eventsList.innerHTML = `<div class="ro-event-item" style="color:var(--text-dim)">No key events found for this range.</div>`;
    } else {
        eventsSection.style.display = 'none';
    }

    // ── Power-Ups ──
    const powerSection = document.getElementById('ro-power-section');
    if (powerSection) {
        if (toggles.power && data.powerUps && data.powerUps.length > 0) {
            powerSection.style.display = 'block';
            document.getElementById('ro-power-list').innerHTML = data.powerUps.slice(0, 6).map(p =>
                `<div class="ro-event-item"><span class="ro-event-dot" style="color:var(--gold)">⚡</span><span class="ro-event-ch">Ch.${p.ch}</span> ${p.detail || p.text}</div>`
            ).join('');
        } else {
            powerSection.style.display = 'none';
        }
    }

    // ── Lore Reveals ──
    const loreSection = document.getElementById('ro-lore-section');
    if (loreSection) {
        if (toggles.lore && data.loreReveals && data.loreReveals.length > 0) {
            loreSection.style.display = 'block';
            document.getElementById('ro-lore-list').innerHTML = data.loreReveals.slice(0, 5).map(l =>
                `<div class="ro-event-item"><span class="ro-event-dot" style="color:var(--purple)">📜</span><span class="ro-event-ch">Ch.${l.ch}</span> ${l.detail || l.text}</div>`
            ).join('');
        } else {
            loreSection.style.display = 'none';
        }
    }

    // ── Characters Active ──
    const charsEl = document.getElementById('ro-chars-list');
    if (data.activeCharacters && data.activeCharacters.length > 0) {
        // Map AI character names back to RIFT_DATA character objects where possible
        const charHTML = data.activeCharacters.slice(0, 8).map(name => {
            const charData = RIFT_DATA.characters.find(c =>
                c.name.toLowerCase() === name.toLowerCase() ||
                c.id.toLowerCase() === name.toLowerCase()
            );
            if (charData) {
                return `<a href="characters.html?char=${charData.id}" class="ro-char-chip" title="View ${charData.name}'s full profile">${charData.portraitSymbol} ${charData.name}</a>`;
            }
            return `<span class="ro-char-chip">${name}</span>`;
        }).join('');
        charsEl.innerHTML = charHTML;
    } else {
        charsEl.innerHTML = '<span style="color:var(--text-dim);font-size:0.75rem">No character data available</span>';
    }
}

// ══════════════════════════════════════════════════════════════════════════════
// GENERATE BUTTON — Main entry point
// ══════════════════════════════════════════════════════════════════════════════
const generateBtn = document.getElementById('rc-generate-btn');
const btnText = document.getElementById('rc-btn-text');
const resultArea = document.getElementById('recap-result-area');
const emptyState = document.getElementById('recap-empty');
const outputEl = document.getElementById('recap-output');

let currentRecap = null;
let isGenerating = false;

generateBtn.addEventListener('click', async () => {
    if (isGenerating) return;

    const from = parseInt(document.getElementById('ch-from').value) || 1;
    const to = parseInt(document.getElementById('ch-to').value) || 50;

    if (from > to) {
        document.getElementById('ch-from').style.borderColor = 'var(--primary)';
        setTimeout(() => document.getElementById('ch-from').style.borderColor = '', 1500);
        return;
    }
    if (to > 2400) {
        document.getElementById('ch-to').value = 2400;
        return;
    }

    // Read toggles
    const toggles = {
        events: document.getElementById('tog-events').checked,
        power: document.getElementById('tog-power').checked,
        deaths: document.getElementById('tog-deaths').checked,
        romance: document.getElementById('tog-romance').checked,
        lore: document.getElementById('tog-lore').checked,
    };
    const spoilerLevel = parseInt(spoilerSlider.value);

    isGenerating = true;
    generateBtn.disabled = true;

    // ── Check cache first ──
    const cacheKey = getCacheKey(from, to, spoilerLevel, toggles);
    const cached = getFromCache(cacheKey);

    if (cached) {
        // Instant render from cache
        btnText.textContent = '✓ Loaded from cache!';
        cached.cached = true;

        currentRecap = { from, to, data: cached, toggles, spoilerLevel };

        resultArea.style.alignItems = 'flex-start';
        emptyState.style.display = 'none';
        outputEl.style.display = 'block';

        await renderRecap(cached, from, to, toggles, spoilerLevel, false);
        outputEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        setTimeout(() => {
            btnText.textContent = '⚡ Generate Recap';
            generateBtn.disabled = false;
            isGenerating = false;
        }, 800);
        return;
    }

    // ── AI Loading Animation ──
    const aiMessages = [
        '🔗 Connecting to Gemini AI...',
        '📖 Reading chapter range...',
        '🧠 AI analyzing Shadow Slave lore...',
        '⚔ Processing events & power-ups...',
        '📜 Building narrative recap...',
        '✨ Polishing output...'
    ];
    let msgIdx = 0;
    btnText.textContent = aiMessages[0];
    const statusEl = document.querySelector('.recap-status');
    if (statusEl) {
        statusEl.innerHTML = '<span class="status-dot" style="background:#3b82f6;animation:pulse 1s infinite"></span>Generating...';
    }
    const msgInterval = setInterval(() => {
        msgIdx = Math.min(msgIdx + 1, aiMessages.length - 1);
        btnText.textContent = aiMessages[msgIdx];
    }, 1200);

    try {
        // ── Try AI API ──
        const aiData = await generateAIRecap(from, to, spoilerLevel, toggles);

        clearInterval(msgInterval);
        btnText.textContent = '✓ AI Recap ready!';

        // Cache the result
        saveToCache(cacheKey, aiData);

        currentRecap = { from, to, data: aiData, toggles, spoilerLevel };

        // Show result area
        resultArea.style.alignItems = 'flex-start';
        emptyState.style.display = 'none';
        outputEl.style.display = 'block';

        // Render with typing effect
        await renderRecap(aiData, from, to, toggles, spoilerLevel, true);
        outputEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    } catch (err) {
        clearInterval(msgInterval);
        console.warn('AI recap failed, using fallback:', err.message);

        // ── Fallback to existing database ──
        btnText.textContent = '⚡ Using offline data...';
        const fallbackData = generateFallbackRecap(from, to, spoilerLevel, toggles);

        currentRecap = { from, to, data: fallbackData, toggles, spoilerLevel };

        resultArea.style.alignItems = 'flex-start';
        emptyState.style.display = 'none';
        outputEl.style.display = 'block';

        await renderRecap(fallbackData, from, to, toggles, spoilerLevel, false);
        outputEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Reset button
    setTimeout(() => {
        btnText.textContent = '⚡ Generate Recap';
        generateBtn.disabled = false;
        isGenerating = false;
    }, 1000);
});

// ══════════════════════════════════════════════════════════════════════════════
// COPY TO CLIPBOARD
// ══════════════════════════════════════════════════════════════════════════════
document.getElementById('ro-copy-btn').addEventListener('click', () => {
    if (!currentRecap || !currentRecap.data) return;

    const d = currentRecap.data;
    let text = `RIFT — Shadow Slave Recap: Ch. ${currentRecap.from}–${currentRecap.to}\n${'─'.repeat(50)}\n\n${d.summary}`;

    if (d.powerUps && d.powerUps.length > 0) {
        text += '\n\nPOWER-UPS:\n' + d.powerUps.map(p => `• Ch.${p.ch}: ${p.detail || p.text}`).join('\n');
    }
    if (d.loreReveals && d.loreReveals.length > 0) {
        text += '\n\nLORE REVEALS:\n' + d.loreReveals.map(l => `• Ch.${l.ch}: ${l.detail || l.text}`).join('\n');
    }
    if (d.deaths && d.deaths.length > 0) {
        text += '\n\nDEATHS:\n' + d.deaths.map(x => `• Ch.${x.ch}: ${x.text}`).join('\n');
    }
    if (d.romance && d.romance.length > 0) {
        text += '\n\nROMANCE:\n' + d.romance.map(x => `• Ch.${x.ch}: ${x.text}`).join('\n');
    }

    navigator.clipboard.writeText(text).then(() => {
        document.getElementById('ro-copy-btn').textContent = '✓ Copied!';
        setTimeout(() => document.getElementById('ro-copy-btn').textContent = '⧉ Copy', 2000);
    });
});

// ══════════════════════════════════════════════════════════════════════════════
// BOOKMARKS
// ══════════════════════════════════════════════════════════════════════════════
const bookmarksSection = document.getElementById('bookmarks-section');
const bookmarksList = document.getElementById('bookmarks-list');
let bookmarks = JSON.parse(localStorage.getItem('rift-bookmarks') || '[]');

function renderBookmarks() {
    if (bookmarks.length === 0) { bookmarksSection.style.display = 'none'; return; }
    bookmarksSection.style.display = 'block';
    bookmarksList.innerHTML = bookmarks.map((bm, i) => `
    <div class="bookmark-card">
      <div>
        <div class="bm-title">Ch. ${bm.from}–${bm.to} Recap</div>
        <div class="bm-meta">Saved • Shadow Slave</div>
      </div>
      <button class="bm-load-btn" onclick="loadBookmark(${i})">Load</button>
    </div>
  `).join('');
}

document.getElementById('ro-bookmark-btn').addEventListener('click', () => {
    if (!currentRecap) return;
    const exists = bookmarks.some(b => b.from === currentRecap.from && b.to === currentRecap.to);
    if (!exists) {
        bookmarks.push({ from: currentRecap.from, to: currentRecap.to });
        localStorage.setItem('rift-bookmarks', JSON.stringify(bookmarks));
        renderBookmarks();
        document.getElementById('ro-bookmark-btn').textContent = '✓ Saved!';
        setTimeout(() => document.getElementById('ro-bookmark-btn').textContent = '⊕ Save', 2000);
    }
});

window.loadBookmark = function (idx) {
    const bm = bookmarks[idx];
    document.getElementById('ch-from').value = bm.from;
    document.getElementById('ch-to').value = bm.to;
    generateBtn.click();
};

// ══════════════════════════════════════════════════════════════════════════════
// PROGRESS TRACKER
// ══════════════════════════════════════════════════════════════════════════════
const savedProgress = localStorage.getItem('rift-progress-shadow-slave');
if (savedProgress) document.getElementById('current-chapter').value = savedProgress;

document.getElementById('ptc-save').addEventListener('click', () => {
    const val = document.getElementById('current-chapter').value;
    if (val) {
        localStorage.setItem('rift-progress-shadow-slave', val);
        document.getElementById('ptc-saved').style.display = 'block';
        setTimeout(() => document.getElementById('ptc-saved').style.display = 'none', 2000);
    }
});

renderBookmarks();
