const projects = [
  {
    id: 1,
    title: "브루다커피 리디자인",
    image: "images/brewdaa.png",
    cssFile: "css/brewda.css",
    hasModal: true,
    buttons: [
      { text: "기획서 보기", link: "https://www.figma.com/deck/fLRmIylMudtVClnFb2qGMi" },
      { text: "영상 스토리보드 보기", link: "https://drive.google.com/file/d/1VtCktllckXHneOwL14FuqF0Z4pwQhnhd/view?usp=sharing" },
      {
        text: "영상 보기",
        link: "https://drive.google.com/file/d/1wn4oqjrEmOkdaFK_wG-8DF93EXFZ3Epk/view?usp=drive_link",
      },
      { text: "프로토타입", link: "https://www.figma.com/deck/fLRmIylMudtVClnFb2qGMi" },
    ],
    description:
      "브루다커피의 브랜드 아이덴티티를 살리면서 사용자 경험을 개선한 리디자인 프로젝트입니다.",
    details: [
      {
        label: "기술스택",
        value: "Figma, Kling, Premiere Pro, Claude, Gemini",
      },
      { label: "배포매체", value: "Mobile" },
      { label: "작업기간", value: "2주" },
      { label: "본인 기여도", value: "25%" },
      { label: "특징", value: "접근성 준수/원터치 주문결제" },
    ],
    images: ["images/brewda2.png"],
  },
  {
    id: 2,
    title: "이케아 리디자인",
    image: "images/ikea2.png",
    cssFile: "css/ikea.css",
    hasModal: true,
    buttons: [
      { text: "기획서 보기", link: "https://www.figma.com/deck/pdz54n6EeAHUITbc8Tl6az" },
      { text: "영상 스토리보드 보기", link: "https://drive.google.com/file/d/150jNPMyDx24NxEDgknYGpfXrazamY8gj/view?usp=sharing" },
      { text: "영상 보기", link: "https://drive.google.com/file/d/1zxNc-q8Sh0XP6I4rlaGMtL4jKt4lab_l/view?usp=sharing" },
      { text: "사이트 보기", link: "https://carnothia-blip.github.io/projectA/" },
    ],
    description:
      "이케아 웹사이트의 정보 구조와 시각적 계층을 재설계한 리디자인 프로젝트입니다.",
    details: [
      {
        label: "기술스택",
        value: "Figma, Kling, Premiere Pro, Claude, Gemini",
      },
      { label: "배포매체", value: "Desktop, Mobile" },
      { label: "작업기간", value: "3주" },
      { label: "본인 기여도", value: "100%" },
      { label: "특징", value: "메인페이지" },
    ],
    images: ["images/ikea_main.png"],
    
  },
  {
    id: 3,
    title: "고양이 에버랜드",
    image: "images/cat3.png",
    cssFile: "css/everland.css",
    hasModal: true,
    buttons: [
      { text: "기획서 보기", link: "https://docs.google.com/presentation/d/1rC1pyTt11BtHd7DGCzfuen5x6_ZLcO5g/edit?usp=sharing&ouid=101785610843370507682&rtpof=true&sd=true" },
      { text: "영상 스토리보드 보기", link: "https://drive.google.com/file/d/1WBPIBWhSDrPxGNUlW_YSUB6oPQqSpvsx/view?usp=sharing" },
      { text: "영상 보기", link: "https://drive.google.com/file/d/1IzsA52O3Khc84TLiNudwQUFKNLrXnIru/view?usp=sharing" },
    ],
    description: "고양이를 테마로 한 에버랜드 콘셉트 디자인 프로젝트입니다.",
    details: [
      {
        label: "기술스택",
        value: "Figma, Whisk, Premiere Pro, Gemini, ChatGPT",
      },
      { label: "배포매체", value: "Desktop, Mobile" },
      { label: "작업기간", value: "1주" },
      { label: "본인 기여도", value: "100%" },
      { label: "특징", value: "AI를 이용한 영상제작" },
    ],
    images: ["images/cat_merry_go_round.png"],
    
  },
  {
    id: 4,
    title: "에그앤씨드 리디자인",
    image: "images/eyrie1.png",
    cssFile: "css/EggnSeed.css",
    hasModal: true,
    buttons: [
      { text: "사이트 보기", link: "https://carnothia-blip.github.io/ProjectB/" },
    ],
    description:
      "바이브코딩을 사용하여 에그앤씨드 아이리 사이트의 정보 구조와 시각적 계층을 재설계한 리디자인 프로젝트입니다.",
    details: [
      { label: "기술스택", value: "Whisk, Claude, Gemini" },
      { label: "배포매체", value: "Desktop, Mobile" },
      { label: "작업기간", value: "2일" },
      { label: "본인 기여도", value: "100%" },
      { label: "특징", value: "바이브코딩으로 구현" },
    ],
    images: ["images/Eyrie_main.png"],
    
  },
  {
    id: 5,
    title: "VODA OTT 서비스",
    image: "images/voda1.png",
    cssFile: "css/voda.css",
    hasModal: true,
    buttons: [
      { text: "기획서 보기", link: "https://docs.google.com/presentation/d/1mhoTj0WaSNQlylPvAlAmw0hqdvfDlEh9/edit?slide=id.p1#slide=id.p1" },
      { text: "사이트 보기", link: "https://voda-r4s5.onrender.com/" },
    ],
    description:
      "TMDB, 허깅페이스 API를 연동해 실시간 영화정보 열람 및 구독 시청이 가능한 팀 프로젝트 OTT 구독서비스 VODA입니다.",
    details: [
      {
        label: "기술스택",
        value: "허깅페이스, TMDB, figma, render, Claude, Gemini",
      },
      { label: "배포매체", value: "Desktop, Mobile" },
      { label: "작업기간", value: "9일" },
      { label: "본인 기여도", value: "16%" },
      {
        label: "특징",
        value: "TMDB와 허깅페이스의 API 연결과 AI챗봇을 활용한 OTT 서비스 구축",
      },
    ],
    images: ["images/voda.png"],
    
  },
];

function buildModalContent(project) {
  const detailsHTML = project.details
    .map(
      (d) => `
        <div class="modal-detail-row">
            <span class="modal-detail-label">${d.label}</span>
            <span class="modal-detail-value">${d.value}</span>
        </div>
    `,
    )
    .join("");

  const imagesHTML = project.images
    .map((src) => {
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
    })
    .join("");

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
  const modal = document.getElementById("project-modal");
  const content = document.getElementById("modal-content");
  content.innerHTML = buildModalContent(project);
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId || "project-modal");
  modal.classList.remove("is-open");
  if (!document.querySelector(".modal-overlay.is-open")) {
    document.body.style.overflow = "";
  }
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";
  if (project.hasModal) {
    card.classList.add("has-modal");
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${project.title} 상세보기`);
  }

  const buttonsHTML = (project.buttons || [])
    .map(
      (btn) => `
        <a href="${btn.link || '#'}" target="_blank" rel="noopener" class="project-card-btn">${btn.text}</a>
    `,
    )
    .join("");

  card.innerHTML = `
        <div class="project-image-wrapper">
            <img src="${project.image}" alt="${project.title}" class="project-image ${project.imageClass || ""}">
            <div class="project-card-buttons">
                ${buttonsHTML}
            </div>
        </div>
        <p class="project-title">${project.title}</p>
    `;

  if (project.hasModal) {
    const handleOpen = (e) => {
      // 버튼 클릭 시에는 모달을 열지 않음
      if (e.target.closest('.project-card-btn')) return;
      openModal(project);
    };
    
    card.addEventListener("click", handleOpen);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (e.target.closest('.project-card-btn')) return;
        e.preventDefault();
        handleOpen(e);
      }
    });
  }

  return card;
}

function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  projects.forEach((project) => grid.appendChild(createProjectCard(project)));
}

function animateHeroTitle() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  const paragraphs = heroTitle.querySelectorAll("p");
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  paragraphs.forEach((paragraph, index) => {
    // Split text into characters
    const splitText = new SplitText(paragraph, { type: "chars" });
    const chars = splitText.chars;

    // Animate characters from bottom to top
    tl.from(chars, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      stagger: 0.03,
      ease: "power3.out"
    }, index === 0 ? 0 : ">"); // 첫 번째는 0에서 시작, 이후는 이전 애니메이션 끝나고 시작
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // EmailJS 초기화 (본인의 Public Key로 교체하세요)
  // 예: emailjs.init("abcd1234efgh");
  emailjs.init("M1n0rDtfHwGM-EjRa");

  renderProjects();

  // Animate hero title
  animateHeroTitle();

  // 프로젝트 모달 닫기
  document
    .getElementById("modal-close")
    .addEventListener("click", () => closeModal("project-modal"));
  document.getElementById("project-modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal("project-modal");
  });

  // 네비게이션 버튼 클릭 시 스크롤 이동 기능
  const scrollTargets = [
    { btnId: "nav-AboutMe", targetId: "about", offset: 50 },
    { btnId: "nav-work", targetId: "work", offset: 100 }
  ];

  scrollTargets.forEach(({ btnId, targetId, offset }) => {
    const btn = document.getElementById(btnId);
    const target = document.getElementById(targetId);

    if (btn && target) {
      btn.addEventListener("click", () => {
        const headerOffset = offset;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    }
  });

  // About 모달 제어
  const aboutModal = document.getElementById("about-modal");
  const aboutBtn = document.getElementById("nav-about");
  const emailLink = document.getElementById("email-link");
  const contactModal = document.getElementById("contact-modal");

  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      e.preventDefault();
      // 메일 클라이언트를 여는 대신 Contact 모달을 엽니다.
      closeModal("about-modal");
      contactModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  }

  if (aboutBtn && aboutModal) {
    aboutBtn.addEventListener("click", () => {
      aboutModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });

    document
      .getElementById("about-modal-close")
      .addEventListener("click", () => closeModal("about-modal"));
    aboutModal.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal("about-modal");
    });
  }

  // Contact 모달 제어
  if (contactModal) {
    document
      .getElementById("contact-modal-close")
      .addEventListener("click", () => closeModal("contact-modal"));
    contactModal.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal("contact-modal");
    });

    const contactForm = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");

    if (contactForm) {
      contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // 전송 중 상태 표시
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");
        submitBtn.querySelector("span").textContent = "Sending...";

        // EmailJS 전송 (본인의 Service ID와 Template ID로 교체하세요)
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        emailjs
          .sendForm("service_zy7gx5c", "template_2ogdzdf", this)
          .then(
            function () {
              alert("메일이 성공적으로 전송되었습니다!");
              contactForm.reset();
              closeModal("contact-modal");
            },
            function (error) {
              alert("전송에 실패했습니다: " + JSON.stringify(error));
            },
          )
          .finally(function () {
            submitBtn.disabled = false;
            submitBtn.classList.remove("loading");
            submitBtn.querySelector("span").textContent = "Send Message";
          });
      });
    }
  }

  // ESC 키 공통 처리
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal("project-modal");
      closeModal("about-modal");
      closeModal("contact-modal");
    }
  });
});
