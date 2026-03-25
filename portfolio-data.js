// Portfolio data - Edit this file to update landing page content
const portfolioData = {
    hero: {
        eyebrow: "Game Programmer",
        title: "Hello!",
        description: "I'm a game programmer with an engineering background and a strong foundation in mathematics, physics, and linear algebra. I specialize in building gameplay systems that scale across teams and projects. Currently working at Moonhood developing multi-platform titles.",
        contact: [
            { type: "location", label: "Stockholm, Sweden" },
            { type: "email",    label: "joao.saraivafreire@gmail.com",          href: "mailto:your@email.com" },
            { type: "github",   label: "GitHub",                  href: "https://github.com/jsfoao" },
            { type: "linkedin", label: "LinkedIn",                href: "https://www.linkedin.com/in/joao-saraivafreire/" }
        ]
    },
    knowledgeAreas: [
        "C++",
        "Unreal Engine",
        "Angelscript",
        "C#",
        "Unity",
        "Lua",
        "OpenGL",
        "Git",
        "Perforce"
    ],
    projects: [
        {
            title: "The Midnight Walk",
            year: "2025",
            tool: "Unreal",
            roles: ["Programmer", "Lead VR"],
            company: "Moonhood AB",
            description: "Other description",
            cardDescription: "Developed gameplay systems for the award-winning hybrid VR/flatscreen 'The Midnight Walk'",
            links: [
                {
                    type: "steam",
                    href: "https://store.steampowered.com/app/2863640/The_Midnight_Walk/"
                },
                {
                    type: "site",
                    href: "https://www.moonhood.se"
                },
                {
                    type: "youtube",
                    href: "https://www.youtube.com/watch?v=DFFcnKNsmk4"
                }
            ],
            tags: ["C++", "Angelscript", "Gameplay", "Systems", "VR"],
            link: "project.html?slug=midnight-walk",
            cardImage: "content/projects/midnight-walk/assets/header.jpg",
            hoverMedia: "content/projects/midnight-walk/assets/download.gif",
            gallery: [
            ]
        },
        {
            title: "Pack Up and Leaf",
            year: "2022",
            tool: "Unity",
            role: "Gameplay Programmer",
            company: "Futuregames",
            description: "Pack Up & Leaf is a 3D Adventure Platformer game inspired by old classics like Spyro and Banjo Kazooie.",
            cardDescription: "Developed features that include movement, camera, and interactions.",
            links: [
                {
                    type: "github",
                    href: "https://github.com/jsfoao/pack-up-and-leaf"
                },
                {
                    type: "itchio",
                    href: "https://futuregames.itch.io/packup-and-leaf"
                },
                {
                    type: "youtube",
                    href: "https://www.youtube.com/watch?v=mP8MEGhTQcY"
                }
            ],
            tags: ["C#", "Gameplay"],
            link: "project.html?slug=pack-up-and-leaf",
            cardImage: "content/projects/pack-up-and-leaf/assets/PUAL_Marketing.png",
            hoverMedia: "content/projects/pack-up-and-leaf/assets/bonking.gif"
        },
        {
            title: "Rouse",
            year: "2022",
            tool: "Unreal",
            role: "Gameplay Programmer",
            company: "Futuregames",
            description: "Rouse is a 3rd-person physics-based puzzle platformer. You play as Rose who finds herself trapped inside the dream of her little brother. The game's main mechanic is a gun that can physically affect the world.",
            cardDescription: "Developed shooting mechanics with a custom trajectory solver. Worked with procedural animation for dynamic interactions.",
            links: [
                {
                    type: "github",
                    href: "https://github.com/jsfoao/rouse-personal-src"
                },
                {
                    type: "itchio",
                    href: "https://futuregames.itch.io/rouse"
                },
                {
                    type: "youtube",
                    href: "https://www.youtube.com/watch?v=_WCyCWfKtFo"
                }
            ],
            tags: ["C++", "Gameplay", "UI"],
            link: "project.html?slug=rouse",
            cardImage: "content/projects/rouse/assets/rouse-thumbnail.png",
            hoverMedia: "content/projects/rouse/assets/checkpoint.gif"
        }
    ],
    personalProjects: [
        // {
        //     title: "Gameplay Framework",
        //     year: "2026",
        //     tool: "Unity",
        //     role: "Programmer",
        //     description: "",
        //     cardDescription: "Modular gameplay framework for rapid prototyping and iteration of game mechanics.",
        //     tags: ["C++", "Unreal", "AI", "Gameplay"],
        //     link: "project.html?slug=rouse",
        //     cardImage: "assets/img/projects/rouse/rouse-thumbnail.png",
        //     hoverMedia: "assets/img/projects/rouse/checkpoint.gif"
        // },
        {
            title: "Nata Engine",
            year: "2023",
            tool: "Custom Engine",
            role: "Programmer",
            company: "Solo",
            description: "Simple data-driven game engine built from scratch in C++ and OpenGL",
            cardDescription: "Simple data-driven game engine built from scratch in C++ and OpenGL",
            links: [
                {
                    type: "github",
                    href: "https://github.com/username/nata-engine"
                }
            ],
            tags: ["C++", "OpenGL", "Engine", "Physics"],
            link: "project.html?slug=nata-engine",
            cardImage: "content/projects/nata-engine/assets/collision.png",
            hoverMedia: "content/projects/nata-engine/assets/shooterdemo.gif"
        },
        {
            title: "Löve2D Boss Fight",
            year: "2023",
            tool: "Löve2D",
            role: "Programmer",
            description: "Pack Up & Leaf is a 3D Adventure Platformer game inspired by old classics like Spyro and Banjo Kazooie",
            cardDescription: "Game jam featuring an ECS architecture and rigidbody physics implementation in Lua with Löve2D.",
            tags: ["Löve2D", "Lua", "ECS", "Rendering", "Physics"],
            link: "project.html?slug=love-2d-boss",
            cardImage: "content/projects/love-2d-boss/assets/screenshotgame.png",
            hoverMedia: "content/projects/love-2d-boss/assets/gameplay.gif"
        }
    ],
    experience: [
        {
            title: "Moonhood AB",
            year: "2023–Present",
            role: "Programmer · Lead VR Programmer",
            location: "Gothenburg, Sweden (Remote)",
            description: "Owned gameplay and VR feature development for production milestones and release quality. Led VR-specific systems and mentored junior programmers."
        },
        {
            title: "Moonhood AB",
            year: "2022–2023",
            role: "Programmer Internship",
            location: "Gothenburg, Sweden",
            description: "Contributed to gameplay and interaction systems during a structured internship, shipping features across multiple production sprints."
        }
    ],
    education: [
        {
            title: "Futuregames",
            year: "2020-2023",
            track: "Game Programmer · Game Engines",
            location: "Stockholm, Sweden",
            description: "Advanced game programming curriculum focused on engine architecture, gameplay systems, and production workflows.",
            tags: ["Game Programming", "Team Production", "Internship"]
        },
        {
            title: "IST - University of Lisbon",
            year: "2016-2019",
            track: "Electronics Engineering",
            location: "Lisbon, Portugal",
            description: "Strong foundation in mathematics, physics, and systems engineering, applied to practical technical problem solving.",
            tags: ["Math", "Physics", "Engineering"]
        }
    ]
};
