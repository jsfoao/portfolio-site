function createPill(label) {
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = label;
    return pill;
}

function renderHero() {
    const hero = portfolioData.hero;
    if (!hero) {
        return;
    }

    const eyebrow = document.getElementById("heroEyebrow");
    const title = document.getElementById("heroTitle");
    const description = document.getElementById("heroDescription");

    if (eyebrow) {
        eyebrow.textContent = hero.eyebrow || "";
    }
    if (title) {
        title.textContent = hero.title || "";
    }
    if (description) {
        description.textContent = hero.description || "";
    }

    const contactEl = document.getElementById("heroContact");
    if (contactEl && Array.isArray(hero.contact)) {
        contactEl.innerHTML = "";
        hero.contact.forEach(item => {
            const el = item.href ? document.createElement("a") : document.createElement("span");
            el.className = "hero-contact-item";
            if (item.href) {
                el.href = item.href;
                if (!item.href.startsWith("mailto:")) {
                    el.target = "_blank";
                    el.rel = "noopener noreferrer";
                }
            }
            el.appendChild(createMetaIcon(item.type));
            const label = document.createElement("span");
            label.textContent = item.label;
            el.appendChild(label);
            contactEl.appendChild(el);
        });
    }
}

function createMetaIcon(iconType) {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.8");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    if (iconType === "engine") {
        path.setAttribute("d", "M14.7 6.3l3 3-8.4 8.4-3-3L14.7 6.3zM6 15l3 3M13 4l2-2 7 7-2 2");
    } else if (iconType === "company") {
        path.setAttribute("d", "M3 10.5L12 3l9 7.5V21H3V10.5zM9 21v-6h6v6");
    } else if (iconType === "location") {
        path.setAttribute("d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z");
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", "12");
        circle.setAttribute("cy", "10");
        circle.setAttribute("r", "3");
        icon.appendChild(circle);
    } else if (iconType === "email") {
        path.setAttribute("d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z");
        const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        line.setAttribute("points", "22,6 12,13 2,6");
        icon.appendChild(line);
    } else if (iconType === "github") {
        path.setAttribute("d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22");
    } else if (iconType === "linkedin") {
        path.setAttribute("d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z");
        const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle2.setAttribute("cx", "4");
        circle2.setAttribute("cy", "4");
        circle2.setAttribute("r", "2");
        icon.appendChild(circle2);
    } else {
        path.setAttribute("d", "M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z");
    }
    icon.appendChild(path);

    return icon;
}

function createMetaItem(text, toneClass, iconType) {
    const item = document.createElement("span");
    item.className = "entry-meta-item " + toneClass;
    item.appendChild(createMetaIcon(iconType));

    const content = document.createElement("span");
    content.textContent = text;
    item.appendChild(content);

    return item;
}

function shouldEnableCardHoverMedia() {
    return window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 761px)").matches;
}

function createHoverMedia(project) {
    if (!shouldEnableCardHoverMedia()) {
        return null;
    }

    if (!project.hoverMedia) {
        return null;
    }

    const isVideo = /\.(mp4|webm|ogg)$/i.test(project.hoverMedia);
    if (isVideo) {
        const video = document.createElement("video");
        video.className = "entry-hover-media";
        video.src = project.hoverMedia;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "metadata";

        // Start and reset on hover so videos behave like hover previews.
        video.addEventListener("mouseenter", () => video.play().catch(() => {}));
        video.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0;
        });
        return video;
    }

    const image = document.createElement("img");
    image.className = "entry-hover-media";
    image.src = project.hoverMedia;
    image.alt = project.title + " hover preview";
    return image;
}

function renderKnowledgeAreas() {
    const container = document.getElementById("knowledge-pills");
    if (!container) {
        return;
    }

    portfolioData.knowledgeAreas.forEach((item) => {
        container.appendChild(createPill(item));
    });
}

function createProjectCard(project) {
    const card = document.createElement("a");
    card.className = "entry-card entry-card-project";
    card.href = project.link || "#";

    const content = document.createElement("div");
    content.className = "entry-content";

    const top = document.createElement("div");
    top.className = "entry-top";

    const title = document.createElement("h3");
    title.className = "entry-title";
    title.textContent = project.title;

    const year = document.createElement("span");
    year.className = "entry-year";
    year.textContent = project.year;

    top.appendChild(title);
    top.appendChild(year);

    const meta = document.createElement("div");
    meta.className = "entry-meta entry-meta-project";

    const roles = Array.isArray(project.roles)
        ? project.roles
        : project.role
            ? [project.role]
            : [];

    if (roles.length > 0) {
        const role = createMetaItem(roles.join(" · "), "entry-meta-primary", "role");
        meta.appendChild(role);
    }

    const tool = createMetaItem(project.tool, "entry-meta-secondary", "engine");
    meta.appendChild(tool);

    if (project.company) {
        const company = createMetaItem(project.company, "entry-meta-secondary", "company");
        meta.appendChild(company);
    }

    if (project.cardImage) {
        const image = document.createElement("img");
        image.className = "entry-image";
        image.src = project.cardImage;
        image.alt = project.title + " preview";
        card.appendChild(image);
    }

    const hoverMedia = createHoverMedia(project);
    if (hoverMedia) {
        card.classList.add("entry-card-hoverable");
        card.appendChild(hoverMedia);

        if (hoverMedia.tagName === "VIDEO") {
            card.addEventListener("mouseenter", () => hoverMedia.play().catch(() => {}));
            card.addEventListener("mouseleave", () => {
                hoverMedia.pause();
                hoverMedia.currentTime = 0;
            });
        }
    }

    const description = document.createElement("p");
    description.className = "entry-description";
    description.textContent = project.cardDescription;

    const tags = document.createElement("div");
    tags.className = "pill-row";
    project.tags.forEach((tag) => {
        tags.appendChild(createPill(tag));
    });

    content.appendChild(top);
    content.appendChild(meta);
    content.appendChild(description);
    content.appendChild(tags);
    card.appendChild(content);

    return card;
}

function renderProjects() {
    const grid = document.getElementById("project-grid");
    if (!grid) {
        return;
    }

    portfolioData.projects.forEach((project) => {
        grid.appendChild(createProjectCard(project));
    });
}

function renderPersonalProjects() {
    const grid = document.getElementById("personal-project-grid");
    if (!grid || !Array.isArray(portfolioData.personalProjects)) {
        return;
    }

    portfolioData.personalProjects.forEach((project) => {
        grid.appendChild(createProjectCard(project));
    });
}

function createEducationCard(item) {
    const card = document.createElement("article");
    card.className = "entry-card";

    const top = document.createElement("div");
    top.className = "entry-top";

    const title = document.createElement("h3");
    title.className = "entry-title";
    title.textContent = item.title;

    const year = document.createElement("span");
    year.className = "entry-year";
    year.textContent = item.year;

    top.appendChild(title);
    top.appendChild(year);

    const meta = document.createElement("div");
    meta.className = "entry-meta";

    const track = document.createElement("span");
    track.className = "entry-meta-primary";
    track.textContent = item.track;
    meta.appendChild(track);

    const location = createMetaItem(item.location, "entry-meta-secondary", "location");
    meta.appendChild(location);

    const description = document.createElement("p");
    description.className = "entry-description";
    description.textContent = item.description;

    card.appendChild(top);
    card.appendChild(meta);
    card.appendChild(description);

    return card;
}

function createExperienceCard(item) {
    const card = document.createElement("article");
    card.className = "entry-card";

    const top = document.createElement("div");
    top.className = "entry-top";

    const title = document.createElement("h3");
    title.className = "entry-title";
    title.textContent = item.title;

    const year = document.createElement("span");
    year.className = "entry-year";
    year.textContent = item.year;

    top.appendChild(title);
    top.appendChild(year);

    const meta = document.createElement("div");
    meta.className = "entry-meta";

    const role = document.createElement("span");
    role.className = "entry-meta-primary";
    role.textContent = item.role;
    meta.appendChild(role);

    const location = createMetaItem(item.location, "entry-meta-secondary", "location");
    meta.appendChild(location);

    const description = document.createElement("p");
    description.className = "entry-description";
    description.textContent = item.description;

    card.appendChild(top);
    card.appendChild(meta);
    card.appendChild(description);

    return card;
}

function renderEducation() {
    const grid = document.getElementById("education-grid");
    if (!grid) {
        return;
    }

    portfolioData.education.forEach((item) => {
        grid.appendChild(createEducationCard(item));
    });
}

function renderExperience() {
    const grid = document.getElementById("experience-grid");
    if (!grid) {
        return;
    }

    portfolioData.experience.forEach((item) => {
        grid.appendChild(createExperienceCard(item));
    });
}

function setupRevealAnimation() {
    const revealElements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("revealed"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => {
        observer.observe(element);
    });
}

function initializePage() {
    renderHero();
    renderKnowledgeAreas();
    renderProjects();
    renderPersonalProjects();
    renderExperience();
    renderEducation();
    setupRevealAnimation();
}

initializePage();
