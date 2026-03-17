const projects = [
    {
        id: 1,
        title: "브루다커피 리디자인",
        image: "images/brewda.png",
        cssFile: "브루다커피 리디자인.css",
        hasModal: true,
        description: "브루다커피의 브랜드 아이덴티티를 살리면서 사용자 경험을 개선한 리디자인 프로젝트입니다.",
        details: [
            { label: "역할", value: "Video Creator" },
            { label: "기간", value: "2주" },
            { label: "툴", value: "Figma, Kling, Premiere Pro" },
        ],
        images: ["images/brewda.png"],
    },
    {
        id: 2,
        title: "이케아 리디자인",
        image: "images/ikea.png",
        cssFile: "이케아 리디자인.css",
        hasModal: true,
        description: "이케아 웹사이트의 정보 구조와 시각적 계층을 재설계한 리디자인 프로젝트입니다.",
        details: [
            { label: "역할", value: "UI/UX Designer" },
            { label: "기간", value: "3주" },
            { label: "툴", value: "Figma, Kling, Premiere Pro" },
        ],
        images: ["images/ikea.png"],
    },
    {
        id: 3,
        title: "고양이 에버랜드",
        image: "images/everland.png",
        cssFile: "고양이 에버랜드.css",
        hasModal: true,
        description: "고양이를 테마로 한 에버랜드 콘셉트 디자인 프로젝트입니다.",
        details: [
            { label: "역할", value: "UI/UX Designer, Video Creator" },
            { label: "기간", value: "1주" },
            { label: "툴", value: "Figma, Whisk, Premiere Pro" },
        ],
        images: ["images/everland.png"],
    },
    { id: 4, title: "AR Working Space for Designer", image: "https://www.dummyimg.in/placeholder" },
    // { id: 5, title: "Data-visualization-rico", image: "https://www.dummyimg.in/placeholder" },
    // { id: 6, title: "Google UX Design Internship", image: "https://www.dummyimg.in/placeholder" },
    // { id: 7, title: "Internship", image: "https://www.dummyimg.in/placeholder" },
    // { id: 8, title: "Personal brand / Business / Visual design", image: "https://www.dummyimg.in/placeholder" },
];

function buildModalContent(project) {
    const detailsHTML = project.details.map(d => `
        <div class="modal-detail-row">
            <span class="modal-detail-label">${d.label}</span>
            <span class="modal-detail-value">${d.value}</span>
        </div>
    `).join('');

    const imagesHTML = project.images.map(src => `
        <img src="${src}" alt="${project.title}" class="modal-project-image">
    `).join('');

    return `
        <link rel="stylesheet" href="${project.cssFile}">
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-details">${detailsHTML}</div>
        </div>
        <div class="modal-images">${imagesHTML}</div>
        <div class="modal-description">
            <p>${project.description}</p>
        </div>
    `;
}

function openModal(project) {
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    content.innerHTML = buildModalContent(project);
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    if (project.hasModal) card.classList.add('has-modal');

    card.innerHTML = `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image">
        </div>
        <p class="project-title">${project.title}</p>
    `;

    if (project.hasModal) {
        card.addEventListener('click', () => openModal(project));
    }

    return card;
}

function renderProjects() {
    const grid = document.getElementById('project-grid');
    if (!grid) return;
    projects.forEach(project => grid.appendChild(createProjectCard(project)));
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    document.getElementById('modal-close').addEventListener('click', closeModal);

    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
