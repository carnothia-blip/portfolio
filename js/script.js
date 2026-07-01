function toggleModal(modalId, isOpen) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  if (isOpen) {
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  } else {
    modal.classList.remove("is-open");
    // 열려있는 다른 모달이 없는 경우에만 스크롤 복구
    if (!document.querySelector(".modal-overlay.is-open")) {
      document.body.style.overflow = "";
    }
  }
}

function buildModalContent(project) {
  const detailsHTML = (project.details || [])
    .map(
      (detail) => `
        <div class="modal-detail-row">
            <span class="modal-detail-label">${detail.label}</span>
            <span class="modal-detail-value">${detail.value}</span>
        </div>
    `,
    )
    .join("");

  const imagesHTML = (project.images || [])
    .map(
      (img) => `
        <img src="${img}" alt="${project.title} screenshot" class="modal-project-image">
    `,
    )
    .join("");

  return `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-details">
                ${detailsHTML}
            </div>
        </div>
        <div class="modal-images">
            ${imagesHTML}
        </div>
        <div class="modal-description">
            <p>${project.description}</p>
        </div>
    `;
}

function openProjectModal(project) {
  const content = document.getElementById("modal-content");

  // 프로젝트별 테마 CSS 로드
  let themeLink = document.getElementById("project-theme-link");
  if (!themeLink) {
    themeLink = document.createElement("link");
    themeLink.id = "project-theme-link";
    themeLink.rel = "stylesheet";
    document.head.appendChild(themeLink);
  }
  themeLink.href = project.cssFile || "";

  content.innerHTML = buildModalContent(project);
  toggleModal("project-modal", true);
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  const buttonsHTML = (project.buttons || [])
    .map((btn) => {
      if (btn.text === "개요") {
        return `<button type="button" class="project-card-btn overview-btn">${btn.text}</button>`;
      }
      return `<a href="${btn.link || "#"}" target="_blank" rel="noopener" class="project-card-btn">${btn.text}</a>`;
    })
    .join("");

  card.innerHTML = `
        <div class="project-card-top">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image ${project.imageClass || ""}">
            </div>
            <div class="project-card-buttons">
                ${buttonsHTML}
            </div>
        </div>
        <p class="project-title">${project.title}</p>
    `;

  const overviewBtn = card.querySelector(".overview-btn");
  if (overviewBtn && project.hasModal) {
    overviewBtn.addEventListener("click", () => openProjectModal(project));
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
    const splitText = new SplitText(paragraph, { type: "chars" });
    tl.from(
      splitText.chars,
      {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.03,
        ease: "power3.out",
      },
      index === 0 ? 0 : ">",
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("M1n0rDtfHwGM-EjRa");

  renderProjects();
  animateHeroTitle();

  // 공통 모달 닫기 이벤트 (data-close 속성 활용 권장되나 현재 구조 유지하며 정리)
  const closeButtons = [
    { id: "modal-close", modalId: "project-modal" },
    { id: "about-modal-close", modalId: "about-modal" },
    { id: "contact-modal-close", modalId: "contact-modal" },
  ];

  closeButtons.forEach(({ id, modalId }) => {
    const btn = document.getElementById(id);
    const modal = document.getElementById(modalId);
    if (btn) btn.addEventListener("click", () => toggleModal(modalId, false));
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) toggleModal(modalId, false);
      });
    }
  });

  // 네비게이션 스크롤
  const scrollTargets = [
    { btnId: "nav-AboutMe", targetId: "about", offset: 50 },
    { btnId: "nav-work", targetId: "work", offset: 100 },
  ];

  scrollTargets.forEach(({ btnId, targetId, offset }) => {
    const btn = document.getElementById(btnId);
    const target = document.getElementById(targetId);
    if (btn && target) {
      btn.addEventListener("click", () => {
        const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      });
    }
  });

  // Contact 모달 열기 제어
  const contactBtn = document.getElementById("nav-contact-me");
  const emailLink = document.getElementById("email-link");

  if (emailLink) {
    emailLink.addEventListener("click", (e) => {
      e.preventDefault();
      toggleModal("about-modal", false);
      toggleModal("contact-modal", true);
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", () => toggleModal("contact-modal", true));
  }

  // Contact 폼 제출
  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  if (contactForm && submitBtn) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      submitBtn.disabled = true;
      const btnText = submitBtn.querySelector("span");
      btnText.textContent = "Sending...";

      emailjs.sendForm("service_zy7gx5c", "template_2ogdzdf", this)
        .then(() => {
          alert("메일이 성공적으로 전송되었습니다!");
          contactForm.reset();
          toggleModal("contact-modal", false);
        })
        .catch((error) => {
          alert("전송에 실패했습니다: " + JSON.stringify(error));
        })
        .finally(() => {
          submitBtn.disabled = false;
          btnText.textContent = "Send Message";
        });
    });
  }

  // ESC 키 처리
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      ["project-modal", "about-modal", "contact-modal"].forEach(id => toggleModal(id, false));
    }
  });
});
