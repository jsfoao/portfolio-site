// Portfolio data - Edit this file to update landing page content
const projectDataRegistry = window.projectDataRegistry || {};

const projects = [
    projectDataRegistry["unannounced"],
    projectDataRegistry["midnight-walk"],
    projectDataRegistry["pack-up-and-leaf"],
    projectDataRegistry["rouse"]
].filter(Boolean);

const personalProjects = [
    projectDataRegistry["gameplay-framework"],
    projectDataRegistry["nata-engine"],
    projectDataRegistry["love-2d-boss"]
].filter(Boolean);

const portfolioData = {
    hero: {
        eyebrow: "Game Programmer",
        title: "Hello!",
        description: "I'm a game programmer with an engineering background and a strong foundation in mathematics, physics, and linear algebra. I specialize in building gameplay systems that scale across teams and projects.\n\nWorking at Moonhood where we recently shipped 'The Midnight Walk' on multiple platforms. Currently working on an unannounced title.",
        contact: [
            { type: "location", label: "Stockholm, Sweden" },
            { type: "email",    label: "joao.saraivafreire@gmail.com",          href: "mailto:joao.saraivafreire@gmail.com" },
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
    projects,
    personalProjects,
    experience: [
        {
            title: "Moonhood AB",
            year: "2023–Present",
            role: "Programmer · Lead VR Programmer",
            location: "Gothenburg, Sweden (Remote)",
            bullets: [
                "Currently working on an unannounced title.",
                "Owned VR development for 'The Midnight Walk', contributing to a successful multi-platform release on PC, PS5, PSVR2 and Switch 2 that culminated in a win for 'Best VR/AR Game' at the The Game Awards 2025 among other accolades.",
                "Developed reusable and scalable gameplay systems that could be used on current and future projects.",
                "Ensured that features were shipped with high quality and met certification requirements across production milestones."
            ]
        },
        {
            title: "Moonhood AB",
            year: "2022–2023",
            role: "Programmer Internship",
            location: "Gothenburg, Sweden",
            bullets: [
                "Developed gameplay features and systems during a 3 month internship, contributing to multiple production milestones for 'The Midnight Walk'."
            ]
        }
    ],
    education: [
        {
            title: "Futuregames",
            year: "2021-2023",
            track: "Game Programmer",
            location: "Stockholm, Sweden",
            description: "Game programming education covering both Unreal and Unity. Developed multiple projects in teams of varying sizes. My internship was completed during the course, where I contributed to the development of 'The Midnight Walk'."
        },
        {
            title: "Futuregames",
            year: "2020-2021",
            track: "Game Engines",
            location: "Stockholm, Sweden",
            description: "Short introductory course on game programming and design in Unreal Engine."
        },
        {
            title: "Instituto Superior Técnico - University of Lisbon",
            year: "2016-2019",
            track: "Electronics Engineering",
            location: "Lisbon, Portugal",
            description: "Bachelor's degree in Electronics Engineering. Focused on programming, mathematics and physics."
        }
    ]
};
