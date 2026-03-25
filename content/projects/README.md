# Project Data Setup

Each project now has its own data file:

- `content/projects/<slug>/project-data.js`

These files register project objects in a shared global registry:

- `window.projectDataRegistry`

Then `portfolio-data.js` builds:

- `portfolioData.projects`
- `portfolioData.personalProjects`

from that registry.

## Edit an existing project

1. Open that project folder.
2. Edit `project-data.js`.
3. Update fields like title, links, tags, card image, hover media, and gallery.

## Add a new project

### 1) Create folder and data file

Create:

- `content/projects/<new-slug>/project-data.js`

Use this template:

```js
window.projectDataRegistry = window.projectDataRegistry || {};

window.projectDataRegistry["<new-slug>"] = {
    title: "Project Title",
    year: "2026",
    tool: "Unreal",
    role: "Gameplay Programmer",
    company: "Studio Name",
    description: "Longer project description.",
    cardDescription: "Short card description.",
    links: [
        { type: "github", href: "https://github.com/your/repo" }
    ],
    tags: ["C++", "Gameplay"],
    link: "project.html?slug=<new-slug>",
    cardImage: "content/projects/<new-slug>/assets/cover.png",
    hoverMedia: "content/projects/<new-slug>/assets/preview.gif",
    gallery: [
        // Example image slide:
        // { type: "image", src: "content/projects/<new-slug>/assets/shot1.png", alt: "Gameplay screenshot" },

        // Example video slide:
        // { type: "video", src: "content/projects/<new-slug>/assets/trailer.mp4", poster: "content/projects/<new-slug>/assets/poster.png", thumb: "content/projects/<new-slug>/assets/thumb.png" }
    ]
};
```

### 2) Load the file in pages

Add a script tag in both:

- `index.html`
- `project.html`

Example:

```html
<script src="content/projects/<new-slug>/project-data.js" defer></script>
```

Place it before `portfolio-data.js`.

### 3) Register project order/category

In `portfolio-data.js`, add your slug to one array:

- `projects` (main section)
- `personalProjects` (personal section)

The position in the array controls card order.

## Notes

- Slug in `link: "project.html?slug=..."` should match the registry key.
- The project page markdown file remains:
  - `content/projects/<slug>/<slug>.md`
- Gallery is manual only. Card image and hover media are not auto-added to slideshow.
