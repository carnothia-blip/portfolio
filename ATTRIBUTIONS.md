This Figma Make file includes components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

This Figma Make file includes photos from [Unsplash](https://unsplash.com) used under [license](https://unsplash.com/license).


## .hero-title
1. 문단1
   1. 1.9m급 초거대 모델 LLM(Large Long Model)
2. 문단2
   1. 환각없는 ‘Jimini’ 도지민입니다.

1. gsap
   1. <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
2. GSAP SplitText.create()를 사용해서 h1.hero-title 요소에 1,2의 텍스트를 애니메이션 넣어줘. 각 문단의 duration 은 0.5초 이고 delay는 0.3초야.
3. 글자 단위로 분해하고, 각 글자가 아래에서 위로 순차적으로 페이드인하는 애니메이션을 만들어줘. stagger 0.03초, ease는 power3.out으로 설정하고, 애니메이션 완료 후 revert()로 DOM을 복구해줘.