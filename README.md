
OVERVIEW
REACT AND NEXT 활용한 클레스메이트 소개 페이지

SUMMARY
1. SIDE - 개별로 클릭가능한 룸메이트 명단
2. BOARDCONT - 대상 클래스메이트에 대한 개별소개 
3. 

DIRECTORY


app/
├── node_modules/       # npm 패키지들이 저장되는 디렉토리
├── public/             # 정적 파일들(HTML, favicon, manifest 등)을 포함하는 디렉토리
│   ├── index.html      # 기본 HTML 파일
│   ├── favicon.ico     # 웹사이트 아이콘
│   └── ...             # 기타 정적 파일들
├── src/                # 소스 코드를 저장하는 디렉토리
│   ├── index.js        # 애플리케이션의 진입점
│   ├── App.js          # 주 앱 컴포넌트
│   ├── App.css         # App 컴포넌트에 대한 스타일
│   ├── components/     # 재사용 가능한 컴포넌트들을 저장하는 디렉토리
│   │   ├── Header.js   # 헤더 컴포넌트 예시
│   │   └── ...         # 다른 컴포넌트들
│   ├── assets/         # 이미지, 폰트 등의 정적 에셋을 저장하는 디렉토리
│   ├── utils/          # 유틸리티 함수나 상수를 저장하는 디렉토리
│   └── ...             # 기타 소스 코드 및 리소스
├── package.json        # 프로젝트의 메타데이터 및 의존성 정보
├── package-lock.json   # 설치된 패키지의 정확한 버전 정보
├── .gitignore          # git에서 무시해야 할 파일 및 디렉토리 목록
└── README.md           # 프로젝트에 대한 설명 및 문서
