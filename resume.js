function getIconSvg(type) {
    if (type === "email") {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 6L12 13 2 6"></path></svg>';
    }
    if (type === "linkedin") {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>';
    }
    if (type === "github") {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-7a5.7 5.7 0 0 0-1.7-3.8 5.2 5.2 0 0 0-.1-3.8s-1.4-.3-4.5 1.7a15.3 15.3 0 0 0-8.1 0C2.4.5 1 .8 1 .8a5.2 5.2 0 0 0-.1 3.8A5.7 5.7 0 0 0 1 11c0 5.6 2.7 6.7 5.5 7-.6.6-.6 1.2-.5 2V21"></path></svg>';
    }
    if (type === "location") {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
    }
    if (type === "site") {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>';
    }
    if (type === "person") {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path></svg>';
    }
    if (type === "tool") {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3l3 3-8.4 8.4-3-3L14.7 6.3zM6 15l3 3M13 4l2-2 7 7-2 2"></path></svg>';
    }
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5V21H3V10.5zM9 21v-6h6v6"></path></svg>';
}

function renderContact(items) {
    const container = document.getElementById("resumeContact");
    if (!container) return;

    container.innerHTML = items
        .map((item) => {
            const content = `${getIconSvg(item.type)}<span>${item.label}</span>`;
            if (item.href) {
                const external = item.href.startsWith("http");
                const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
                return `<a href="${item.href}"${attrs} class="contact-item">${content}</a>`;
            }
            return `<div class="contact-item">${content}</div>`;
        })
        .join("");
}

function renderEntries(containerId, entries) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = entries
        .map((entry) => {
            const meta = entry.meta
                .map(
                    (item) =>
                        `<span class="entry-meta-item entry-meta-${item.tone}">${getIconSvg(item.icon)}<span>${item.text}</span></span>`
                )
                .join("");

            const bullets = entry.bullets.map((bullet) => `<li>${bullet}</li>`).join("");

            return `
                <article class="entry-card resume-exp-card">
                    <div class="entry-top">
                        <h3 class="entry-title">${entry.title}</h3>
                        <span class="entry-year">${entry.year}</span>
                    </div>
                    <div class="entry-meta entry-meta-project">${meta}</div>
                    <ul>${bullets}</ul>
                </article>
            `;
        })
        .join("");
}

function renderEducation(items) {
    const container = document.getElementById("educationList");
    if (!container) return;

    container.innerHTML = items
        .map(
            (item) => `
                <article class="entry-card resume-edu-card">
                    <div class="entry-top">
                        <h3 class="entry-title">${item.title}</h3>
                        <span class="entry-year">${item.year}</span>
                    </div>
                    <div class="entry-meta">
                        <span class="entry-meta-primary">${item.primary}</span>
                        <span class="entry-meta-secondary resume-edu-location">${getIconSvg("location")}<span>${item.secondary}</span></span>
                    </div>
                </article>
            `
        )
        .join("");
}

function renderSkills(skills) {
    const container = document.getElementById("skillsList");
    if (!container) return;
    container.innerHTML = skills.map((skill) => `<span class="pill">${skill}</span>`).join("");
}

function renderLanguages(languages) {
    const container = document.getElementById("languagesList");
    if (!container) return;

    container.innerHTML = languages
        .map((lang) => {
            const circles = Array.from({ length: 5 }, (_, index) => {
                const filledClass = index < lang.level ? " filled" : "";
                return `<span class="rating-circle${filledClass}" aria-hidden="true"></span>`;
            }).join("");

            return `
                <div class="language-item">
                    <span class="language-name">${lang.name}</span>
                    <div class="language-rating" aria-label="${lang.name} proficiency level ${lang.level} out of 5">
                        ${circles}
                    </div>
                    <span class="language-level-compact" aria-hidden="true">${lang.level}/5</span>
                </div>
            `;
        })
        .join("");
}

function renderResume(data) {
    const nameEl = document.getElementById("resumeName");
    const roleEl = document.getElementById("resumeRole");
    const summaryEl = document.getElementById("resumeSummary");

    if (nameEl) nameEl.textContent = data.name;
    if (roleEl) roleEl.textContent = data.role;
    if (summaryEl) summaryEl.textContent = data.summary;

    renderContact(data.contact);
    renderEntries("experienceList", data.experience);
    renderEntries("projectsList", data.projects);
    renderEducation(data.education);
    renderSkills(data.skills);
    renderLanguages(data.languages);
}

function waitForNextFrame() {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(resolve);
        });
    });
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
    const r = Math.max(0, Math.min(radius, Math.min(width, height) / 2));
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function drawPdfOverlays(canvas, sheetRect, cardRects, sectionRects) {
    const ctx = canvas.getContext("2d");
    if (!ctx || sheetRect.width === 0 || sheetRect.height === 0) {
        return;
    }

    const scaleX = canvas.width / sheetRect.width;
    const scaleY = canvas.height / sheetRect.height;

    // Outer sheet border.
    ctx.save();
    ctx.strokeStyle = "#aeb8c6";
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
    ctx.restore();

    // Card outlines.
    ctx.save();
    ctx.strokeStyle = "#aeb8c6";
    ctx.lineWidth = 2;
    cardRects.forEach((rect) => {
        const x = (rect.left - sheetRect.left) * scaleX;
        const y = (rect.top - sheetRect.top) * scaleY;
        const w = rect.width * scaleX;
        const h = rect.height * scaleY;
        drawRoundedRect(ctx, x, y, w, h, 14 * scaleX);
        ctx.stroke();
    });
    ctx.restore();

    // Section dividers.
    ctx.save();
    ctx.strokeStyle = "#c1c9d6";
    ctx.lineWidth = 2;
    sectionRects.forEach((rect) => {
        const y = (rect.top - sheetRect.top) * scaleY;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    });
    ctx.restore();
}

async function downloadResumePdf(button) {
    const resumeSheet = document.querySelector(".resume-sheet");
    if (!resumeSheet) {
        return;
    }

    const html2canvas = window.html2canvas;
    const jsPDF = window.jspdf?.jsPDF;

    if (typeof html2canvas !== "function" || typeof jsPDF !== "function") {
        window.print();
        return;
    }

    const originalLabel = button ? button.textContent : "";

    try {
        if (button) {
            button.disabled = true;
            button.textContent = "Preparing PDF...";
        }

        await waitForNextFrame();

        const sheetRect = resumeSheet.getBoundingClientRect();
        const cardRects = Array.from(resumeSheet.querySelectorAll(".entry-card")).map((el) => el.getBoundingClientRect());
        const sectionRects = Array.from(resumeSheet.querySelectorAll(".resume-section")).map((el) => el.getBoundingClientRect());

        const canvas = await html2canvas(resumeSheet, {
            scale: 2.5,
            useCORS: true,
            backgroundColor: null,
        });

        drawPdfOverlays(canvas, sheetRect, cardRects, sectionRects);

        const pageWidth = canvas.width;
        const pageHeight = canvas.height;
        const imageData = canvas.toDataURL("image/png", 1);
        const pdf = new jsPDF({
            orientation: pageWidth > pageHeight ? "landscape" : "portrait",
            unit: "px",
            format: [pageWidth, pageHeight],
            compress: true,
        });

        pdf.addImage(imageData, "PNG", 0, 0, pageWidth, pageHeight, undefined, "FAST");

        const scaleX = canvas.width / sheetRect.width;
        const scaleY = canvas.height / sheetRect.height;
        resumeSheet.querySelectorAll("a.contact-item[href]").forEach((anchor) => {
            const r = anchor.getBoundingClientRect();
            const x = (r.left - sheetRect.left) * scaleX;
            const y = (r.top - sheetRect.top) * scaleY;
            const w = r.width * scaleX;
            const h = r.height * scaleY;
            pdf.link(x, y, w, h, { url: anchor.href });
        });

        pdf.save("joao-freire-resume.pdf");
    } finally {
        if (button) {
            button.disabled = false;
            button.textContent = originalLabel;
        }
    }
}

function initializeResumePage() {
    renderResume(RESUME_DATA);

    const button = document.getElementById("downloadPdfBtn");
    if (!button) return;

    button.addEventListener("click", async () => {
        await downloadResumePdf(button);
    });
}

initializeResumePage();
