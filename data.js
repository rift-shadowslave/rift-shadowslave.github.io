// RIFT — Shadow Slave Data (100% Canon Accurate)
const RIFT_DATA = {
    novels: {
        "shadow-slave": {
            id: "shadow-slave",
            title: "Shadow Slave",
            author: "Guiltythree",
            platform: "Webnovel",
            chapters: 2000,
            status: "Ongoing",
            genres: ["Dark Fantasy", "Progression Fantasy", "Action"],
            summary: "A young man named Sunny is infected by the Nightmare Spell. Surviving against all odds, he receives a Divine Aspect and becomes a Shadow Slave. A dark progression fantasy about surviving in a ruined world.",
            color: "#C41E3A"
        }
    },

    characters: [
        {
            id: "sunny",
            novel: "shadow-slave",
            name: "Sunny (Sunless)",
            epithet: "Lost from Light · Lord of Shadows · Fateless",
            rank: "Saint (Transcendent)",
            rankLevel: 4,
            portraitSymbol: "☾",
            portraitGlow: "red",
            role: "Protagonist",
            status: "Alive",
            faction: "Independent",
            firstChapter: 1,
            tags: ["Shadow Aspect", "Weaver's Lineage", "Fateless", "Treacherous"],
            abilities: [
                { name: "Shadow Control", level: 95, color: "red" },
                { name: "Shadow Manifestation", level: 90, color: "red" },
                { name: "Weaving", level: 85, color: "red" }
            ],
            echoes: ["Saint", "Nightmare", "Fiend", "Serpent"],
            soulAspects: 7,
            background: "A street orphan from the Outskirts who survived his First Nightmare through cunning. He received the Divine Aspect 'Slaves of Shadows' and inherited Weaver's forbidden lineage. After the Third Nightmare, his fate was stolen, causing everyone to forget his existence.",
            keyMoments: [
                "Survived the First Nightmare in the Mountain Temple",
                "Conquered the Crimson Spire in the Forgotten Shore",
                "Became Fateless in the Tomb of Ariel"
            ],
            relationships: [
                { name: "Nephis", type: "complex", note: "Bound by fate, though she forgot him after the Third Nightmare" },
                { name: "Cassie", type: "complex", note: "The blind seer who manipulated fate to free him" }
            ]
        },
        {
            id: "nephis",
            novel: "shadow-slave",
            name: "Nephis",
            epithet: "Changing Star · Star of Undying Flame",
            rank: "Saint (Transcendent)",
            rankLevel: 4,
            portraitSymbol: "✦",
            portraitGlow: "gold",
            role: "Main Female Lead",
            status: "Alive",
            faction: "Immortal Flame Clan / Fire Keepers / Valor",
            firstChapter: 5,
            tags: ["Flame Aspect", "Immortal Flame Clan", "Swordsman"],
            abilities: [
                { name: "White Flames", level: 99, color: "gold" },
                { name: "Healing/Destruction", level: 95, color: "gold" },
                { name: "Swordsmanship", level: 97, color: "gold" }
            ],
            echoes: [],
            soulAspects: 7,
            background: "The last true heir of the Immortal Flame clan. She possesses a Divine Aspect that allows her to wield terrifying white flames. However, her Flaw inflicts agonizing pain whenever she uses her abilities.",
            keyMoments: [
                "Stayed behind in the Dream Realm to let others escape the Forgotten Shore",
                "Destroyed the hierarchy of the Chained Isles",
                "Joined forces with Clan Valor"
            ],
            relationships: [
                { name: "Sunny", type: "complex", note: "A deep bond forged in blood, forgotten due to the Vile Thieving Bird" },
                { name: "Cassie", type: "ally", note: "Her closest friend and visionary" }
            ]
        },
        {
            id: "cassie",
            novel: "shadow-slave",
            name: "Cassie (Cassia)",
            epithet: "Song of the Fallen · Blind Seer",
            rank: "Saint (Transcendent)",
            rankLevel: 4,
            portraitSymbol: "◈",
            portraitGlow: "purple",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Fire Keepers / Valor",
            firstChapter: 25,
            tags: ["Seer", "Oracle", "Blind", "Manipulator"],
            abilities: [
                { name: "Prophecy", level: 95, color: "purple" },
                { name: "Memory Reading", level: 85, color: "purple" },
                { name: "Rapier Combat", level: 75, color: "purple" }
            ],
            echoes: ["Quiet Dancer"],
            soulAspects: 1,
            background: "Blind by birth after awakening, Cassie's Aspect grants her visions of the future and the ability to read memories. She is a master tactician who engineered a complex web of fate to give Sunny a chance at freedom.",
            keyMoments: [
                "Revealed Sunny's True Name to Nephis",
                "Guided the cohort through the Great River",
                "Planned the escape from fate"
            ],
            relationships: [
                { name: "Sunny", type: "complex", note: "Betrayed him to save Nephis, but later worked to free him" },
                { name: "Nephis", type: "ally", note: "Fiercely loyal to Nephis" }
            ]
        },
        {
            id: "effie",
            novel: "shadow-slave",
            name: "Effie",
            epithet: "Raised by Wolves",
            rank: "Saint (Transcendent)",
            rankLevel: 4,
            portraitSymbol: "⚔",
            portraitGlow: "teal",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Independent",
            firstChapter: 105,
            tags: ["Warrior", "Physical", "Giant", "Mother"],
            abilities: [
                { name: "Superhuman Strength", level: 98, color: "teal" },
                { name: "Endurance", level: 95, color: "teal" },
                { name: "Giant Transformation", level: 90, color: "teal" }
            ],
            echoes: [],
            soulAspects: 1,
            background: "A boisterous and immensely strong warrior who survived alone in the Dark City for years. Her physical abilities are unmatched in the cohort. She fights with a spear and shield and can transform into a towering giant.",
            keyMoments: [
                "Survived solo in the Dark City ruins",
                "Fought in the Red Colosseum",
                "Had a child during the Antarctica Campaign"
            ],
            relationships: [
                { name: "Sunny", type: "ally", note: "Treats him like a little brother/trusted comrade" },
                { name: "Kai", type: "ally", note: "Protective of him" }
            ]
        },
        {
            id: "kai",
            novel: "shadow-slave",
            name: "Kai",
            epithet: "Nightingale",
            rank: "Saint (Transcendent)",
            rankLevel: 4,
            portraitSymbol: "⬡",
            portraitGlow: "purple",
            role: "Supporting Lead",
            status: "Alive",
            faction: "Independent",
            firstChapter: 30,
            tags: ["Archer", "Flight", "Voice", "Truth"],
            abilities: [
                { name: "Archery", level: 90, color: "purple" },
                { name: "Flight", level: 95, color: "purple" },
                { name: "Voice Command", level: 85, color: "purple" }
            ],
            echoes: [],
            soulAspects: 1,
            background: "A former famous idol. Kai's Flaw forces him to hear the absolute truth, preventing anyone from lying to him. He can fly and commands people with his voice, making him a deadly aerial archer.",
            keyMoments: [
                "Rescued Sunny in the Forgotten Shore",
                "Fought the dragon in the Chained Isles",
                "Transformed into a monstrous beast in a corrupted timeline"
            ],
            relationships: [
                { name: "Sunny", type: "ally", note: "One of the few people Kai knows is always honest" }
            ]
        },
        {
            id: "morgans",
            novel: "shadow-slave",
            name: "Morgan",
            epithet: "Princess of Valor",
            rank: "Saint (Transcendent)",
            rankLevel: 4,
            portraitSymbol: "⛧",
            portraitGlow: "red",
            role: "Antagonist / Rival",
            status: "Alive",
            faction: "Clan Valor",
            firstChapter: 800,
            tags: ["Swordsman", "Valor", "Cut", "War"],
            abilities: [
                { name: "Cutting Aspect", level: 95, color: "red" },
                { name: "Swordsmanship", level: 96, color: "red" },
                { name: "War Command", level: 90, color: "red" }
            ],
            echoes: [],
            soulAspects: 1,
            background: "Daughter of Anvil of Valor, Sovereign of the Sword clan. Morgan's Aspect turns her entire body into a weapon; everything she touches is cut. She is a ruthless commander and a formidable fighter.",
            keyMoments: [
                "Led Clan Valor's forces in Antarctica",
                "Clashed with Sunny multiple times",
                "Participated in the war against Clan Song"
            ],
            relationships: [
                { name: "Nephis", type: "rival", note: "Adopted sister/rival within Clan Valor" },
                { name: "Sunny", type: "rival", note: "Respects his strength but views him as a tool or threat" }
            ]
        }
    ],

    ranks: [
        { level: 0, name: "Dormant", desc: "Before completing the First Nightmare. Infected by the Spell.", color: "#3A3A58" },
        { level: 1, name: "Awakened", desc: "First Nightmare cleared. Core formed. Can travel to the Dream Realm.", color: "#2DD4BF" },
        { level: 2, name: "Ascended (Master)", desc: "Second Nightmare cleared. Can anchor to the waking world.", color: "#60A5FA" },
        { level: 3, name: "Transcendent (Saint)", desc: "Third Nightmare cleared. Can undergo Transcendent Transformation.", color: "#A855F7" },
        { level: 4, name: "Supreme (Sovereign)", desc: "Fourth Nightmare cleared. Possesses a Domain.", color: "#C41E3A" },
        { level: 5, name: "Sacred", desc: "Fifth Nightmare cleared. Mythical entities of immense power.", color: "#F59E0B" },
        { level: 6, name: "Divine", desc: "Sixth Nightmare cleared. The level of the ancient Gods.", color: "#6366F1" }
    ],

    loreSystems: [
        {
            name: "Nightmare Spell",
            desc: "A magical system created by Weaver. It infects humans, dragging them into Nightmares to pass trials. Success grants power; failure turns them into Nightmare Creatures.",
            category: "World"
        },
        {
            name: "Aspects & Flaws",
            desc: "Every Awakened receives an Aspect (a unique magical ability or physical trait) and a Flaw (a corresponding weakness, like Nephis's pain or Sunny's inability to lie).",
            category: "Power"
        },
        {
            name: "Shadows & Echoes",
            desc: "Echoes are empty husks of slain monsters. Sunny can turn them into 'Shadows' by feeding them memories and his shadow fragments, allowing them to grow stronger and gain sentience.",
            category: "Power"
        },
        {
            name: "Memories",
            desc: "Weapons, armor, and items granted by the Nightmare Spell. They are forged from the souls of slain creatures and can be summoned or dismissed at will.",
            category: "Power"
        },
        {
            name: "The Dream Realm",
            desc: "A ruined, post-apocalyptic magical world. It contains regions like the Forgotten Shore, Chained Isles, and the Great River. Slowly merging with the waking world.",
            category: "World"
        },
        {
            name: "The Seven Gods & Daemons",
            desc: "Ancient beings of the Shadow Slave universe. The Gods represent order (Sun, Shadow, War, etc.), while the Daemons represent chaos (Weaver, Hope, Ariel, etc.).",
            category: "Lore"
        },
        {
            name: "Great Clans",
            desc: "The dominant human factions ruled by Sovereigns. Clan Valor (Swords), Clan Song (Beasts/Death), and House of Night.",
            category: "Factions"
        },
        {
            name: "Fateless",
            desc: "Sunny's current state. After his true name and fate were stolen by the Vile Thieving Bird in the Estuary, he was erased from the Nightmare Spell and the memories of everyone who knew him.",
            category: "Lore"
        }
    ],

    discussions: [
        {
            id: 1,
            chapter: "Ch. 1590",
            badge: "hot",
            title: "Sunny becoming Fateless is the best plot twist in web novel history",
            user: "@shadow_theorist",
            comments: 847,
            likes: 2100,
            content: "When the Vile Thieving Bird stole his fate string in the Estuary... everyone forgetting him, losing access to the Spell, but gaining absolute freedom. The tragedy of Nephis not knowing him anymore breaks my heart.",
            tags: ["Theory", "Spoilers Ch1590", "Fateless"]
        },
        {
            id: 2,
            chapter: "Power Prediction",
            badge: "new",
            title: "Lord of Shadows Domain — What will Supreme rank look like?",
            user: "@lore_keeper",
            comments: 312,
            likes: 941,
            content: "Since Sunny has to forge his Domain without the Nightmare Spell now, he's basically building his Citadel and gathering shadows manually. Will his Domain be absolute darkness or something related to death?",
            tags: ["Domain", "Prediction", "Supreme"]
        },
        {
            id: 3,
            chapter: "Character Analysis",
            badge: "trending",
            title: "Cassie's Master Plan in the Tomb of Ariel was genius",
            user: "@rift_analyst",
            comments: 1200,
            likes: 5400,
            content: "We hated her after the Forgotten Shore betrayal, but her setting up the defilement loop in the Great River so that Sunny could reach the Estuary and break free from being a slave? Absolute cinema.",
            tags: ["Cassie", "Tomb of Ariel", "Analysis"]
        }
    ],

    chapterEvents: [
        { ch: 1, type: "event", spoiler: 1, text: "Sunny is infected by the Nightmare Spell. He is transported to his First Nightmare as a chained temple slave in a freezing mountain pass." },
        { ch: 4, type: "event", spoiler: 2, text: "A monstrous beast ambushes the slave caravan. Sunny uses the chaos to break his chains using a sharp stone." },
        { ch: 10, type: "event", spoiler: 2, text: "Sunny separates from the other slaves and ventures alone through the frozen mountain pass, relying on his wits and cunning to evade the deadly creatures tracking him." },
        { ch: 12, type: "event", spoiler: 2, text: "Sunny reaches the ruined Mountain Temple and encounters Hero Auro of the Nine, a powerful knight." },
        { ch: 15, type: "event", spoiler: 3, text: "Auro reveals his true intentions, attempting to sacrifice Sunny to appease the Mountain Tyrant." },
        { ch: 16, type: "event", spoiler: 3, text: "Sunny outsmarts Auro, causing the knight's death and surviving the trial. The First Nightmare ends." },
        { ch: 16, type: "powerup", spoiler: 2, text: "Receives Divine Aspect: [Aspect of the Shadow] and True Name: Lost from Light.", powerDetail: "Unlocks Shadow Control and a Shadow Core. His Aspect rank is Divine — the highest possible — but he starts with only a single shadow." },
        { ch: 16, type: "powerup", spoiler: 3, text: "Absorbs Bloodweave.", powerDetail: "A drop of Weaver's blood grants him the first piece of a Daemon's Lineage, enhancing his physical resilience." },
        { ch: 17, type: "event", spoiler: 1, text: "Sunny awakens in the waking world as an Awakened and is taken under the wing of Master Jet." },
        { ch: 20, type: "event", spoiler: 1, text: "Sunny is enrolled in the Awakened Academy in NQSC to prepare for the Winter Solstice." },
        { ch: 21, type: "lore", spoiler: 2, text: "Sunny discovers his Flaw: Clear Conscience.", loreDetail: "He is physically incapable of lying and must answer any direct question truthfully." },
        { ch: 25, type: "event", spoiler: 1, text: "Sunny meets Nephis (Changing Star) and Cassie (the blind seer) at the Academy." },
        { ch: 35, type: "event", spoiler: 2, text: "During combat training, Sunny intentionally hides his true Divine powers, pretending his Aspect is weak." },
        { ch: 45, type: "event", spoiler: 2, text: "The cohort finalizes their preparations as the Winter Solstice looms closer." },
        { ch: 50, type: "event", spoiler: 3, text: "The Winter Solstice arrives. Sunny, Nephis, and Cassie are pulled into the Dream Realm, landing in the deadly Forgotten Shore." },
        { ch: 55, type: "event", spoiler: 1, text: "Sunny finds himself stranded in a treacherous black labyrinth, facing deadly Carapace Scavengers." },
        { ch: 60, type: "lore", spoiler: 2, text: "The Dark Sea is revealed.", loreDetail: "Sunny discovers that when the sun sets, a terrifying dark sea of corrosive liquid rises to drown the labyrinth, forcing him to seek high ground before nightfall." },
        { ch: 70, type: "event", spoiler: 1, text: "Sunny manages to reunite with Nephis and Cassie in the brutal landscape of the Forgotten Shore." },
        { ch: 80, type: "event", spoiler: 2, text: "The group discovers the existence of the ancient, ruined 'Dark City' in the distance." },
        { ch: 85, type: "event", spoiler: 2, text: "Sunny encounters the deceptive Soul Tree and battles a Blood Flower, barely surviving." },
        { ch: 95, type: "powerup", spoiler: 3, text: "Sunny defeats a Stone Demon and obtains the Stone Saint Echo.", powerDetail: "He secures a powerful, silent stone knight that becomes his most reliable combat partner." },
        { ch: 105, type: "event", spoiler: 2, text: "The cohort reaches the outskirts of the Dark City and meets Effie, a fierce warrior surviving alone." },
        { ch: 115, type: "event", spoiler: 2, text: "The group enters the Bright Castle, a fortified sanctuary ruled by Gunlaug, the Bright Lord." },
        { ch: 120, type: "lore", spoiler: 2, text: "Political tensions of the Dark City are introduced.", loreDetail: "Gunlaug rules with an iron fist using his lieutenants. Caster, a noble Awakened, is also introduced." },
        { ch: 130, type: "event", spoiler: 1, text: "Sunny distances himself from castle politics, working as a hunter in the outer ruins to farm soul shards." },
        { ch: 140, type: "event", spoiler: 3, text: "Nephis reveals her true goal.", powerDetail: "She declares she will not just survive under Gunlaug, but intends to conquer the Crimson Spire to open the gateway home." },
        { ch: 150, type: "event", spoiler: 2, text: "The cohort (Sunny, Nephis, Cassie, Effie, and Caster) begins formal planning for the suicide mission to the Crimson Spire." },
        { ch: 160, type: "event", spoiler: 2, text: "Nephis uses the 'Right of Challenge' to dismantle parts of the existing power structure in the Bright Castle." },
        { ch: 175, type: "event", spoiler: 1, text: "The Hunting Party is fully assembled. The cohort officially leaves the safety of the Bright Castle." },
        { ch: 180, type: "event", spoiler: 2, text: "The perilous journey across the Labyrinth begins, heading straight for the looming Crimson Spire." },
        { ch: 200, type: "powerup", spoiler: 2, text: "Sunny aggressively farms soul shards in the Labyrinth.", powerDetail: "His Shadow Core becomes significantly more saturated as he acts as the group's hidden scout and assassin." },
        { ch: 220, type: "event", spoiler: 3, text: "The cohort faces extreme environmental hazards and death zones in the deepest parts of the Forgotten Shore." },
        { ch: 240, type: "event", spoiler: 2, text: "Massive hordes of Nightmare Creatures are encountered as the group nears the base of the Crimson Spire." },
        { ch: 250, type: "event", spoiler: 3, text: "The cohort finally reaches the shadow of the Crimson Spire. The tension peaks as the final battle for survival looms." },
        { ch: 275, type: "event", spoiler: 3, text: "The siege of the Crimson Spire begins. The 'Dreamer Army' battles impossible waves of terrifying Nightmare Creatures." },
        { ch: 290, type: "lore", spoiler: 3, text: "The Ultimate Betrayal.", loreDetail: "It is revealed that Cassie, driven by her visions, told Nephis Sunny's True Name ('Lost from Light') to ensure Nephis's survival." },
        { ch: 300, type: "event", spoiler: 3, text: "Nephis uses Sunny's True Name against his will.", powerDetail: "She commands him to enter the gateway to the real world, effectively saving his life but forcefully binding him as her Shadow Slave." },
        { ch: 310, type: "event", spoiler: 3, text: "Nephis stays behind.", textDetail: "She sacrifices her own chance at escape, remaining alone in the Forgotten Shore to hold off the monsters so the others can live." },
        { ch: 320, type: "event", spoiler: 1, text: "Sunny wakes up in the real world.", textDetail: "He has officially returned from the Dream Realm, but is deeply traumatized and furious at Cassie's betrayal and his new enslavement." },
        { ch: 330, type: "event", spoiler: 1, text: "Sunny undergoes the Awakened assessment.", textDetail: "He is officially recognized as an Awakened, receives his government rewards, and buys his own house in the waking world." },
        { ch: 340, type: "event", spoiler: 2, text: "Sunny finally meets Rain.", textDetail: "He encounters his younger sister who was adopted by a wealthy family. She has no idea he is her biological brother." },
        { ch: 350, type: "event", spoiler: 1, text: "Volume 2 (Demon of Change) officially concludes.", textDetail: "Sunny prepares to adjust to his new life as an Awakened and enters the Dreamscape." },
        { ch: 360, type: "event", spoiler: 2, text: "The birth of 'Mongrel'.", textDetail: "Sunny enters the virtual combat simulator known as the Dreamscape. Wearing the Weaver's Mask to hide his identity, he fights silently and brutally, quickly gaining legendary fame as the enigmatic fighter 'Mongrel'." },
        { ch: 380, type: "lore", spoiler: 3, text: "Weaver's Mask secret revealed.", loreDetail: "The Mask inverts a person's Flaw. For Sunny, this means he can finally lie, but telling the truth causes him agonizing pain." },
        { ch: 390, type: "event", spoiler: 1, text: "Sunny departs for the Chained Isles.", textDetail: "He boards an airship and travels to his new assignment in the Dream Realm, leaving the waking world behind." },
        { ch: 400, type: "lore", spoiler: 2, text: "The Chained Isles.", loreDetail: "A surreal region of the Dream Realm consisting of floating islands anchored by massive divine chains over a terrifying void. The islands occasionally suffer from 'The Crushing', plunging into the abyss." },
        { ch: 410, type: "event", spoiler: 1, text: "Arrival at the Sanctuary of Noctis.", textDetail: "Sunny arrives at the human stronghold in the Chained Isles and begins adjusting to the dangerous new environment." },
        { ch: 420, type: "event", spoiler: 3, text: "Sunny reunites with Cassie.", textDetail: "They meet again at the Sanctuary. The tension and betrayal from the Crimson Spire linger heavily between them." },
        { ch: 435, type: "event", spoiler: 2, text: "The Fall into the Tear.", textDetail: "Sunny embarks on a dangerous expedition and faces terrifying new Nightmare Creatures unique to the floating islands." },
        { ch: 460, type: "event", spoiler: 2, text: "Exploring the Chained Isles.", textDetail: "Sunny navigates the extreme gravity anomalies and deadly floating islands, uncovering ancient ruins and powerful monsters." },
        { ch: 480, type: "lore", spoiler: 2, text: "Noctis and the Demon of Desire.", loreDetail: "Sunny uncovers the deep lore of the region. He learns about Noctis, an eccentric immortal priest devoted to the Sun God, and the Ivory Tower where Hope (the Demon of Desire) is imprisoned." },
        { ch: 500, type: "event", spoiler: 1, text: "Arrival at the Night Temple.", textDetail: "The cohort travels to the Night Temple, a heavily guarded sanctuary belonging to the mysterious House of Night." },
        { ch: 520, type: "event", spoiler: 3, text: "Meeting the Prince of Nothing.", textDetail: "Deep within the Night Temple's prison, Sunny encounters a terrifyingly manipulative and dangerous prisoner: Mordret." },
        { ch: 530, type: "lore", spoiler: 3, text: "Mordret's terrifying power revealed.", loreDetail: "Mordret's Aspect relates to mirrors and reflections. He is a terrifyingly powerful combatant capable of possessing other people's bodies and stealing their identities through their reflections." },
        { ch: 540, type: "event", spoiler: 3, text: "Mordret's Escape.", textDetail: "Through sheer cunning and manipulation, Mordret escapes his ancient prison, unleashing complete chaos within the Night Temple." },
        { ch: 550, type: "event", spoiler: 3, text: "Preparing for the Second Nightmare.", textDetail: "With Mordret on the loose and the Chained Isles descending into chaos, the cohort prepares to dive into the Seed of the Second Nightmare." },
        { ch: 560, type: "event", spoiler: 1, text: "Entering the Second Nightmare.", textDetail: "Sunny and the cohort enter the Seed, being transported thousands of years into the past to the Kingdom of Hope during the war of the immortal lords." },
        { ch: 580, type: "event", spoiler: 2, text: "The Red Colosseum.", textDetail: "Sunny finds himself trapped in the body of a shadow gladiator. He is forced to fight in brutal, bloody matches in the Red Colosseum for the amusement of the immortal Solvane." },
        { ch: 600, type: "powerup", spoiler: 3, text: "Mastering Shadow Dance.", powerDetail: "Pushed to his absolute limits in the arena, Sunny perfects the second step of his Shadow Dance and unlocks Shadow Manifestation, allowing him to turn shadows tangible." },
        { ch: 610, type: "event", spoiler: 2, text: "Meeting Noctis.", textDetail: "Sunny escapes the Colosseum and officially meets Noctis, the eccentric, immortal priest of the Sun God, forming an unlikely alliance." },
        { ch: 630, type: "event", spoiler: 2, text: "The War of the Immortal Lords.", textDetail: "The cohort reunites in the past and participates in a massive, world-ending war to defeat the immortal lords and conquer the Nightmare." },
        { ch: 650, type: "event", spoiler: 3, text: "Freeing the Demon of Desire.", textDetail: "The climax of the Second Nightmare. The Ivory Tower is breached, Hope is released, and the Nightmare officially ends. Sunny ascends to become a Master (Ascended)." },
        { ch: 660, type: "event", spoiler: 1, text: "Return to the Waking World.", textDetail: "Sunny wakes up in the real world as a true Master. His power and status have drastically increased, but he realizes the political landscape is more dangerous than ever." },
        { ch: 680, type: "lore", spoiler: 2, text: "The Great Clans prepare for War.", loreDetail: "The tension between Clan Valor and Clan Song reaches a boiling point. Both factions try to recruit or control the newly ascended Masters from the Second Nightmare." },
        { ch: 700, type: "event", spoiler: 2, text: "Sunny's New Assignment.", textDetail: "To avoid becoming a pawn in the war between the Great Clans, Sunny accepts a dangerous government assignment. He is deployed to the Southern Quadrant (Antarctica)." },
        { ch: 720, type: "lore", spoiler: 2, text: "The Chain of Nightmares.", loreDetail: "Sunny learns the terrifying truth: a massive, unprecedented chain of Nightmare Gates is projected to open in Antarctica, threatening to wipe out the entire continent." },
        { ch: 730, type: "event", spoiler: 1, text: "Preparations for Antarctica.", textDetail: "Sunny gathers supplies, upgrades his Memories, and prepares his Shadows for the brutal, large-scale war against the nightmare creatures that will soon flood Antarctica." },
        { ch: 750, type: "event", spoiler: 3, text: "The Return of the Changing Star.", textDetail: "A miraculous, world-shaking event occurs. After surviving completely alone in the hellish Forgotten Shore for years, Nephis finally steps out of the Dream Realm into the waking world as a Master." },
        { ch: 765, type: "event", spoiler: 2, text: "The Gala and the Reunion.", textDetail: "Sunny and Nephis reunite at a grand gala. They confront their fractured relationship and the reality of the Shadow Slave bond. Nephis reveals she has joined Clan Valor to destroy it from within." },
        { ch: 780, type: "event", spoiler: 1, text: "Deployment to Antarctica.", textDetail: "Sunny leaves for the Southern Quadrant. He is assigned his own military squad and begins operations in the freezing, apocalyptic landscape." },
        { ch: 800, type: "lore", spoiler: 2, text: "The Chain of Nightmares begins.", loreDetail: "The true scale of the disaster is revealed. Thousands of Nightmare Gates begin opening across Antarctica, unleashing endless hordes of monsters." },
        { ch: 820, type: "event", spoiler: 2, text: "The Devil of Antarctica.", textDetail: "Leading his squad through impossible odds, Sunny adopts a ruthless, unstoppable fighting style in the snow, earning him the terrifying military moniker: The Devil of Antarctica." },
        { ch: 840, type: "event", spoiler: 3, text: "The Goliath appears.", textDetail: "A massive, Titan-class Nightmare Creature known as the Goliath emerges in Antarctica, presenting a threat that even a team of Masters cannot easily defeat." },
        { ch: 850, type: "event", spoiler: 2, text: "The Defense of Falcon Scott.", textDetail: "Sunny and his forces begin the desperate defense of the civilian evacuation center, Falcon Scott, as the situation in Antarctica deteriorates into pure despair." },
        { ch: 860, type: "event", spoiler: 2, text: "The Brutality of the Campaign.", textDetail: "Sunny's squad faces the harsh realities of military operations in a frozen, war-torn landscape, constantly battling endless waves of Nightmare Creatures." },
        { ch: 880, type: "event", spoiler: 3, text: "The Horror of LO49.", textDetail: "The cohort is deployed to the LO49 settlement, where they uncover a terrifying, psychological nightmare that pushes the team to the brink of insanity." },
        { ch: 900, type: "lore", spoiler: 2, text: "The Weight of Leadership.", loreDetail: "Sunny struggles with the immense pressure of keeping his subordinates alive while realizing that humanity's forces are treated as mere pawns by the Great Clans." },
        { ch: 930, type: "event", spoiler: 2, text: "The Coastal Highway Escape.", textDetail: "After surviving the mountain horrors, Sunny leads a desperate convoy of survivors along the coastal highway, seeking refuge in a walled city." },
        { ch: 950, type: "event", spoiler: 2, text: "Endurance and Survival.", textDetail: "The Antarctica Campaign exacts a heavy toll. Sunny and his group endure exhaustion and constant tension, fighting relentlessly to protect the remaining civilians." },
        { ch: 980, type: "event", spoiler: 3, text: "The Siege of Falcon Scott.", textDetail: "The desperate defense of the megacity Falcon Scott begins. Sunny and the First Army fight impossible battles to buy time for the evacuation." },
        { ch: 1000, type: "lore", spoiler: 2, text: "The Evacuation Effort.", loreDetail: "The sheer scale of the tragedy is revealed as humanity attempts to evacuate 200 million refugees while under constant attack by Nightmare Creatures." },
        { ch: 1030, type: "event", spoiler: 3, text: "The Toll of War.", textDetail: "Sunny is pushed to his absolute physical and mental limits. He witnesses immense sacrifices and questions his own purpose as the city becomes increasingly hollowed out." },
        { ch: 1050, type: "event", spoiler: 3, text: "The Winter Beast Approaches.", textDetail: "A terrifying new threat, the 'Winter Beast', begins to menace the depopulated city of Falcon Scott, bringing a deep, unnatural freeze and sealing the city's dark fate." },
        { ch: 1060, type: "event", spoiler: 3, text: "The Fall of Falcon Scott.", textDetail: "The tragic conclusion of the siege. Despite miraculous efforts and millions saved, the city is ultimately lost to the endless tides of Nightmare Creatures." },
        { ch: 1080, type: "event", spoiler: 2, text: "The Aftermath.", textDetail: "Sunny, Jet, and the surviving members of the Irregular Squad grapple with extreme trauma, exhaustion, and the devastating geopolitical consequences of the city's fall." },
        { ch: 1100, type: "lore", spoiler: 2, text: "The Great Clans Move.", loreDetail: "With the Antarctica Campaign largely concluded, the narrative shifts back to the waking world. The power struggle between Clan Valor and Clan Song intensifies." },
        { ch: 1120, type: "event", spoiler: 2, text: "The Burden of Strength.", textDetail: "Sunny navigates the complex social and political landscape of the waking world, dealing with his growing influence and the dark secrets of his Shadow Aspect." },
        { ch: 1150, type: "event", spoiler: 1, text: "Setting the Stage.", textDetail: "The immediate devastation of the Antarctica war wraps up, setting the stage for the next major phase of the story and the looming threat of the Third Nightmare." },
        { ch: 1160, type: "event", spoiler: 2, text: "Entering the Third Nightmare.", textDetail: "Sunny and the cohort dive into the Seed of the Third Nightmare, arriving in the legendary and terrifying Tomb of Ariel." },
        { ch: 1180, type: "lore", spoiler: 2, text: "The Great River.", loreDetail: "Sunny finds himself isolated in an endless expanse of mist and water known as the Great River, a surreal environment that defies logic and flows backwards through time." },
        { ch: 1200, type: "event", spoiler: 2, text: "The Giant Turtle.", textDetail: "After surviving alone in the mist, Sunny discovers a massive landmass that is actually the shell of a gargantuan, ancient Great Monster." },
        { ch: 1220, type: "event", spoiler: 1, text: "Reunion on the Shell.", textDetail: "Sunny miraculously finds Nephis surviving on the back of the giant turtle. They reunite and share their findings about the bizarre nature of the mist." },
        { ch: 1240, type: "lore", spoiler: 3, text: "Secrets of Ariel's Tomb.", loreDetail: "Sunny and Nephis deduce that the Tomb of Ariel is not a literal grave, but an impossible structure built by the Daemon where time flows from the future into the past." },
        { ch: 1250, type: "event", spoiler: 2, text: "Navigating the River.", textDetail: "While analyzing the mechanics of the Nightmare, Sunny and Nephis are forced to deal with immediate, terrifying threats, such as a massive sea serpent circling their temporary sanctuary." },
        { ch: 1260, type: "event", spoiler: 1, text: "The Chain Breaker.", textDetail: "Sunny and Nephis continue their journey up the Great River, traveling deeper into the past aboard the flying ship, the Chain Breaker." },
        { ch: 1280, type: "event", spoiler: 3, text: "Meeting Ananke.", textDetail: "They encounter Ananke, an ancient sybil and priestess of Weaver, who becomes their guide and reveals crucial lore about the Nightmare." },
        { ch: 1300, type: "lore", spoiler: 2, text: "The Sybils' Refuge.", loreDetail: "Ananke explains that the sybils sought refuge in the Great River to escape the apocalyptic war between the Gods and Daemons, living in a realm outside of normal time." },
        { ch: 1330, type: "powerup", spoiler: 2, text: "Advanced Weaving.", powerDetail: "Sunny spends his time on the ship heavily refining his skills as a Weaver, studying the intricate spellweave of Ananke's Mantle and the Estuary Key." },
        { ch: 1350, type: "event", spoiler: 2, text: "Approaching Fallen Grace.", textDetail: "Guided by Ananke, Sunny and Nephis close in on Fallen Grace, the last surviving city of the sybils, located beneath a perpetual, blood-red sunset." },
        { ch: 1380, type: "lore", spoiler: 3, text: "Wind Flower's Revelation.", loreDetail: "Sunny interacts with Wind Flower, uncovering world-altering truths about the Waking World, the Dream Realm, and the true nature of the Nightmare Spell." },
        { ch: 1400, type: "lore", spoiler: 2, text: "The Doom War.", loreDetail: "Deep lore regarding the apocalyptic war between the Gods and Daemons is revealed, changing Sunny's understanding of Ariel and the history of the universe." },
        { ch: 1420, type: "event", spoiler: 2, text: "Temporal Anomalies.", textDetail: "As they navigate deeper into the Great River, Sunny and Nephis face increasingly bizarre and dangerous time anomalies that threaten to erase them entirely." },
        { ch: 1450, type: "event", spoiler: 3, text: "The Seventh Realm.", textDetail: "A critical turning point is reached. The concept of the 'Seventh Realm' is introduced, shifting the cohort's understanding of the cosmos as the climax of the Third Nightmare approaches." },
        { ch: 1480, type: "lore", spoiler: 3, text: "The Nightmare's Truth.", loreDetail: "Deep, world-altering truths are revealed about the connection between the Waking World, the Dream Realm, and the ultimate purpose of the Nightmare Spell crafted by Weaver." },
        { ch: 1500, type: "event", spoiler: 2, text: "Tactical Division.", textDetail: "Facing impossible odds in the Great River, Nephis and the cohort decide to divide their forces into mobile teams to increase their chances of surviving the looming threats." },
        { ch: 1550, type: "event", spoiler: 3, text: "The Final Push.", textDetail: "The psychological weight of the Third Nightmare bears down on the cohort as they prepare for their ultimate, desperate confrontation at the end of the Great River." },
        { ch: 1580, type: "powerup", spoiler: 3, text: "Fateless.", powerDetail: "The climax of the Third Nightmare. Sunny acquires [Soul Weave] and makes a world-breaking decision to severe his ties to the Nightmare Spell. He becomes a Saint (Transcendent) and gains the 'Fateless' attribute, breaking his slave bond but causing everyone in the universe to completely forget his existence." },
        { ch: 1590, type: "event", spoiler: 3, text: "The Forgotten Saint.", textDetail: "Sunny returns to the Waking World. Despite being a powerful Transcendent, he is entirely alone, erased from the memories of Nephis, Cassie, Rain, and the rest of the world." },
        { ch: 1610, type: "lore", spoiler: 2, text: "A New Beginning.", loreDetail: "Adapting to his heartbreaking new reality, Sunny opens a humble memory shop in Bastion, operating from the shadows as a merchant while independently planning his next moves." },
        { ch: 1630, type: "event", spoiler: 2, text: "Shadow Manipulations.", textDetail: "Using his 'Fateless' status, Sunny begins to operate completely off the grid, building his own independent strength and manipulating events without the Great Clans or the Nightmare Spell tracking him." },
        { ch: 1650, type: "event", spoiler: 2, text: "Return to Falcon Scott.", textDetail: "Sunny revisits the frozen ruins of Falcon Scott, confronting the ghosts of his past and preparing for the inevitable, full-scale war brewing between Clan Valor and Clan Song." },
        { ch: 1660, type: "event", spoiler: 2, text: "The Lord of Shadows.", textDetail: "Sunny fully embraces his new identity as the mysterious 'Lord of Shadows', establishing his own domain and operating in the background of the escalating Domain War." },
        { ch: 1680, type: "lore", spoiler: 3, text: "The Domain War Escalates.", loreDetail: "The tension between the Sovereigns (Clan Valor and Clan Song) reaches a breaking point, leading to massive-scale battles, political maneuvering, and a devastating clash for supremacy." },
        { ch: 1700, type: "event", spoiler: 2, text: "The Ebony Tower Outpost.", textDetail: "The Fire Keepers establish a dangerous outpost at the Ebony Tower in the Sky Below, navigating the deadly phenomenon known as the 'Crushing'." },
        { ch: 1730, type: "lore", spoiler: 3, text: "Defying the Sovereigns.", loreDetail: "Sunny executes complex deceptions and strategic movements across the Dream Realm, attempting to carve out a future entirely independent of the Sovereigns' tyrannical influence." },
        { ch: 1750, type: "event", spoiler: 2, text: "Gathering Strength.", textDetail: "The narrative focuses heavily on the unfolding Domain War. Sunny gathers resources, strengthens his hidden domain, and prepares his ultimate moves to survive the conflict." },
        { ch: 1760, type: "event", spoiler: 3, text: "The Dual Incarnation.", textDetail: "Sunny maintains a precarious dual identity. He operates as the powerful 'Lord of Shadows' while simultaneously acting as 'Master Sunless', a Knight Commander in Clan Valor's Sword Army." },
        { ch: 1780, type: "lore", spoiler: 2, text: "The Sword Army Camp.", loreDetail: "Within the massive fortified camp of the Sword Army, Sunny observes the political maneuvering of Clan Valor, interacting closely with Nephis and Cassie while keeping his true identity guarded." },
        { ch: 1800, type: "event", spoiler: 2, text: "Playing Both Sides.", textDetail: "Sunny faces the tense (and sometimes humorous) reality of attending high-level war councils in both of his identities, feeding information back and forth while acting as a spy." },
        { ch: 1820, type: "event", spoiler: 1, text: "Rising in the Ranks.", textDetail: "Despite his desire for independence, Sunny inadvertently rises through the ranks of the Sword Army's officer corps, becoming increasingly entangled in their military hierarchy." },
        { ch: 1850, type: "event", spoiler: 3, text: "The War Council.", textDetail: "A significant war council takes place, deciding the next major moves in the Domain War. Sunny balances his own hidden goals against the demands of the warring factions." },
        { ch: 1880, type: "lore", spoiler: 3, text: "The Cost of War.", loreDetail: "The Domain War intensifies, shedding light on the brutal attrition and massive human cost caused by the Sovereigns' relentless pursuit of power." },
        { ch: 1912, type: "lore", spoiler: 3, text: "Godgrave's Secret.", loreDetail: "Godgrave is revealed to be the actual petrified corpse of a deity slain during the ancient Doom War. The surrounding geography and deadly marrow atmosphere stem directly from the god's decayed divine lineage." },
        { ch: 1915, type: "powerup", spoiler: 3, text: "Transcendent Multitasking.", powerDetail: "Sunny advances his essence management and multitasking across his Transcendent incarnations. He maintains high-level combat focus as the Lord of Shadows in Godgrave while seamlessly conducting daily operations as a humble shopkeeper in Bastion." },
        { ch: 1952, type: "powerup", spoiler: 2, text: "Refined Shadow Arsenal.", powerDetail: "Sunny refines the density and adaptability of his shadow armor and weapons, allowing his Saint-level combat style to handle massive impact force against the terrifying corrupted abominations in Godgrave." },
        { ch: 1974, type: "lore", spoiler: 3, text: "Sovereign Domains.", loreDetail: "Further structural mechanics are detailed regarding how Anvil of Valor and Ki Song project their Sovereign Domains through local Citadel footholds and soul essence anchors across the Dream Realm." },
        { ch: 1989, type: "event", spoiler: 3, text: "The War for Godgrave.", textDetail: "The latest chapters. Clan Valor and Clan Song's expeditionary forces wage full-scale war within Godgrave — the petrified corpse of a fallen deity. Sunny operates through his divided incarnations, fighting as the Lord of Shadows while maintaining his cover as a memory shopkeeper in Bastion. The Domain War is at its most brutal and intense phase yet." }
    ]
    ,
    inventoryItems: {

        sunny: [
            {
                id: "s1", name: "Rusted Shiv",
                image: 'assets/items/rusted_shiv.png', slot: "weapon", ch: 1, rarity: "common", emoji: "🗡️", color: "#888", desc: "A crude blade scavenged on the first night of the First Nightmare. Sunny's first real weapon — barely sharp, but kept him alive.", stat: "ATK +5 | Durability: Low"
            },
            {
                id: "s2", name: "Shadow Coin Pouch",
                image: 'assets/items/shadow_coin_pouch.png', slot: "accessory", ch: 2, rarity: "uncommon", emoji: "💰", color: "#FFD700", desc: "The tangible manifestation of the Cursed Aspect. Shadow coins are Sunny's true currency — each one grants a choice instead of a power.", stat: "Aspect Resource | Regenerates in Nightmare"
            },
            {
                id: "s3", name: "Nightmare Leather Garb",
                image: 'assets/items/nightmare_leather_garb.png', slot: "armor", ch: 5, rarity: "common", emoji: "🧥", color: "#4A4A6A", desc: "Crude armor crafted from nightmare creature hide during the First Nightmare survival arc. It absorbed several fatal blows.", stat: "DEF +8 | Nightmare Resistance: Low"
            },
            {
                id: "s13", name: "Mask of the Nameless",
                image: 'assets/items/mask_of_nameless.png', slot: "accessory", ch: 30, rarity: "legendary", emoji: "🎭", color: "#2D0A3A", desc: "Sunny's most critical non-combat tool — a featureless dark mask worn to conceal his Awakened aura. Anyone looking at him through the mask sees only a Dormant with no power. His defining survival tool for hiding his true strength from allies and enemies alike.", stat: "Power Concealment: 100% | Rank Hidden | Aura: Dormant-level"
            },
            {
                id: "s4", name: "Iron Nightmare Blade",
                image: 'assets/items/iron_nightmare_blade.png', slot: "weapon", ch: 50, rarity: "uncommon", emoji: "⚔️", color: "#7CA9C4", desc: "A solid weapon claimed after surviving the First Nightmare exit trial. Forged in nightmare iron — heavier than it looks, holds an edge.", stat: "ATK +22 | Durability: High | Nightmare-Iron"
            },
            {
                id: "s5", name: "Shadow Cloak",
                image: 'assets/items/shadow_cloak.png', slot: "cloak", ch: 60, rarity: "rare", emoji: "🌑", color: "#1A1A3A", desc: "A cloak woven from condensed shadow essence — the first physical manifestation of Sunny's growing shadow aspect outside of combat.", stat: "Stealth +30 | Shadow Sense enabled | Visual concealment"
            },
            {
                id: "s14", name: "Bone Nightmare Pauldrons",
                image: 'assets/items/bone_pauldrons.png', slot: "armor", ch: 70, rarity: "rare", emoji: "🦴", color: "#5A4A3A", desc: "Shoulder guards crafted from the bones of a Master-rank nightmare creature. They harden Sunny's upper body against slashing attacks.", stat: "DEF +28 | Slash Resistance | Master-Bone: reduces pain"
            },
            {
                id: "s6", name: "Shade's Binding",
                image: 'assets/items/shades_binding.png', slot: "offhand", ch: 80, rarity: "rare", emoji: "👁️", color: "#C41E3A", desc: "The first echo — 'Shade' — bound to Sunny's will. Not held physically, but worn as a dark aura around the off-hand that extends into shadow.", stat: "Summons Shade | Echo Control I | Shadow Perception"
            },
            {
                id: "s15", name: "Echo Whisper",
                image: 'assets/items/echo_whisper.png', slot: "special", ch: 100, rarity: "rare", emoji: "🌀", color: "#3A1A5A", desc: "An ability crystallized from Sunny's aspect — allows him to hear through any echo's senses regardless of distance. Critical for reconnaissance.", stat: "Echo Perception | Range: Unlimited | Sensory Link: all echoes"
            },
            {
                id: "s7", name: "Veil of Shadow",
                image: 'assets/items/veil_of_shadow.png', slot: "cloak", ch: 180, rarity: "legendary", emoji: "🌒", color: "#6B21A8", desc: "A deeper manifestation of the shadow cloak — fully able to bend light around Sunny, rendering him practically invisible in darkness.", stat: "Stealth +75 | True Concealment | Shadow Walk I"
            },
            {
                id: "s16", name: "Carapace of Night",
                image: 'assets/items/carapace_of_night.png', slot: "armor", ch: 220, rarity: "legendary", emoji: "🛡️", color: "#1A0A2E", desc: "Full-body armor grown from hardened shadow mass — not manufactured but manifested. It repairs itself by consuming nearby shadows.", stat: "DEF +50 | Self-Repair | Shadow Absorption: 25% dmg"
            },
            { id: "s8", name: "Echo Commander's Seal", slot: "accessory", ch: 300, rarity: "legendary", image: 'assets/items/echo_commanders_seal.png', color: "#C41E3A", desc: "The crescent sigil that appears on Sunny's palm as his echo army exceeds 25. Commands coordinated tactical formation attacks.", stat: "Echo Command +25 | Formation Tactics | Shadow Sync" },
            { id: "s17", name: "Thorn of Nightmare", slot: "weapon", ch: 380, rarity: "legendary", image: 'assets/items/thorn_of_nightmare.png', color: "#2A0A4A", desc: "A slim shadow-blade that grows from Sunny's forearm on command — functionally a part of his body. Cuts nightmare essence cleanly.", stat: "ATK +60 | Bodypart Weapon | Nightmare Sever | No Disarm" },
            { id: "s9", name: "Shadow Aspect Armor", slot: "armor", ch: 420, rarity: "legendary", image: 'assets/items/shadow_aspect_armor.png', color: "#1A0A2E", desc: "Armor that does not exist in the waking world — manifested fully from shadow mass upon reaching Refined rank. Absorbs non-light damage.", stat: "DEF +65 | Shadow Absorption | Rank: Refined" },
            {
                id: "s18", name: "Dream Ring — Nightmare Heart",
                image: 'assets/items/dream_ring.png', slot: "accessory", ch: 450, rarity: "mythic", emoji: "💍", color: "#8B0050", desc: "A crystallized nightmare heart worn as a ring — it pulses with dream energy and amplifies Sunny's aspect in the nightmare realm by 40%.", stat: "Nightmare ATK/DEF +40% | Dream Anchor | Anti-Wake"
            },
            { id: "s10", name: "Blade of Severed Light", slot: "weapon", ch: 500, rarity: "legendary", image: 'assets/items/blade_of_severed_light.png', color: "#4B0082", desc: "A shadow-forged blade that cuts both physical matter and nightmare essence. The edge is visible only to those with nightmare perception.", stat: "ATK +80 | Essence Cut | Ignores 40% armor" },
            {
                id: "s19", name: "Nameless Fragment — The Dreamless",
                image: 'assets/items/nameless_fragment.png', slot: "special", ch: 600, rarity: "mythic", emoji: "⬛", color: "#0A0004", desc: "An aspect of Sunny's identity crystallized as an object — the Dreamless nature. He is the only Awakened who does not dream, which makes him invisible to certain nightmare detection systems.", stat: "Dream Invisibility | Nightmare Detection: immune | Dreamless State"
            },
            {
                id: "s11", name: "Shadow General's Mantle",
                image: 'assets/items/shadow_general_mantle.png', slot: "cloak", ch: 750, rarity: "mythic", emoji: "🌑", color: "#3D0066", desc: "The 'general-tier' echo army signifier — a living cloak of shadows that responds to battlefield commands autonomously. Extremely rare.", stat: "Echo Command +73 | Auto-Formation | Master Rank Req."
            },
            {
                id: "s12", name: "Sovereign's Shadow Seal",
                image: 'assets/items/sovereign_shadow_seal.png', slot: "special", ch: 900, rarity: "mythic", emoji: "☾", color: "#0A0014", desc: "The absolute manifestation of Sunny's Master-rank shadow aspect. A seal that can create shadow territory — a domain where all light is consumed.", stat: "Shadow Territory | Domain: 200m | Master Rank"
            },
            { id: "s20", name: "Saint-Rank Shadow Core", image: 'assets/items/saint_rank_shadow_core.png', slot: "special", ch: 1150, rarity: "mythic", emoji: "⬛", color: "#0A001A", desc: "The manifestation of Sunny's Saint-rank shadow aspect — shadows become semi-real, able to affect the physical world directly. This core pulses with the weight of a hundred echoes.", stat: "Shadow Mass +200% | Physical Density | Echo Sync: 100 shadows" },
            { id: "s21", name: "Chain Breaker Compass", image: 'assets/items/chain_breaker_compass.png', slot: "accessory", ch: 1480, rarity: "mythic", emoji: "🧭", color: "#0EA5E9", desc: "Navigational instrument from the Chain Breaker — the ship that carried the cohort down the Great River. It points not toward north, but toward the Estuary: the mouth of time itself.", stat: "Navigation: Great River | Temporal Read | Anti-Vortex" },
            { id: "s22", name: "The Forgotten Seal", image: 'assets/items/the_forgotten_seal.png', slot: "special", ch: 1600, rarity: "mythic", emoji: "🕳️", color: "#000000", desc: "After transcending the Spell, this seal appeared on Sunny's soul — invisible to everyone because no one remembers he exists. It represents his freedom from the Spell and his complete isolation from humanity.", stat: "Spell Transcendence | Memory Erasure: global | Outside the Spell" },
        ],

        nephis: [
            { id: "n1", name: "Memory Clan Robe", slot: "armor", ch: 5, rarity: "uncommon", image: 'assets/items/memory_clan_robe.png', color: "#C8A882", desc: "Nephis arrived in the First Nightmare wearing her clan's ceremonial robes — woven with memory-enchanted thread. Elegant despite the battlefield.", stat: "DEF +6 | Memory Resistance | Clan Heritage" },
            { id: "n2", name: "Flame Edge Dagger", slot: "weapon", ch: 5, rarity: "uncommon", image: 'assets/items/flame_edge_dagger.png', color: "#FF6B00", desc: "Nephis's primary sidearm through the early arcs — a dagger that ignites with her flame aspect on contact. Precise, controlled, devastating.", stat: "ATK +18 | Flame Edge: Burns on strike | Fast Draw" },
            { id: "n3", name: "Flame Aspect Bracer", slot: "accessory", ch: 10, rarity: "rare", image: 'assets/items/flame_aspect_bracer.png', color: "#FF8C00", desc: "Bracers that channel Nephis's flame aspect — allowing sustained flame projection without scorching her own hands.", stat: "Flame Control +20 | Sustained Burn | Aspect Channel" },
            {
                id: "n4", name: "White Flame Sword",
                image: 'assets/items/white_flame_sword.png', slot: "weapon", ch: 100, rarity: "rare", emoji: "⚡", color: "#FFF5E0", desc: "A blade that burns with Nephis's abnormal white flame — not orange like normal fire. It sears nightmare essence directly.", stat: "ATK +45 | White Flame | Nightmare Sear | Anti-Shadow"
            },
            { id: "n5", name: "Flame Aspect Veil", slot: "cloak", ch: 150, rarity: "rare", image: 'assets/items/flame_aspect_veil.png', color: "#FFD700", desc: "A veil of accumulated flame aura — not actual cloth, but solidified heat that follows Nephis like a corona when she moves at speed.", stat: "Flame Aura: passive burn field | DEF +15 | Intimidation" },
            { id: "n6", name: "Memory Clan Guardian Shield", slot: "offhand", ch: 200, rarity: "legendary", image: 'assets/items/memory_clan_guardian_shield.png', color: "#8B7355", desc: "The Memory Clan's combat shield — engraved with the clan's founding memory-seals. Deflects both physical and memory-based attacks.", stat: "DEF +50 | Memory Seal: Resist memory disruption | Block" },
            { id: "n7", name: "Cold White Flame Armor", slot: "armor", ch: 250, rarity: "legendary", image: 'assets/items/cold_white_flame_armor.png', color: "#E0F4FF", desc: "After Nephis's flame turns cold-white in the Tomb of Ariel, her armor transforms — appearing as frozen white fire that burns absolutely.", stat: "DEF +70 | Cold Flame Absorption | Absolute Zero field" },
            { id: "n8", name: "Flame Sovereign's Crown", slot: "accessory", ch: 400, rarity: "mythic", image: 'assets/items/flame_sovereigns_crown.png', color: "#FFD700", desc: "Not a literal crown — a permanent manifestation of Nephis's flame aspect at its peak. The white flame forms a halo above her head in battle.", stat: "Flame Domain +50m | City-Scale Flame | Transcendent Aura" },
            { id: "n9", name: "Memory Clan Champion Blade", slot: "weapon", ch: 500, rarity: "mythic", image: 'assets/items/memory_clan_champion_blade.png', color: "#FFEAA0", desc: "The Memory Clan's champion-grade weapon, formally granted to Nephis after her Refined rank advancement. Holds clan memories as power.", stat: "ATK +90 | Memory Resonance | Aspect Amplifier x2" },
            { id: "n10", name: "Desert Flame Mantle", image: 'assets/items/desert_flame_mantle.png', slot: "cloak", ch: 1260, rarity: "mythic", emoji: "🔥", color: "#FF4500", desc: "During the month-long training with Sunny on the giant turtle in the Nightmare Desert, Nephis's flame aspect evolved once more — manifesting as a permanent mantle of heat that bends the air around her.", stat: "Flame Aura +100% | Heat Distortion | Desert Survival" },
            { id: "n11", name: "Transcendent Flame Crown", image: 'assets/items/transcendent_flame_crown.png', slot: "accessory", ch: 1500, rarity: "mythic", emoji: "👑", color: "#FFD700", desc: "The ultimate manifestation of Nephis's Transcendent-rank flame aspect. The white flame forms a permanent ethereal crown that burns reality itself — visible only to those with nightmare perception.", stat: "Transcendent Aura | Reality Burn | Flame Domain: 100m" },
        ],

        cassie: [
            { id: "c1", name: "Sightless Circlet", slot: "accessory", ch: 3, rarity: "uncommon", image: 'assets/items/sightless_circlet.png', color: "#9B59B6", desc: "A simple circlet Cassie wore from the beginning — it doesn't provide vision, but amplifies her prophecy aspect's thread-perception.", stat: "Prophecy Range: +50m | Thread Count: +10 | Focus" },
            { id: "c2", name: "Thread-Sight Staff", slot: "weapon", ch: 3, rarity: "rare", image: 'assets/items/thread_sight_staff.png', color: "#7D3C98", desc: "A wooden staff Cassie uses to navigate without sight. The wood is from a nightmare tree — it resonates with fate threads.", stat: "ATK +8 | Fate Thread Sensor | Navigation in Darkness" },
            { id: "c3", name: "Prophecy Shroud", slot: "cloak", ch: 30, rarity: "rare", image: 'assets/items/prophecy_shroud.png', color: "#2C1654", desc: "A dark cloak that swirls with faint starlight patterns when Cassie is actively seeing prophecies. Other Awakened find it unsettling.", stat: "Prophecy Stability +30 | Intimidation field: Seer" },
            { id: "c4", name: "Blind Oracle's Focus", slot: "offhand", ch: 50, rarity: "rare", image: 'assets/items/blind_oracles_focus.png', color: "#8A2BE2", desc: "A crystal orb Cassie uses to anchor large-scale prophecies — prevents her from getting lost in far-future visions.", stat: "Prophecy Anchor | Range +100% | Vision Stability" },
            { id: "c5", name: "Fate Thread Blade", slot: "weapon", ch: 100, rarity: "legendary", image: 'assets/items/fate_thread_blade.png', color: "#6C3483", desc: "A knife Cassie carries — enchanted to cut fate threads in the physical world. She uses it when a vision shows a thread that must be severed.", stat: "ATK +30 | Thread Cut: severs minor fate events | Anti-Destiny" },
            { id: "c6", name: "Seer's Robes", slot: "armor", ch: 150, rarity: "legendary", image: 'assets/items/seers_robes.png', color: "#4A235A", desc: "Robes that adapt to the shape of emerging prophecies — patterns shift and change on the fabric as new futures present themselves.", stat: "DEF +25 | Prophecy Clarity +50 | Future Sight: passive" },
            { id: "c7", name: "Oracle's Chain", slot: "accessory", ch: 540, rarity: "mythic", image: 'assets/items/oracles_chain.png', color: "#9B59B6", desc: "After Cassie's prophecy aspect evolves to multi-day temporal range, this chain manifests — binding her to the present despite seeing days ahead.", stat: "Temporal Anchor | Prophecy Range: 72hrs | Present Lock" },
            { id: "c8", name: "Time Loop Thread", image: 'assets/items/time_loop_thread.png', slot: "special", ch: 1436, rarity: "mythic", emoji: "🔮", color: "#22D3EE", desc: "On Wind Flower Island, Cassie's Prophecy Aspect allowed her to perceive the time loop's structure differently — she sensed fate threads doubling and re-weaving. This crystallized thread is a remnant of that awareness.", stat: "Temporal Perception | Loop Detection | Thread Vision" },
            { id: "c9", name: "Estuary Vision Stone", image: 'assets/items/estuary_vision_stone.png', slot: "offhand", ch: 1570, rarity: "mythic", emoji: "💎", color: "#7C3AED", desc: "At the Estuary, Cassie witnessed the revelation of the Seven Gods alongside Sunny. This vision stone preserves the prophetic resonance of that moment — the truth of the Forgotten God imprinted into crystal.", stat: "Lore Anchor | Forgotten God Resonance | Prophecy: Divine-tier" },
        ],

        effie: [
            { id: "e1", name: "Iron Gauntlets", slot: "offhand", ch: 4, rarity: "uncommon", image: 'assets/items/iron_gauntlets.png', color: "#708090", desc: "Effie's preferred combat tool — iron gauntlets that reinforce her naturally superhuman punch force. She's never without them.", stat: "ATK +15 | Punch Force x2 | Bone Break chance: 20%" },
            { id: "e2", name: "Hunt Aspect Wraps", slot: "accessory", ch: 4, rarity: "rare", image: 'assets/items/hunt_aspect_wraps.png', color: "#2ECC71", desc: "Binding wraps that channel Effie's Hunt Aspect through her limbs — allowing her to track nightmare creatures by touch alone.", stat: "Hunt Tracking | Touch Perception | Speed +20%" },
            { id: "e3", name: "Nightmare Hide Plate", slot: "armor", ch: 20, rarity: "uncommon", image: 'assets/items/nightmare_hide_plate.png', color: "#556B2F", desc: "Heavy armor plates skinned from Awakened-class nightmare creatures. Effie cobbled it together herself — messy, heavy, very effective.", stat: "DEF +35 | Weight: Heavy | Nightmare Resistance: Mid" },
            { id: "e4", name: "Huntress Greatsword", slot: "weapon", ch: 50, rarity: "rare", image: 'assets/items/huntress_greatsword.png', color: "#228B22", desc: "An oversized blade suited to Effie's strength — most Awakened couldn't swing it, but she does so with terrifying speed.", stat: "ATK +55 | Two-handed | Cleave: hits 3 targets | Heavy" },
            { id: "e5", name: "Beast Pelt Cloak", slot: "cloak", ch: 100, rarity: "rare", image: 'assets/items/beast_pelt_cloak.png', color: "#2D5A27", desc: "A cloak of woven nightmare beast pelts — they retain a faint hunt aura, making Effie harder to detect by scent or noise.", stat: "Stealth +20 | Hunt Aura | Beast Deterrent field" },
            { id: "e6", name: "Hunt Constellation Armbands", slot: "accessory", ch: 650, rarity: "mythic", image: 'assets/items/hunt_constellation_armbands.png', color: "#00FF7F", desc: "Upon reaching Master rank, Effie's Hunt Aspect forms visible constellation patterns on her skin. The armbands are the physical focus.", stat: "Hunt Domain | Nightmare Command: passive | Master Rank" },
            { id: "e7", name: "Alpha Predator Armor", slot: "armor", ch: 650, rarity: "mythic", image: 'assets/items/alpha_predator_armor.png', color: "#006400", desc: "Post-Master rank armor — nightmare creatures of Awakened class instinctively submit when they see this armor, recognizing the Hunt Aspect's dominance.", stat: "DEF +110 | Creature Submission aura | Physical: x3 baseline" },
            { id: "e8", name: "Iron Fist of the Hunt", slot: "weapon", ch: 900, rarity: "mythic", image: 'assets/items/iron_fist_of_the_hunt.png', color: "#008000", desc: "Effie's Master-rank weapon — an iron gauntlet infused with Hunt Aspect essence. Each punch creates a shockwave that stuns everything within 10m.", stat: "ATK +100 | Shockwave: 10m stun | Nightmare Crush | Master" },
            { id: "e9", name: "Great River War Plate", image: 'assets/items/great_river_war_plate.png', slot: "armor", ch: 1480, rarity: "mythic", emoji: "🛡️", color: "#004D00", desc: "Armor reinforced during the Great River journey — nightmare creature bone plated with river-titan scales. Effie assembled it from kills during the perilous voyage.", stat: "DEF +130 | River Resistance | Temporal Shielding" },
            { id: "e10", name: "Mother's Resolve Gauntlets", image: 'assets/items/mothers_resolve_gauntlets.png', slot: "offhand", ch: 1600, rarity: "mythic", emoji: "🤲", color: "#00CC00", desc: "After Sunny's transcendence, Effie no longer remembers her battle companion. But her Supreme Memory farm thrives, and her son Little Ling — born as a Saint — is her new priority. These gauntlets are softer, designed for holding rather than hitting.", stat: "Saint-Child Containment | Physical: x4 | Farm Protection Mode" },
        ],

        kai: [
            { id: "k1", name: "Arrow Clan Recurve Bow", slot: "weapon", ch: 5, rarity: "uncommon", image: 'assets/items/arrow_clan_recurve_bow.png', color: "#8B4513", desc: "Kai's primary weapon — an Arrow Clan precision recurve bow. The clan's mark is carved into the grip. Every shot is calculated.", stat: "ATK +20 | Precision: +40% | Range: 300m | Silent" },
            { id: "k2", name: "Clan Quiver — 24 Arrows", slot: "offhand", ch: 5, rarity: "uncommon", image: 'assets/items/clan_quiver_24_arrows.png', color: "#A0522D", desc: "Arrow Clan signature arrows — fletched with nightmare raven feathers that stabilize trajectory in dimensional winds.", stat: "Arrow Capacity: 24 | Trajectory Stable | Piercing" },
            { id: "k3", name: "Hunter's Vest", slot: "armor", ch: 20, rarity: "uncommon", image: 'assets/items/hunters_vest.png', color: "#6B5844", desc: "Light combat vest favored by Arrow Clan scouts — padded in the right places, open enough for full draw motion.", stat: "DEF +15 | Mobility: High | Draw Speed: +25%" },
            { id: "k4", name: "Phantom Arrow Quiver", slot: "offhand", ch: 350, rarity: "legendary", image: 'assets/items/phantom_arrow_quiver.png', color: "#4169E1", desc: "After Refined rank — his arrows no longer need to follow physics. The quiver holds arrows that exist in perceptual space until they strike.", stat: "Phantom Trajectory | Curve: any angle | Invisible path" },
            { id: "k5", name: "Archer's Longcloak", slot: "cloak", ch: 100, rarity: "rare", image: 'assets/items/archers_longcloak.png', color: "#1C3A5E", desc: "A long dark cloak designed to break silhouette — when Kai is still, he is essentially invisible against any natural backdrop.", stat: "Stealth +45 | Silhouette Break | Observation Resistance" },
            { id: "k6", name: "Arrow Clan Intelligence Seal", slot: "accessory", ch: 350, rarity: "legendary", image: 'assets/items/arrow_clan_intelligence_seal.png', color: "#191970", desc: "After Kai reveals clan intel to Sunny — a personal seal that marks him as outside clan authority. It carries intelligence from clan archives.", stat: "Intel Access | Clan Network | Counter-Tracking" },
            { id: "k7", name: "Phantom Archer Armor", slot: "armor", ch: 820, rarity: "mythic", image: 'assets/items/phantom_archer_armor.png', color: "#000080", desc: "Master rank armor that bends light slightly — Kai appears as a distortion rather than a person when wearing this at range.", stat: "DEF +80 | Light Bend | Location Confusion | Master Rank" },
            { id: "k8", name: "Star-Path Composite Bow", slot: "weapon", ch: 820, rarity: "mythic", image: 'assets/items/star_path_composite_bow.png', color: "#4682B4", desc: "Kai's Master rank weapon — a bow strung with condensed arrow aspect. The string appears as a line of starlight. Draws itself.", stat: "ATK +95 | Self-Draw | Range: 2000m | Aspect Amplified" },
        ],

        morgans: [
            { id: "m1", name: "Blood Faction Robes", slot: "armor", ch: 120, rarity: "uncommon", image: 'assets/items/blood_faction_robes.png', color: "#8B0000", desc: "The signature deep crimson robes of the Blood Faction — woven with blood-sealing thread that prevents external manipulation of the wearer's blood.", stat: "DEF +20 | Blood Seal: self | Anti-Blood: resist" },
            { id: "m2", name: "Sanguine Dagger", slot: "weapon", ch: 120, rarity: "rare", image: 'assets/items/sanguine_dagger.png', color: "#DC143C", desc: "Morgan's blade — forged with blood-iron alloy. Contact with blood (friend or enemy) triggers the blood manipulation aspect.", stat: "ATK +30 | Blood Trigger: on cut | Aspect Activation" },
            { id: "m3", name: "Bloodweave Gloves", slot: "offhand", ch: 120, rarity: "rare", image: 'assets/items/bloodweave_gloves.png', color: "#A00000", desc: "Thin gloves that allow Morgan to shape and project blood at range without physical contact — a signature Blood Faction technique.", stat: "Blood Range: 30m | Projection | No Contact Required" },
            { id: "m4", name: "Pallid Mask", slot: "accessory", ch: 130, rarity: "legendary", image: 'assets/items/pallid_mask.png', color: "#DC143C", desc: "A bone-white mask Morgan wears in high-stakes encounters — it conceals his Awakened aura, making his rank undetectable.", stat: "Aura Concealment | Rank Hidden | Intimidation: extreme" },
            { id: "m5", name: "Blood Ritual Tome", slot: "special", ch: 200, rarity: "legendary", image: 'assets/items/blood_ritual_tome.png', color: "#8B0000", desc: "A tome containing Blood Faction ritual techniques — amplification rituals that push power beyond normal rank limits at physical cost.", stat: "Ritual: Power x1.5 | Cost: HP 30% | Blood Beyond Rank" },
            { id: "m6", name: "Crimson War Plate", slot: "armor", ch: 280, rarity: "legendary", image: 'assets/items/crimson_war_plate.png', color: "#B22222", desc: "Armor assembled from nightmare creature bone plated with blood-iron. Morgan's personal combat gear for serious engagements.", stat: "DEF +60 | Blood Absorption | Self-Heal: 5% on kill" },
            { id: "m7", name: "Sovereign Blood Seal", slot: "special", ch: 1050, rarity: "mythic", image: 'assets/items/sovereign_blood_seal.png', color: "#4A0000", desc: "After Morgan's deepening Blood Faction allegiances — a seal that marks him as aligned with forces beyond the Great Clans. Its true purpose is unknown.", stat: "Unknown Power | Sovereign Link | Blood Domain: 500m" },
        ],

        jet: [
            { id: "j1", name: "Soul Reaper's Scythe", slot: "weapon", ch: 55, rarity: "legendary", image: 'assets/items/soul_reapers_scythe.png', color: "#4169E1", desc: "Jet's Aspect Legacy — a chilling mist that solidifies into a deadly scythe. The blade bypasses physical armor entirely, striking directly at the enemy's soul. One of the most feared weapons in the Awakened world.", stat: "ATK +85 | Soul Strike | Armor Bypass: 100% | Mist Form" },
            { id: "j2", name: "First Army Officer's Coat", slot: "armor", ch: 55, rarity: "legendary", image: 'assets/items/first_army_officers_coat.png', color: "#1C3A5E", desc: "Colonel Jet's military coat — reinforced with nightmare-grade thread. Carries the insignia of the First Awakened Irregular Company. Practical, efficient, and terrifying when stained.", stat: "DEF +70 | Military Grade | Rank: Colonel | Authority Aura" },
            { id: "j3", name: "Soul Essence Siphon", slot: "accessory", ch: 100, rarity: "mythic", image: 'assets/items/soul_essence_siphon.png', color: "#2C1654", desc: "Jet's Dormant Ability manifests as this ethereal siphon — it absorbs soul essence from kills. Critical for her survival, as her soul cannot generate essence on its own and constantly leaks it.", stat: "Essence Absorb: on kill | Soul Leak: compensated | Survival Req." },
            { id: "j4", name: "Ascended War Mantle", slot: "cloak", ch: 1355, rarity: "mythic", image: 'assets/items/ascended_war_mantle.png', color: "#000080", desc: "After joining the cohort at Fallen Grace, Jet's Ascended-rank aura manifests as a dark mantle of chilling mist. Nightmare creatures instinctively flee from the Soul Reaper's presence.", stat: "Ascended Aura | Fear Field: 50m | Mist Domain | Soul Perception" },
        ]
    },

    // ── WORLD MAP LOCATIONS ──────────────────────────────────────────────────
    worldLocations: [
        {
            id: "nightmare-realm",
            name: "The Nightmare Realm",
            type: "realm",
            x: 50, y: 28,
            color: "#C41E3A",
            icon: "🌑",
            rank: "All Ranks",
            desc: "A dark parallel world that overlaps with reality. Awakened enter it to fight and grow. The longer you survive, the stronger you become. The Nightmare Realm is the source of all nightmare creatures and the origin of Awakened power. Its geography shifts and warps, creating new zones of danger constantly.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 1–1250",
            connections: ["first-nightmare-gate", "nightmare-incursion-zone", "sovereign-domain"]
        },
        {
            id: "first-nightmare-gate",
            name: "First Nightmare Gate",
            type: "dungeon",
            x: 30, y: 18,
            color: "#2DD4BF",
            icon: "🚪",
            rank: "Dormant → Awakened",
            desc: "The gateway through which newly awakened humans enter the Nightmare Realm for the first time. A 30-day survival trial awaits — those who survive earn their first rank. It was here that Sunny, Nephis, Cassie, Effie, and Kai first met and formed their uneasy alliance.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai"],
            chapters: "Ch. 1–50",
            connections: ["nightmare-realm"]
        },
        {
            id: "tomb-of-ariel",
            name: "Tomb of Ariel",
            type: "dungeon",
            x: 72, y: 42,
            color: "#A855F7",
            icon: "⚰️",
            rank: "Transcendent Legacy",
            desc: "A legendary nightmare dungeon containing the soul legacy of Ariel — a Transcendent-rank being who chose to seal herself rather than Ascend. Three factions raced to claim its treasures. Nephis's flame turned cold-white here, and Sunny's echo army grew to 25. The Tomb closed permanently after the group escaped.",
            characters: ["sunny", "nephis", "cassie", "effie", "kai", "morgans"],
            chapters: "Ch. 200–400",
            connections: ["nightmare-realm", "memory-clan-stronghold"]
        },
        {
            id: "saint-gate",
            name: "Saint Gate",
            type: "zone",
            x: 55, y: 62,
            color: "#C41E3A",
            icon: "⚔️",
            rank: "Saint",
            desc: "The threshold zone where Awakened attempt to break through to Saint rank — a grueling process requiring sustained combat against Transcendent-level nightmare creatures. Sunny confronted Morgan here, revealing a portion of his shadow army. It is also where Sunny ultimately achieved Saint rank.",
            characters: ["sunny", "morgans"],
            chapters: "Ch. 1050, 1110–1150",
            connections: ["nightmare-realm", "blood-faction-sanctum"]
        },
        {
            id: "memory-clan-stronghold",
            name: "Memory Clan Stronghold",
            type: "city",
            x: 22, y: 45,
            color: "#FFD700",
            icon: "🏛️",
            rank: "Clan Territory",
            desc: "The ancestral seat of the Memory Clan — one of the most powerful Great Clans. Nephis's heritage flows from these halls. The clan elders here attempted to control Nephis's next moves after her flame aspect's abnormal growth. The Moonless Seal's origins trace back to a compact made here centuries ago.",
            characters: ["nephis"],
            chapters: "Ch. 85, 500, 700",
            connections: ["tomb-of-ariel", "arrow-clan-territory"]
        },
        {
            id: "arrow-clan-territory",
            name: "Arrow Clan Territory",
            type: "city",
            x: 15, y: 70,
            color: "#4169E1",
            icon: "🏹",
            rank: "Clan Territory",
            desc: "The domain of the Arrow Clan, known for their precision and intelligence networks. Kai was trained here, and here the clan's true agenda regarding the Moonless Seal was formed. The territory is sparse and fortified — built for observation rather than luxury.",
            characters: ["kai"],
            chapters: "Ch. 110, 165, 350, 680",
            connections: ["memory-clan-stronghold", "blood-faction-sanctum"]
        },
        {
            id: "blood-faction-sanctum",
            name: "Blood Faction Sanctum",
            type: "dungeon",
            x: 80, y: 72,
            color: "#8B0000",
            icon: "🩸",
            rank: "Master+",
            desc: "A hidden, ritualistic stronghold of the Blood Faction — not a clan but an extremist ideology using nightmare-derived blood rituals to enhance power beyond normal limits. Morgan operates from deep within. The sanctum is stained with permanent blood-seals and reeks of iron.",
            characters: ["morgans"],
            chapters: "Ch. 120, 190, 280, 1050",
            connections: ["saint-gate", "arrow-clan-territory"]
        },
        {
            id: "nightmare-incursion-zone",
            name: "Nightmare Incursion Zone",
            type: "zone",
            x: 40, y: 80,
            color: "#F59E0B",
            icon: "⚠️",
            rank: "All Ranks (Emergency)",
            desc: "Zones where the Nightmare Realm has merged with the real world. Not a permanent dungeon — these are active disaster areas that shift and expand. After chapter 490, nightmare incursions became global, forcing Awakened society onto an emergency footing. Cities are at risk.",
            characters: ["sunny", "nephis", "effie"],
            chapters: "Ch. 490+",
            connections: ["nightmare-realm", "last-nightmare-threshold"]
        },
        {
            id: "sovereign-domain",
            name: "The Sovereign's Domain",
            type: "realm",
            x: 65, y: 15,
            color: "#6366F1",
            icon: "👁️",
            rank: "Unknown (Above Saint)",
            desc: "A mysterious, hidden zone controlled by the Sovereign — a figure who operates above the Great Clans, deliberately engineering nightmare zone fluctuations. The domain's location is unknown; its influence is felt everywhere. A shadow sigil found here matches a pre-clan symbol potentially connected to Sunny's origin.",
            characters: ["sunny"],
            chapters: "Ch. 780, 1000, 1248",
            connections: ["nightmare-realm", "last-nightmare-threshold"]
        },
        {
            id: "last-nightmare-threshold",
            name: "The Last Nightmare Threshold",
            type: "realm",
            x: 50, y: 92,
            color: "#DC143C",
            icon: "💀",
            rank: "Transcendent+",
            desc: "The theoretical point where the Nightmare Realm and the real world fully merge — the 'Last Nightmare.' The Sovereign is implied to be working toward triggering this event. If it occurs, all boundaries between worlds collapse. Sunny heads into the future knowing this arc is approaching.",
            characters: ["sunny", "nephis"],
            chapters: "Ch. 1220, 1250",
            connections: ["nightmare-incursion-zone", "sovereign-domain"]
        },

        // ── PHASE 2: Ch. 1250–1800 Locations ────────────────────────────────
        {
            id: "nightmare-desert",
            name: "Nightmare Desert",
            type: "zone",
            x: 35, y: 35,
            color: "#D4A574",
            icon: "🏜️",
            rank: "Saint+",
            desc: "A vast expanse of white sands east of the Forgotten Shore, stretching along the Hollow Mountains. At night, two cursed armies clash in an eternal battle across its dunes. It was here, on the shell of a giant black turtle drifting through this desert, that Sunny and Nephis reunited after their separation — spending a month training, sparring, and uncovering deep mythological truths about the Seven Suns and the Tomb of Ariel.",
            characters: ["sunny", "nephis"],
            chapters: "Ch. 1251–1260",
            connections: ["nightmare-realm", "tomb-of-ariel"]
        },
        {
            id: "fallen-grace",
            name: "Fallen Grace",
            type: "city",
            x: 28, y: 58,
            color: "#E8B4B4",
            icon: "🏚️",
            rank: "Great River City",
            desc: "A city-ship flotilla on the Great River — one of the last human strongholds in the Tomb of Ariel. Buildings of white stone and pale wood with crimson accents, connected by rope bridges over wide canals. Scarlet fabric sails stretch between its taller structures. Once grand, it is now a wilting flower — faded sails, desolate streets, and abandoned buildings. The cohort regrouped here: Sunny, Nephis, Cassie, Jet, and Effie. Ruled by three sybils, with Dusk as the last.",
            characters: ["sunny", "nephis", "cassie", "effie"],
            chapters: "Ch. 1286–1389",
            connections: ["wind-flower-island", "nightmare-desert"]
        },
        {
            id: "wind-flower-island",
            name: "Wind Flower Island",
            type: "dungeon",
            x: 12, y: 38,
            color: "#22D3EE",
            icon: "🌸",
            rank: "Time-Locked Zone",
            desc: "A mysterious island on the Great River where time loops endlessly. Sunny experienced over sixty repetitions of the same day, using each loop to sharpen his Shadow Step and gather intelligence. Cassie gradually became aware of the loops. The island was originally known as Aletheia's Island, created by a Seeker. A Saint named Wind Flower is trapped here in eternal slumber due to a seed of corruption. The cohort broke free from the time loop and departed in Ch. 1480.",
            characters: ["sunny", "nephis", "cassie"],
            chapters: "Ch. 1398–1480",
            connections: ["fallen-grace", "great-river"]
        },
        {
            id: "great-river",
            name: "The Great River",
            type: "realm",
            x: 38, y: 50,
            color: "#0EA5E9",
            icon: "🌊",
            rank: "Outside of Time",
            desc: "An infinite river that flows from the future into the past, existing outside of time itself. Found within the Black Pyramid, connected to the blood of an Unholy Titan. It carries the cohort aboard the Chain Breaker toward the Estuary, where a dreadful secret was hidden by Ariel. Its waters are treacherous — massive vortexes and temporal anomalies make navigation near-impossible. The Great River is central to understanding the Forgotten God and the true nature of the Seven Suns.",
            characters: ["sunny", "nephis", "cassie", "effie"],
            chapters: "Ch. 1480–1590",
            connections: ["wind-flower-island", "verge", "estuary"]
        },
        {
            id: "verge",
            name: "Verge",
            type: "city",
            x: 58, y: 48,
            color: "#94A3B8",
            icon: "🗼",
            rank: "Ancient Seeker City",
            desc: "An ancient city built by Seekers near the beginning of time, intended as a staging ground to reach the Estuary. Verge sits at the edge of comprehension — a place where the rules of reality begin to unravel. The architecture is alien and impossibly old, predating the Great Clans by millennia. From here, Sunny ventured into the heart of the Estuary to confront the truth about the Forgotten God.",
            characters: ["sunny", "nephis", "cassie"],
            chapters: "Ch. 1530–1570",
            connections: ["great-river", "estuary"]
        },
        {
            id: "estuary",
            name: "The Estuary",
            type: "dungeon",
            x: 75, y: 55,
            color: "#7C3AED",
            icon: "🕳️",
            rank: "Origin Point",
            desc: "The mouth of the Great River — where the secret of the gods was buried by Ariel. Here it is revealed that there were not six but SEVEN gods: Sun God, War God, Storm God, Beast God, Heart God, Shadow God, and the Forgotten God. The other six imprisoned the Seventh to contain the Void, making him their collective Flaw. The daemons were born from his fractured soul. This revelation shattered Sunny's understanding of the world's true cosmology.",
            characters: ["sunny", "cassie"],
            chapters: "Ch. 1570–1579",
            connections: ["verge", "great-river"]
        },
        {
            id: "bastion",
            name: "Bastion",
            type: "city",
            x: 88, y: 40,
            color: "#A3E635",
            icon: "☕",
            rank: "Human World",
            desc: "After transcending the Nightmare Spell around Ch. 1600, Sunny exists outside of it — forgotten by everyone, including Nephis, Cassie, and Effie. His citizenship is revoked, his records erased. The world adjusted to his absence as if he never existed. Despite this profound isolation, Sunny continues to operate from Bastion, where he opens a café. He brushes shoulders with former cohort members who no longer remember him. Effie's son, Little Ling, lives nearby — a child born as a Saint with Transcendent-level power.",
            characters: ["sunny", "effie"],
            chapters: "Ch. 1600–1800",
            connections: ["nightmare-incursion-zone"]
        }
    ]
};

if (typeof module !== "undefined") module.exports = RIFT_DATA;
