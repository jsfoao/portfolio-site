function getSlug() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");
    return slug && /^[a-z0-9-]+$/.test(slug) ? slug : "nata-engine";
}

function findProjectBySlug(slug) {
    if (typeof portfolioData === "undefined") return null;
    const allProjects = [
        ...(Array.isArray(portfolioData.projects) ? portfolioData.projects : []),
        ...(Array.isArray(portfolioData.personalProjects) ? portfolioData.personalProjects : []),
    ];
    return allProjects.find(p => {
        const match = p.link && p.link.match(/slug=([a-z0-9-]+)/);
        return match && match[1] === slug;
    }) || null;
}

function createPlayIcon() {
    const icon = document.createElement("span");
    icon.className = "project-gallery-play";
    icon.setAttribute("aria-hidden", "true");

    const triangle = document.createElement("span");
    triangle.className = "project-gallery-play-shape";
    icon.appendChild(triangle);

    return icon;
}

function createExternalLinkIcon() {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.8");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");

    const pathOne = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathOne.setAttribute("d", "M14 3h7v7");
    icon.appendChild(pathOne);

    const pathTwo = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathTwo.setAttribute("d", "M10 14L21 3");
    icon.appendChild(pathTwo);

    const pathThree = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathThree.setAttribute("d", "M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5");
    icon.appendChild(pathThree);

    return icon;
}

function createGithubIcon() {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.6");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22");
    icon.appendChild(path);

    return icon;
}

function createYouTubeIcon() {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.8");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", "2");
    rect.setAttribute("y", "6");
    rect.setAttribute("width", "20");
    rect.setAttribute("height", "12");
    rect.setAttribute("rx", "4");
    rect.setAttribute("ry", "4");
    icon.appendChild(rect);

    const play = document.createElementNS("http://www.w3.org/2000/svg", "path");
    play.setAttribute("d", "M10 9.5l5 2.5-5 2.5v-5z");
    icon.appendChild(play);

    return icon;
}

function createSiteIcon() {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.8");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "12");
    circle.setAttribute("r", "9");
    icon.appendChild(circle);

    const longitude = document.createElementNS("http://www.w3.org/2000/svg", "path");
    longitude.setAttribute("d", "M3 12h18");
    icon.appendChild(longitude);

    const latitude = document.createElementNS("http://www.w3.org/2000/svg", "path");
    latitude.setAttribute("d", "M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18");
    icon.appendChild(latitude);

    return icon;
}

function createSteamIcon() {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.7");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");

    const outer = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    outer.setAttribute("cx", "12");
    outer.setAttribute("cy", "12");
    outer.setAttribute("r", "9");
    icon.appendChild(outer);

    const head = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    head.setAttribute("cx", "16.9");
    head.setAttribute("cy", "7.9");
    head.setAttribute("r", "2.2");
    icon.appendChild(head);

    const arm = document.createElementNS("http://www.w3.org/2000/svg", "path");
    arm.setAttribute("d", "M8.2 14.8l4.9-2.9");
    icon.appendChild(arm);

    const hub = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    hub.setAttribute("cx", "7.5");
    hub.setAttribute("cy", "15.3");
    hub.setAttribute("r", "2.6");
    icon.appendChild(hub);

    return icon;
}

function createItchIoIcon() {
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("fill", "none");
    icon.setAttribute("stroke", "currentColor");
    icon.setAttribute("stroke-width", "1.7");
    icon.setAttribute("stroke-linecap", "round");
    icon.setAttribute("stroke-linejoin", "round");
    icon.setAttribute("aria-hidden", "true");

    const shell = document.createElementNS("http://www.w3.org/2000/svg", "path");
    shell.setAttribute("d", "M4 10.5c0-2.4 1.9-4.3 4.3-4.3.9 0 1.7.3 2.4.8.8-.7 1.8-1.1 2.9-1.1s2.1.4 2.9 1.1c.7-.5 1.5-.8 2.4-.8 2.4 0 4.3 1.9 4.3 4.3V16c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3v-5.5z");
    icon.appendChild(shell);

    const leftEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    leftEye.setAttribute("cx", "9.2");
    leftEye.setAttribute("cy", "12.2");
    leftEye.setAttribute("r", "0.7");
    icon.appendChild(leftEye);

    const rightEye = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    rightEye.setAttribute("cx", "14.8");
    rightEye.setAttribute("cy", "12.2");
    rightEye.setAttribute("r", "0.7");
    icon.appendChild(rightEye);

    const smile = document.createElementNS("http://www.w3.org/2000/svg", "path");
    smile.setAttribute("d", "M9.2 15.1c.8.8 1.7 1.2 2.8 1.2s2-.4 2.8-1.2");
    icon.appendChild(smile);

    return icon;
}

function createProjectLinkIcon(type) {
    if (type === "github") {
        return createGithubIcon();
    }
    if (type === "youtube") {
        return createYouTubeIcon();
    }
    if (type === "site") {
        return createSiteIcon();
    }
    if (type === "steam") {
        return createSteamIcon();
    }
    if (type === "itch" || type === "itchio" || type === "itch-io") {
        return createItchIoIcon();
    }
    return createExternalLinkIcon();
}

function renderProjectLinks(links) {
    if (!Array.isArray(links) || links.length === 0) {
        return null;
    }

    const section = document.createElement("section");
    section.className = "project-hero-links-section";

    const row = document.createElement("div");
    row.className = "project-hero-links";

    links.forEach((link) => {
        if (!link || !link.href) {
            return;
        }

        const anchor = document.createElement("a");
        anchor.className = "icon-link project-hero-link";
        anchor.href = link.href;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.setAttribute("aria-label", link.label || link.type || "Project link");
        anchor.appendChild(createProjectLinkIcon(link.type));
        row.appendChild(anchor);
    });

    if (!row.childNodes.length) {
        return null;
    }

    section.appendChild(row);
    return section;
}

function getProjectGallery(project) {
    if (!Array.isArray(project.gallery)) {
        return [];
    }

    return project.gallery.filter((slide) => {
        return slide
            && (slide.type === "image" || slide.type === "video")
            && typeof slide.src === "string"
            && slide.src.trim().length > 0;
    });
}

function getYouTubeVideoId(url) {
    if (typeof url !== "string" || !url.trim()) {
        return "";
    }

    try {
        const parsed = new URL(url, window.location.href);
        const host = parsed.hostname.toLowerCase();

        if (host === "youtu.be") {
            const id = parsed.pathname.replace(/^\/+/, "").split("/")[0];
            return id || "";
        }

        if (host === "youtube.com" || host === "www.youtube.com" || host === "m.youtube.com") {
            if (parsed.pathname === "/watch") {
                return parsed.searchParams.get("v") || "";
            }

            if (parsed.pathname.startsWith("/embed/")) {
                return parsed.pathname.split("/embed/")[1].split("/")[0] || "";
            }

            if (parsed.pathname.startsWith("/shorts/")) {
                return parsed.pathname.split("/shorts/")[1].split("/")[0] || "";
            }
        }
    } catch (error) {
        return "";
    }

    return "";
}

function getYouTubeEmbedUrl(url, options = {}) {
    const autoplay = options.autoplay === true;
    const muted = options.muted === true;
    const id = getYouTubeVideoId(url);
    if (!id) {
        return "";
    }

    return "https://www.youtube.com/embed/" + id
        + "?rel=0&modestbranding=1&playsinline=1"
        + (autoplay ? "&autoplay=1" : "")
        + (muted ? "&mute=1" : "");
}


function pauseGalleryVideos(scope) {
    scope.querySelectorAll("video").forEach((video) => {
        video.pause();
        if (!video.hasAttribute("data-keep-time")) {
            video.currentTime = 0;
        }
    });

    scope.querySelectorAll("iframe[data-embed-src]").forEach((frame) => {
        const src = frame.getAttribute("data-embed-src");
        if (src) {
            frame.setAttribute("src", src);
        }
    });
}

function initializeProjectGallery(root) {
    if (!root || typeof Swiper === "undefined") {
        return;
    }

    const mainEl = root.querySelector(".project-gallery-main");
    const thumbButtons = Array.from(root.querySelectorAll(".project-gallery-thumb"));
    const slideCount = mainEl ? mainEl.querySelectorAll(".swiper-slide").length : 0;

    if (!mainEl || slideCount <= 1) {
        root.classList.toggle("project-gallery-single", slideCount <= 1);
        return;
    }

    const mainSwiper = new Swiper(mainEl, {
        spaceBetween: 12,
        navigation: {
            nextEl: root.querySelector(".project-gallery-next"),
            prevEl: root.querySelector(".project-gallery-prev")
        },
        on: {
            init(swiper) {
                thumbButtons.forEach((button, index) => {
                    button.classList.toggle("is-active", index === swiper.activeIndex);
                });
            },
            slideChangeTransitionStart() {
                pauseGalleryVideos(root);
            },
            slideChange(swiper) {
                thumbButtons.forEach((button, index) => {
                    button.classList.toggle("is-active", index === swiper.activeIndex);
                });
            }
        }
    });

    thumbButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            mainSwiper.slideTo(index);
        });
    });

    root.projectGallery = { mainSwiper };
}

function applyGifFirstFrameThumbnail(thumbImage, gifSource) {
    if (!thumbImage || !gifSource) {
        return;
    }

    const gif = new Image();
    gif.addEventListener("load", () => {
        const width = gif.naturalWidth || gif.width;
        const height = gif.naturalHeight || gif.height;
        if (!width || !height) {
            return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }

        context.drawImage(gif, 0, 0, width, height);

        try {
            thumbImage.src = canvas.toDataURL("image/png");
        } catch (error) {
            // Ignore conversion errors and keep existing thumbnail source.
        }
    }, { once: true });

    gif.src = gifSource;
}

function renderProjectGallery(project) {
    const slides = getProjectGallery(project);
    if (slides.length === 0) {
        return null;
    }

    const gallery = document.createElement("section");
    gallery.className = "project-gallery";

    const main = document.createElement("div");
    main.className = "swiper project-gallery-main";

    const mainWrapper = document.createElement("div");
    mainWrapper.className = "swiper-wrapper";

    const thumbs = document.createElement("div");
    thumbs.className = "project-gallery-thumbs";

    const thumbsWrapper = document.createElement("div");
    thumbsWrapper.className = "project-gallery-thumbs-list";

    slides.forEach((slide, index) => {
        const mainSlide = document.createElement("div");
        mainSlide.className = "swiper-slide project-gallery-slide";
        const shouldAutoplayOnLoad = index === 0;

        if (slide.type === "video") {
            const youTubeEmbed = getYouTubeEmbedUrl(slide.src, {
                autoplay: shouldAutoplayOnLoad,
                muted: shouldAutoplayOnLoad
            });
            if (youTubeEmbed) {
                const frame = document.createElement("iframe");
                frame.className = "project-gallery-media";
                frame.src = youTubeEmbed;
                frame.title = slide.alt || (project.title + " video " + (index + 1));
                frame.setAttribute("frameborder", "0");
                frame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
                frame.setAttribute("allowfullscreen", "");
                frame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
                frame.setAttribute("loading", shouldAutoplayOnLoad ? "eager" : "lazy");
                frame.setAttribute("data-embed-src", getYouTubeEmbedUrl(slide.src, { autoplay: false, muted: false }));
                mainSlide.appendChild(frame);
            } else {
                const video = document.createElement("video");
                video.className = "project-gallery-media";
                video.src = slide.src;
                video.controls = true;
                video.preload = "metadata";
                video.playsInline = true;
                video.autoplay = shouldAutoplayOnLoad;
                video.muted = shouldAutoplayOnLoad;
                if (shouldAutoplayOnLoad) {
                    video.setAttribute("muted", "");
                }
                if (slide.poster) {
                    video.poster = slide.poster;
                }
                mainSlide.appendChild(video);
            }
        } else {
            const image = document.createElement("img");
            image.className = "project-gallery-media";
            image.src = slide.src;
            image.alt = slide.alt || (project.title + " slide " + (index + 1));
            mainSlide.appendChild(image);
        }

        mainWrapper.appendChild(mainSlide);

        const thumbSlide = document.createElement("button");
        thumbSlide.className = "project-gallery-thumb";
        thumbSlide.type = "button";
        thumbSlide.setAttribute("aria-label", "Open slide " + (index + 1));

        const isGifImage = slide.type === "image" && /\.gif($|\?)/i.test(slide.src || "");
        const transparentPixel = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        const youTubeId = slide.type === "video" ? getYouTubeVideoId(slide.src) : "";
        const youTubeThumb = youTubeId ? ("https://img.youtube.com/vi/" + youTubeId + "/hqdefault.jpg") : "";
        const thumbnailSource = slide.thumb
            || slide.poster
            || youTubeThumb
            || (isGifImage
                ? (project.cardImage || transparentPixel)
                : (slide.type === "image" ? slide.src : ""));

        if (thumbnailSource) {
            const thumbImage = document.createElement("img");
            thumbImage.className = "project-gallery-thumb-image";
            thumbImage.src = thumbnailSource;
            thumbImage.alt = "";
            thumbImage.setAttribute("aria-hidden", "true");
            thumbSlide.appendChild(thumbImage);

            if (isGifImage && !slide.thumb && !slide.poster) {
                applyGifFirstFrameThumbnail(thumbImage, slide.src);
            }
        } else {
            const thumbFallback = document.createElement("div");
            thumbFallback.className = "project-gallery-thumb-fallback";
            thumbFallback.textContent = slide.type === "video" ? "Video" : "Image";
            thumbSlide.appendChild(thumbFallback);
        }

        if (slide.type === "video") {
            thumbSlide.classList.add("project-gallery-thumb-video");
            thumbSlide.appendChild(createPlayIcon());
        }

        thumbsWrapper.appendChild(thumbSlide);
    });

    main.appendChild(mainWrapper);

    if (slides.length > 1) {
        const prev = document.createElement("button");
        prev.className = "project-gallery-nav project-gallery-prev";
        prev.type = "button";
        prev.setAttribute("aria-label", "Previous slide");
        prev.innerHTML = "<span aria-hidden=\"true\">&#8249;</span>";

        const next = document.createElement("button");
        next.className = "project-gallery-nav project-gallery-next";
        next.type = "button";
        next.setAttribute("aria-label", "Next slide");
        next.innerHTML = "<span aria-hidden=\"true\">&#8250;</span>";

        main.appendChild(prev);
        main.appendChild(next);
    }

    thumbs.appendChild(thumbsWrapper);
    gallery.appendChild(main);
    gallery.appendChild(thumbs);

    queueMicrotask(() => initializeProjectGallery(gallery));

    return gallery;
}

function renderProjectHero(project) {
    const hero = document.getElementById("projectHero");
    if (!hero) return;

    hero.innerHTML = "";

    const mediaCard = document.createElement("section");
    mediaCard.className = "project-hero-card project-hero-media-card";

    const infoCard = document.createElement("section");
    infoCard.className = "project-hero-card project-hero-info-card";

    const gallery = renderProjectGallery(project);
    if (gallery) {
        mediaCard.appendChild(gallery);
    }

    const info = document.createElement("div");
    info.className = "project-hero-info";

    const topRow = document.createElement("div");
    topRow.className = "project-hero-top";

    const titleEl = document.createElement("h1");
    titleEl.className = "project-hero-title";
    titleEl.textContent = project.title;

    const yearEl = document.createElement("span");
    yearEl.className = "project-hero-year";
    yearEl.textContent = project.year;

    topRow.appendChild(titleEl);
    topRow.appendChild(yearEl);
    info.appendChild(topRow);

    const meta = document.createElement("div");
    meta.className = "entry-meta project-hero-meta";

    const roles = Array.isArray(project.roles) ? project.roles : project.role ? [project.role] : [];
    if (roles.length > 0) {
        meta.appendChild(createMetaItem(roles.join(" · "), "entry-meta-primary", "role"));
    }
    if (project.tool) {
        meta.appendChild(createMetaItem(project.tool, "entry-meta-secondary", "engine"));
    }
    if (project.company) {
        meta.appendChild(createMetaItem(project.company, "entry-meta-secondary", "company"));
    }
    info.appendChild(meta);

    if (project.description) {
        const description = document.createElement("p");
        description.className = "project-hero-description";
        description.textContent = project.description;
        info.appendChild(description);
    }

    const linksSection = renderProjectLinks(project.links);
    if (linksSection) {
        info.appendChild(linksSection);
    }

    if (project.tags && project.tags.length > 0) {
        const tags = document.createElement("div");
        tags.className = "pill-row project-hero-tags";
        project.tags.forEach(tag => tags.appendChild(createPill(tag)));
        info.appendChild(tags);
    }

    infoCard.appendChild(info);

    if (gallery) {
        hero.appendChild(mediaCard);
    }
    hero.appendChild(infoCard);
}

function setPageTitleFromDoc(docElement, fallback) {
    const h1 = docElement.querySelector("h1");
    document.title = (h1 ? h1.textContent : fallback) + " | Joao Freire";
}

async function fetchMarkdown(slug) {
    const path = "content/projects/" + slug + "/" + slug + ".md";

    // fetch() often fails on file:// pages even when files exist locally.
    if (window.location.protocol === "file:") {
        const fromXhr = await new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", path, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== 4) {
                    return;
                }

                if ((xhr.status === 200 || xhr.status === 0) && xhr.responseText) {
                    resolve(xhr.responseText);
                    return;
                }

                resolve(null);
            };
            xhr.onerror = () => resolve(null);
            xhr.send();
        });

        if (fromXhr) {
            return fromXhr;
        }

        // Some browsers block file:// XHR but still allow iframe loading.
        return new Promise((resolve, reject) => {
            const frame = document.createElement("iframe");
            frame.style.display = "none";
            frame.src = path;

            const cleanup = () => {
                if (frame.parentNode) {
                    frame.parentNode.removeChild(frame);
                }
            };

            frame.onload = () => {
                try {
                    const doc = frame.contentDocument || frame.contentWindow.document;
                    const text = (doc && doc.body ? doc.body.textContent : "") || "";
                    cleanup();
                    if (text.trim()) {
                        resolve(text);
                        return;
                    }
                } catch (error) {
                    cleanup();
                    reject(new Error("Local file access is blocked by the browser for markdown loading."));
                    return;
                }

                reject(new Error("Project markdown file not found."));
            };

            frame.onerror = () => {
                cleanup();
                reject(new Error("Project markdown file not found."));
            };

            document.body.appendChild(frame);
        });
    }

    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) {
        throw new Error("Project markdown file not found.");
    }
    return response.text();
}

const MARKED_OPTIONS = {
    gfm: true,
    breaks: false,
    mangle: false,
    headerIds: true
};

function parseDetailsMarkdown(markdown) {
    return markdown.replace(/<details\b([^>]*)>([\s\S]*?)<\/details>/gi, (match, detailsAttrs, inner) => {
        const summaryMatch = inner.match(/<summary\b[^>]*>[\s\S]*?<\/summary>/i);
        if (!summaryMatch) {
            return match;
        }

        const summaryHtml = summaryMatch[0];
        const summaryStart = summaryMatch.index || 0;
        const summaryEnd = summaryStart + summaryHtml.length;
        const bodyMarkdown = (inner.slice(0, summaryStart) + inner.slice(summaryEnd)).trim();

        if (!bodyMarkdown) {
            return `<details${detailsAttrs}>${summaryHtml}</details>`;
        }

        const bodyHtml = marked.parse(bodyMarkdown, MARKED_OPTIONS).trim();
        return `<details${detailsAttrs}>${summaryHtml}<div class="details-content">${bodyHtml}</div></details>`;
    });
}

function renderMarkdown(markdown) {
    const root = document.getElementById("projectDoc");

    const html = marked.parse(parseDetailsMarkdown(markdown), MARKED_OPTIONS);
    
    // Configure DOMPurify to allow syntax highlighting classes
    const config = {
        ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'em', 'strong', 'u', 'br', 'a', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'span', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'hr', 'del', 'details', 'summary', 'div'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel', 'open'],
        ALLOW_DATA_ATTR: false
    };
    
    root.innerHTML = DOMPurify.sanitize(html, config);

    root.querySelectorAll("a[href]").forEach((anchor) => {
        try {
            const url = new URL(anchor.getAttribute("href"), window.location.href);
            if (url.origin !== window.location.origin) {
                anchor.setAttribute("target", "_blank");
                anchor.setAttribute("rel", "noopener noreferrer");
            }
        } catch (error) {
            // Ignore malformed links and leave them unchanged.
        }
    });
    
    // Highlight code blocks after rendering
    if (window.hljs) {
        root.querySelectorAll('pre code').forEach(block => {
            window.hljs.highlightElement(block);
        });
    }

    setupImageRowHeightSync(root);
    
    return root;
}

let imageRowResizeTimeoutId = 0;

function syncImageRowHeights(root) {
    if (!root) {
        return;
    }

    const singleColumn = window.matchMedia("(max-width: 640px)").matches;
    const rows = root.querySelectorAll(".img-row");

    rows.forEach((row) => {
        row.style.removeProperty("--img-row-height");

        const images = Array.from(row.querySelectorAll("img.img-col"));
        if (!images.length || singleColumn) {
            return;
        }

        const applyRowHeight = () => {
            let maxHeight = 0;
            images.forEach((img) => {
                maxHeight = Math.max(maxHeight, img.getBoundingClientRect().height);
            });

            if (maxHeight > 0) {
                row.style.setProperty("--img-row-height", Math.ceil(maxHeight) + "px");
            }
        };

        let pending = 0;
        const onImageSettled = () => {
            pending -= 1;
            if (pending <= 0) {
                applyRowHeight();
            }
        };

        images.forEach((img) => {
            if (!img.complete) {
                pending += 1;
                img.addEventListener("load", onImageSettled, { once: true });
                img.addEventListener("error", onImageSettled, { once: true });
            }
        });

        if (pending === 0) {
            applyRowHeight();
        }
    });
}

function setupImageRowHeightSync(root) {
    syncImageRowHeights(root);

    if (window.__projectImageRowSyncBound) {
        return;
    }

    window.__projectImageRowSyncBound = true;
    window.addEventListener("resize", () => {
        clearTimeout(imageRowResizeTimeoutId);
        imageRowResizeTimeoutId = window.setTimeout(() => {
            syncImageRowHeights(document.getElementById("projectDoc"));
        }, 120);
    });
}

function renderError(message) {
    const root = document.getElementById("projectDoc");
    root.innerHTML = "<div class=\"project-empty\">" + message + "</div>";
}

async function initProjectPage() {
    const slug = getSlug();
    document.getElementById("projectSlug").textContent = slug;

    const project = findProjectBySlug(slug);
    if (project) {
        renderProjectHero(project);
        document.title = project.title + " | João Freire";
    }

    try {
        const markdown = await fetchMarkdown(slug);
        const root = renderMarkdown(markdown);
        if (!project) {
            setPageTitleFromDoc(root, slug);
        }
    } catch (error) {
        if (!project) {
            document.title = "Project not found | João Freire";
        }
        const details = error && error.message ? " Reason: " + error.message : "";
        renderError("Could not load project content for '" + slug + "'. Add content/projects/" + slug + "/" + slug + ".md to create it." + details);
    }
}

initProjectPage();
