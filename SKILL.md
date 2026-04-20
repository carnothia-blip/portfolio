# add-portfolio-project

`js/data.js`에 새 프로젝트 데이터를 추가하고, 테마 변수가 포함된 전용 CSS 파일을 생성합니다.

## 고정값 (Project Context)
- **데이터 파일:** `js/data.js`
- **스타일 경로:** `css/[project-name].css`
- **공통 스타일:** `css/style.css` (CSS 변수 기반 모달 테마)

## 실행 가이드 (Instructions)

사용자가 새로운 프로젝트 추가를 요청하면 다음 절차를 수행합니다.

1.  **정보 수집:** 제목, 설명, 메인 이미지 경로, 기술 스택, 기간, 기여도, 관련 링크 등을 확인합니다.
2.  **ID 자동 생성:** `js/data.js`의 `projects` 배열에서 마지막 객체의 `id`에 `1`을 더한 값을 새 ID로 설정합니다.
3.  **데이터 업데이트 (`js/data.js`):**
    - `projects` 배열 끝에 새 객체를 추가합니다.
    - `cssFile`은 `css/[영문명].css`로 자동 지정합니다.
    - `buttons` 배열에는 "개요" 버튼을 기본으로 포함합니다.
4.  **CSS 파일 생성:** `css/` 폴더 내에 해당 프로젝트용 파일을 생성하고 모달 테마 변수를 설정합니다.
    ```css
    #modal-content {
        --modal-title: [대표색];
        --modal-accent: [대표색];
        --modal-border: [대표색-투명도];
    }
    ```
5.  **검증:** 생성된 파일과 데이터 구문이 올바른지 확인합니다.

## 트리거 키워드
- 프로젝트 추가해줘
- 새 포트폴리오 등록
- 프로젝트 데이터 업데이트
- add new project to data.js

## 주의사항
- 답변은 요점 위주로 간결하게 작성합니다.
- 파일명은 소문자 kebab-case를 사용합니다.
- `index.html`은 수정하지 않습니다.
