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
        description: "I'm a game programmer with an engineering background and a strong foundation in mathematics, physics, and linear algebra. I specialize in building gameplay systems that scale across teams and projects. Working at Moonhood where we recently shipped 'The Midnight Walk' on multiple platforms. Currently working on a unannounced title.",
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
    projects,
    personalProjects,
    experience: [
        {
            title: "Moonhood AB",
            year: "2023–Present",
            role: "Programmer · Lead VR Programmer",
            location: "Gothenburg, Sweden (Remote)",
            description: "Contributing to the development of multi-platform titles, ensuring scalable gameplay systems and that features are shipped with high quality across production milestones."
        },
        {
            title: "Moonhood AB",
            year: "2022–2023",
            role: "Programmer Internship",
            location: "Gothenburg, Sweden",
            description: "Contributed to gameplay systems and shipped features across multiple production miletstones."
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
