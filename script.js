const projects = [
    {
        id: 1,
        title: "브루다커피 리디자인",
        image: "images/brewda.png",
        cssFile: "brewda.css",
        hasModal: true,
        description: "브루다커피의 브랜드 아이덴티티를 살리면서 사용자 경험을 개선한 리디자인 프로젝트입니다.",
        details: [
            { label: "역할", value: "Video Creator" },
            { label: "기간", value: "2주" },
            { label: "툴", value: "Figma, Kling, Premiere Pro" },
        ],
        images: ["images/brewda.png"],
        link: "https://drive.google.com/drive/folders/1SM-7d5xRPs8XTvPvRHy-jigINDG-Qxs3?usp=drive_link",
    },
    {
        id: 2,
        title: "이케아 리디자인",
        image: "images/ikea.png",
        cssFile: "ikea.css",
        hasModal: true,
        description: "이케아 웹사이트의 정보 구조와 시각적 계층을 재설계한 리디자인 프로젝트입니다.",
        details: [
            { label: "역할", value: "UI/UX Designer" },
            { label: "기간", value: "3주" },
            { label: "툴", value: "Figma, Kling, Premiere Pro" },
        ],
        images: ["images/ikea_main.png"],
        link: "https://carnothia-blip.github.io/projectA/",
    },
    {
        id: 3,
        title: "고양이 에버랜드",
        image: "images/everland.png",
        cssFile: "everland.css",
        hasModal: true,
        description: "고양이를 테마로 한 에버랜드 콘셉트 디자인 프로젝트입니다.",
        details: [
            { label: "역할", value: "UI/UX Designer, Video Creator" },
            { label: "기간", value: "1주" },
            { label: "툴", value: "Figma, Whisk, Premiere Pro" },
        ],
        images: ["images/cat_merry_go_round.png"],
        link: "https://drive.google.com/drive/folders/1tfvu9Fw_JYM0AyPz7opeD0qdQM_RnMep?usp=sharing",
    },
    {
        id: 4,
        title: "에그앤씨드 리디자인",
        image: "images/eyrie_logo.png",
        imageClass: "contain",
        cssFile: "EggnSeed.css",
        hasModal: true,
        description: "바이브코딩을 사용하여 에그앤씨드 아이리 사이트의 정보 구조와 시각적 계층을 재설계한 리디자인 프로젝트입니다.",
        details: [
            { label: "역할", value: "UI/UX Designer" },
            { label: "기간", value: "1주" },
            { label: "툴", value: "Whisk, Claude, Gemini" },
        ],
        images: ["images/Eyrie_main.png"],
        link: "https://carnothia-blip.github.io/ProjectB/",
    },
    {
        id: 5,
        title: "VODA OTT 서비스",
        image: "images/vodalogo.png",
        imageClass: "contain",
        cssFile: "voda.css",
        hasModal: true,
        description: "TMDB, 허깅페이스 API를 연동해 실시간 영화정보 열람 및 구독 시청이 가능한 팀 프로젝트 OTT 구독서비스 VODA입니다.",
        details: [
            { label: "역할", value: "UI/UX Designer" },
            { label: "기간", value: "9일" },
            { label: "툴", value: "허깅페이스, TMDB, figma, render, Claude, Gemini" },
        ],
        images: ["images/voda.png"],
        link: "https://voda-r4s5.onrender.com/",
    },
];

function buildModalContent(project) {
    const detailsHTML = project.details.map(d => `
        <div class="modal-detail-row">
            <span class="modal-detail-label">${d.label}</span>
            <span class="modal-detail-value">${d.value}</span>
        </div>
    `).join('');

    const imagesHTML = project.images.map(src => {
        const imgTag = `<img src="${src}" alt="${project.title}" class="modal-project-image">`;
        if (project.link) {
            return `
        <a href="${project.link}" target="_blank" rel="noopener" class="modal-image-link" title="프로젝트 보러가기">
            ${imgTag}
            <span class="modal-image-overlay">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                프로젝트 보러가기
            </span>
        </a>`;
        }
        return imgTag;
    }).join('');

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

function closeModal(modalId) {
    const modal = document.getElementById(modalId || 'project-modal');
    modal.classList.remove('is-open');
    if (!document.querySelector('.modal-overlay.is-open')) {
        document.body.style.overflow = '';
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    if (project.hasModal) {
        card.classList.add('has-modal');
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `${project.title} 상세보기`);
    }

    card.innerHTML = `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image ${project.imageClass || ''}">
        </div>
        <p class="project-title">${project.title}</p>
    `;

    if (project.hasModal) {
        const handleOpen = () => openModal(project);
        card.addEventListener('click', handleOpen);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOpen();
            }
        });
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

    // 프로젝트 모달 닫기
    document.getElementById('modal-close').addEventListener('click', () => closeModal('project-modal'));
    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal('project-modal');
    });

    // Work 버튼 클릭 시 스크롤 이동 기능
    const workBtn = document.getElementById('nav-work');
    const workSection = document.getElementById('work');

    if (workBtn && workSection) {
        workBtn.addEventListener('click', () => {
            const headerOffset = 100;
            const elementPosition = workSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }

    // About 모달 제어
    const aboutModal = document.getElementById('about-modal');
    const aboutBtn = document.getElementById('nav-about');
    const emailLink = document.getElementById('email-link');

    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'jiminjdo@gmail.com';
            window.location.href = `mailto:${email}`;
        });
    }

    if (aboutBtn && aboutModal) {
        aboutBtn.addEventListener('click', () => {
            aboutModal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        });

        document.getElementById('about-modal-close').addEventListener('click', () => closeModal('about-modal'));
        aboutModal.addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeModal('about-modal');
        });
    }

    // ESC 키 공통 처리
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal('project-modal');
            closeModal('about-modal');
        }
    });
});
