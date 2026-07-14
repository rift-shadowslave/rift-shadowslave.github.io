// ---- DAILY CHALLENGE LOGIC ----
document.addEventListener('DOMContentLoaded', () => {
    const dailyStartBtn = document.getElementById('daily-start-btn');
    const dailyStreakEl = document.getElementById('daily-streak');
    const dailyContent = document.getElementById('daily-challenge-content');
    
    if (!dailyStartBtn) return;

    // Load streak
    let streak = parseInt(localStorage.getItem('rift_daily_streak') || '0');
    let lastPlayed = localStorage.getItem('rift_daily_last_played');
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    
    // Check if streak is broken (didn't play yesterday or today)
    if (lastPlayed) {
        const lastDate = new Date(lastPlayed);
        const currDate = new Date(today);
        const diffTime = Math.abs(currDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays > 1) {
            streak = 0;
            localStorage.setItem('rift_daily_streak', '0');
        }
    }

    if (dailyStreakEl) dailyStreakEl.textContent = streak;

    // If already played today
    if (lastPlayed === today) {
        dailyContent.innerHTML = '<div style="color: #4ade80; font-weight: 700; margin-bottom: 0.5rem;">✓ Challenge Completed!</div><div style="font-size: 0.8rem; color: var(--text-muted);">Come back tomorrow for the next trial.</div><div style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-dim); font-weight: 600;">Current Streak: <span style="color: #F59E0B;">' + streak + '</span> 🔥</div>';
        return;
    }

    // Daily Questions Pool
    const dailyQuestions = [
        { q: "What is Sunny's True Name?", options: ["Lost from Light", "Shadow Slave", "Dreamless", "Lord of Shadows"], answer: 0 },
        { q: "Which of these is NOT an aspect of Nephis?", options: ["Sun", "Fire", "Healing", "Shadow"], answer: 3 },
        { q: "What is the name of the cohort's flying ship?", options: ["Chain Breaker", "Wind Runner", "Sky Piercer", "Storm Weaver"], answer: 0 },
        { q: "Who is the Weaver?", options: ["Demon of Destiny", "Demon of Fate", "God of Light", "God of Shadow"], answer: 1 },
        { q: "What rank does Sunny achieve after the Second Nightmare?", options: ["Awakened", "Master (Ascended)", "Saint (Transcendent)", "Supreme"], answer: 1 }
    ];

    dailyStartBtn.addEventListener('click', () => {
        // Pick a question based on the date
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const questionObj = dailyQuestions[dayOfYear % dailyQuestions.length];
        
        let html = '<div style="text-align:left; margin-top:1rem;">';
        html += '<div style="font-weight:700; color:#fff; margin-bottom:1rem; font-family:\'Cinzel\', serif;">' + questionObj.q + '</div>';
        html += '<div style="display:flex; flex-direction:column; gap:0.5rem;">';
        
        questionObj.options.forEach((opt, idx) => {
            html += '<button class="quiz-option daily-opt" data-idx="'+idx+'" style="text-align:left; padding:0.8rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.05); color:#fff; cursor:pointer;">' + opt + '</button>';
        });
        
        html += '</div></div>';
        dailyContent.innerHTML = html;

        document.querySelectorAll('.daily-opt').forEach(btn => {
            btn.addEventListener('click', function() {
                const selected = parseInt(this.getAttribute('data-idx'));
                if (selected === questionObj.answer) {
                    this.style.background = 'rgba(74, 222, 128, 0.2)';
                    this.style.borderColor = '#4ade80';
                    streak++;
                    localStorage.setItem('rift_daily_streak', streak);
                    localStorage.setItem('rift_daily_last_played', today);
                    
                    setTimeout(() => {
                        dailyContent.innerHTML = '<div style="color: #4ade80; font-weight: 700; font-size:1.2rem; margin-bottom: 0.5rem;">Correct!</div><div style="font-size: 0.8rem; color: var(--text-muted);">You survived another day.</div><div style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-dim); font-weight: 600;">Current Streak: <span style="color: #F59E0B;">' + streak + '</span> 🔥</div>';
                        
                        // Fire event for achievement system
                        document.dispatchEvent(new CustomEvent('rift-daily-played'));
                    }, 1000);
                } else {
                    this.style.background = 'rgba(196, 30, 58, 0.2)';
                    this.style.borderColor = '#C41E3A';
                    document.querySelector('.daily-opt[data-idx="'+questionObj.answer+'"]').style.background = 'rgba(74, 222, 128, 0.2)';
                    document.querySelector('.daily-opt[data-idx="'+questionObj.answer+'"]').style.borderColor = '#4ade80';
                    
                    streak = 0; // Reset streak on failure
                    localStorage.setItem('rift_daily_streak', '0');
                    localStorage.setItem('rift_daily_last_played', today);
                    
                    setTimeout(() => {
                        dailyContent.innerHTML = '<div style="color: #C41E3A; font-weight: 700; font-size:1.2rem; margin-bottom: 0.5rem;">Incorrect.</div><div style="font-size: 0.8rem; color: var(--text-muted);">Your streak has been broken. Try again tomorrow.</div><div style="margin-top: 1rem; font-size: 0.8rem; color: var(--text-dim); font-weight: 600;">Current Streak: <span style="color: #F59E0B;">0</span> 🔥</div>';
                        document.dispatchEvent(new CustomEvent('rift-daily-played'));
                    }, 1500);
                }
            });
        });
    });
});
