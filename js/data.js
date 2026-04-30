const projects = [
  {
    id: 1,
    title: "브루다커피 리디자인",
    image: "images/brewdaa.png",
    cssFile: "css/brewda.css",
    hasModal: true,
    buttons: [
      {
        text: "기획서",
        link: "https://drive.google.com/file/d/1kq-3aIPi8TeXgbd6DFpRPruhrAkXgnEO/view?usp=sharing",
      },
      {
        text: "프로토타입",
        link: "https://www.figma.com/proto/a7ypZWAQMTE4NtIf8HpwnU/3%ED%8C%80-%EC%95%B1%EB%94%94%EC%9E%90%EC%9D%B8?node-id=4-2&p=f&viewport=869%2C591%2C0.09&t=oqjoSrRrrPwwUn1t-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A59&page-id=0%3A1",
      },
      {
        text: "영상 스토리보드",
        link: "https://drive.google.com/file/d/1VtCktllckXHneOwL14FuqF0Z4pwQhnhd/view?usp=sharing",
      },
      {
        text: "영상",
        link: "https://drive.google.com/file/d/1wn4oqjrEmOkdaFK_wG-8DF93EXFZ3Epk/view?usp=drive_link",
      },
      { text: "개요", link: "" },
    ],
    description:
      "브루다커피의 브랜드 아이덴티티를 살리면서 사용자 경험을 개선한 리디자인 프로젝트입니다.",
    details: [
      {
        label: "기술스택",
        value: "Figma, Kling, Premiere Pro, After Effect, Claude, Gemini",
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
    title: "VODA OTT 서비스",
    image: "images/voda1.png",
    cssFile: "css/voda.css",
    hasModal: true,
    buttons: [
      {
        text: "기획서",
        link: "https://drive.google.com/file/d/1_ek7_7agyFZ0nA7FiF5cvPQVqFyuX4j3/view?usp=sharing",
      },
      { text: "영상", link: "https://drive.google.com/file/d/1K3rGeviC4wPfg6-1nYvhSe8VRf7XCJtg/view?usp=sharing" },
      { text: "사이트", link: "https://voda-r4s5.onrender.com/" },
      { text: "개요", link: "" },
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
  {
    id: 3,
    title: "이케아 리디자인",
    image: "images/ikea2.png",
    cssFile: "css/ikea.css",
    hasModal: true,
    buttons: [
      {
        text: "사이트",
        link: "https://carnothia-blip.github.io/projectA/",
      },
      {
        text: "영상 스토리보드",
        link: "https://drive.google.com/file/d/150jNPMyDx24NxEDgknYGpfXrazamY8gj/view?usp=sharing",
      },
      {
        text: "영상",
        link: "https://drive.google.com/file/d/1zxNc-q8Sh0XP6I4rlaGMtL4jKt4lab_l/view?usp=sharing",
      },
      { text: "개요", link: "" },
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
    id: 4,
    title: "고양이 에버랜드",
    image: "images/cat3.png",
    cssFile: "css/everland.css",
    hasModal: true,
    buttons: [
      {
        text: "기획서",
        link: "https://drive.google.com/file/d/1217ayIyg-F-oxGDBxJhN_dnnKMnS2_hX/view?usp=sharing",
      },
      {
        text: "영상 스토리보드",
        link: "https://drive.google.com/file/d/1WBPIBWhSDrPxGNUlW_YSUB6oPQqSpvsx/view?usp=sharing",
      },
      {
        text: "영상",
        link: "https://drive.google.com/file/d/1IzsA52O3Khc84TLiNudwQUFKNLrXnIru/view?usp=sharing",
      },
      { text: "개요", link: "" },
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
];
