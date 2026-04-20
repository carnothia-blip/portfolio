# Jimin Do — Portfolio

신입 UI/UX 디자이너 **도지민**의 구직용 포트폴리오 웹사이트입니다.
디자인·영상·프론트엔드의 경계를 넘나드는 작업물을 한 페이지에서 보여주는 것을 목표로 제작했습니다.

🔗 **Live:** `index.html`을 브라우저에서 바로 열어 확인할 수 있습니다.
🎨 **Design:** [Figma 원본](https://www.figma.com/design/hB48lzNypo2t5nW8xvaUr8/Convert-design-to-HTML-page)

## About

- **이름:** 도지민 (Jimin Do)
- **포지션:** UI/UX Designer & Frontend Developer & Video Maker
- **이메일:** jiminjdo@gmail.com
- **GitHub:** https://github.com/carnothia-blip

사용자 경험을 중심에 두고 시각적으로 아름다운 인터페이스를 만드는 것을 좋아합니다.
디자인과 영상, 개발의 경계에서 일하며 영역을 자유롭게 넘나드는 것을 즐깁니다.

## 주요 섹션

- **Hero** — GSAP SplitText 기반 인트로 애니메이션
- **About Me** — 인적사항, 학력, 자격사항
- **Projects** — 프로젝트 카드 그리드 + 상세 모달
- **Contact** — EmailJS 기반 문의 폼

## 기술 스택

- **Markup / Style:** HTML5, Vanilla CSS (반응형)
- **Script:** Vanilla JavaScript
- **Animation:** GSAP, SplitText
- **Mail:** EmailJS
- **Design:** Figma

## 프로젝트 구조

```
resume/
├── index.html          # 메인 페이지
├── css/style.css       # 전체 스타일
├── js/script.js        # 프로젝트 렌더링 · 모달 · 애니메이션
├── images/             # 이미지 에셋
└── md/                 # 프로젝트 가이드 및 컨텍스트 (GEMINI.md, SKILL.md 등)
```

## 실행 방법

별도의 빌드 단계 없이 `index.html`을 브라우저에서 열면 됩니다.

```bash
# 또는 로컬 서버로 실행
npx serve .
```
