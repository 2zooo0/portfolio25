//Json형식으로 계속해서 포트폴리오 추가할 수 있도록
const portfolioData = {
  "1": {
    id: "1",
    category: "Film",
    title: "멈추지 않는 자전차왕 카츠라",
    role: "편집 100%",
    projectName: "자전차왕 카츠라",
    client: "중앙대학교 예술공학부 컨셉스튜디오 팀 프로젝트트",
    date: "2025.03",
    url: "https://youtu.be/rPBLPCnDoD4",
    intro: "영화 [자동차왕 엄복동]을 분해 및 재구성한 단편필름",
    description: "영화 주인공을 극 중 인물인 카츠라로 선정하여 살인을 서슴지않는 싸이코패스 카츠라를 모습을 연출했습니다. 영상의 마지막 부분에서 끊임없이 도는 자전차의 페달을 배치하여 카츠라가 앞으로도 살인을 멈추지 않을 것임을 암시합니다. 아이디어 기획 및 편집을 담당했습니다.",
    images: [
      "assets/img/portfolio/portfolio-1.png",
      "assets/img/portfolio/film/portfolio-details-1.jpg",
      "assets/img/portfolio/film/portfolio-details-2.jpg",
      "assets/img/portfolio/film/portfolio-details-3.jpg"
    ]
  },
  "2": {
    id: "2",
    category: "Film",
    title: "수림체육관 재해석",
    role: "언리얼엔진/편집 100%",
    projectName: "수림체육관 재해석",
    client: "중앙대학교 예술공학부 컨셉스튜디오 기말 프로젝트",
    date: "2025.05",
    url: "https://youtu.be/T7Ljy5babkc?si=fuLh_DKX3PG5bUFa",
    intro: "중앙대학교 수림체육관을 드론으로 스캔, 모델링 후 공간을 재해석한 필름 제작",
    description: "드론으로 스캔해 모델링한 수림체육관을 언리얼 엔진에서 각 4면에 맞는 레벨디자인 후, 공을 오브제로 리깅하여 촬영, 후편집을 담당했다.",
    images: [
      "assets/img/portfolio/film/체육관.png",
      "assets/img/portfolio/portfolio-2.png",
      "assets/img/portfolio/film/portfolio-details-4.png",
      "assets/img/portfolio/film/portfolio-details-5.png",
      "assets/img/portfolio/film/portfolio-details-6.png",
      "assets/img/portfolio/film/portfolio-details-7.png"
    ]
},

  "3": {
  id: "3",
  category: "Film",
  title: "Immersive Beats; 360 MUSIC VIDEO Joint Hackathon",
  role: "기획 100%, 언리얼엔진 레벨디자인 50%",
  projectName: "Immersive Beats; 360 MUSIC VIDEO",
  client: "헝가리 MOME대학교 & 중앙대 실감미디어 공동 해커톤",
  date: "2025.04.04~2025.04.11",
  url: "https://vc.cau.ac.kr/attractivehungary/",
  intro: "반구형 돔 구조를 활용한 360도 몰입형 뮤직비디오오",
  description: "헝가리 House of Music Hungary에 상영된 360도 뮤직비디오로, 돔형 구조의 시각적 특성을 고려해 '바벨탑×매슬로 5대욕구'라는 주제 아래 각 층의 시퀀스를 기획하고 언리얼엔진으로 제작했다. 탑의 끝에서 신적인 존재를 만나 추락하는는 과정을 형상화였다. 기획/비주얼 연출을 100%담당했으며, 언리얼엔진 레벨디자인 및 촬영을 담당했다.",
  images: [
    "assets/img/portfolio/film/portfolio-details-8.png",
    "assets/img/portfolio/film/portfolio-details-9.png",
    "assets/img/portfolio/film/portfolio-details-10.png",
    "assets/img/portfolio/film/portfolio-details-11.png",
    "assets/img/portfolio/film/portfolio-details-12.png",
    "assets/img/portfolio/film/portfolio-details-13.png",
    "assets/img/portfolio/film/portfolio-details-14.png",
    "assets/img/portfolio/film/portfolio-details-15.png"
  ]
},
"4": {
    id: "4",
    category: "Design",
    title: "멋쟁이사자처럼 중앙대학교 13기 홍보팀장",
    role: "SNS 디자인 및 운영",
    projectName: "멋쟁이사자처럼 중앙대학교 13기 홍보팀장",
    client: "멋쟁이사자처럼 중앙대 13기",
    date: "2025.01~",
    url: "https://www.instagram.com/likelion_cau/",
    intro: "동아리 공식 SNS 콘텐츠 운영 및 디자인",
    description: "인스타그램 및 유튜브 채널을 운영하며 카드뉴스, 굿즈 디자인, 스토리 콘텐츠 등을 제작하고, 동아리 정체성을 시각적으로 표현했습니다.",
    images: [
      "assets/img/portfolio/design/portfolio-details-16.png",
      "assets/img/portfolio/design/portfolio-details-17.png",
      "assets/img/portfolio/design/portfolio-details-18.png",
      "assets/img/portfolio/design/portfolio-details-19.png",
      "assets/img/portfolio/design/portfolio-details-20.png",
      "assets/img/portfolio/design/portfolio-details-21.png",
    ]
  },
  "5": {
    id: "5",
    category: "Design",
    title: "UI/UX디자인(앱/웹)",
    role: "기획 및 디자인100%",
    projectName: "UI/UX디자인(앱/웹)",
    client: "중앙대학교 시각디자인전공 인터랙션디자인",
    date: "2024.09~12",
    url: "https://www.figma.com/proto/RnudTzQVdHVJGVzHQw7jGa/%EC%9D%B8%ED%84%B0%EB%9E%99%EC%85%98-%EB%8C%80%ED%99%94%EB%A9%B4-%EC%A0%9C%EC%B6%9C%EC%9A%A9?page-id=0%3A1&node-id=3-44&node-type=frame&viewport=243%2C292%2C0.15&t=7OiT37juDJYvcHsm-1&scaling=min-zoom&content-scaling=fixed",
    intro: "AR 기반 영화촬영지투어 앱/웹 UIUX디자인",
    description: "Figma를 활용한 반응형 UI/UX 디자인을 하였습니다.",
    images: [
      "assets/img/portfolio/design/UIUX2.png",
      "assets/img/portfolio/design/UIUX6.png",
      "assets/img/portfolio/design/UIUX1.png",
      "assets/img/portfolio/design/UIUX0.png",
      "assets/img/portfolio/design/UIUX4.png",
      "assets/img/portfolio/design/UIUX5.png",
      "assets/img/portfolio/design/UIUX3.png",
      "assets/img/portfolio/design/UIUX7.png",
    ]
  },
  "6": {
    id: "6",
    category: "Tech",
    title: "Dark Circle",
    role: "프론트엔드 개발",
    projectName: "Dark Circle",
    client: "멋쟁이사자처럼 12기 아이디어톤 ",
    date: "2024.05~06",
    url: "https://github.com/LikeLion-CAU-12th-Hackathon-Team1/Front-End",
    intro: "시청 시간 인지 서비스 ‘Dark Circle’ 프론트엔드 개발",
    description: "GitHub, Figma, Notion을 활용하여 스마트폰 중독 예방 UX를 설계하고, 프론트엔드 구조와 뷰를 구현하였습니다.",
    images: [
      "assets/img/portfolio/tech/Dark0.png",
      "assets/img/portfolio/tech/Dark8.png",
      "assets/img/portfolio/tech/Dark9.png",
      "assets/img/portfolio/tech/Dark10.png",
      "assets/img/portfolio/tech/Dark11.png",
      "assets/img/portfolio/tech/Dark12.png",
      "assets/img/portfolio/tech/Dark13.png",
      "assets/img/portfolio/tech/Dark14.png",
      "assets/img/portfolio/tech/Dark15.png"
    ]
  },
  "8": {
    id: "8",
    category: "Tech",
    title: "쓸애기통",
    role: "기획 및 프론트엔드 개발",
    projectName: "쓸애기통",
    client: "멋쟁이사자처럼 12기 중커톤",
    date: "2024.12",
    url: "https://github.com/trashkcan/trashkcan-front",
    intro: "SNS 기반 온라인 롤링페이퍼 ‘쓸애기통’ 프론트 구현",
    description: "MZ세대를 타겟으로 한 가벼운 감정 공유 서비스로, 유저 별 링크를 통해 롤링페이퍼를 남기고 공유하는 기능을 구현했습니다.",
    images: [
      "assets/img/portfolio/tech/내쓰통00.png",
      "assets/img/portfolio/tech/내쓰통01.png",
      "assets/img/portfolio/tech/내쓰통02.png",
      "assets/img/portfolio/tech/내쓰통03.png",
      "assets/img/portfolio/tech/내쓰통04.png",
      "assets/img/portfolio/tech/내쓰통05.png",
      "assets/img/portfolio/tech/내쓰통06.png",
      "assets/img/portfolio/tech/내쓰통07.png",
      "assets/img/portfolio/tech/내쓰통08.png",
      "assets/img/portfolio/tech/내쓰통09.png"
    ]
  },
  "9": {
    id: "9",
    category: "Tech",
    title: "Unity : 에스파 도깨비불 MV 제작",
    role: "과거part",
    projectName: "Unity : 에스파 도깨비불 MV 제작",
    client: "게임엔진1 팀과제",
    date: "2024.10",
    url: "#",
    intro: "에스파의 도깨비불 MV를 Unity로 구현",
    description: "과거와 미래의 공간을 배경으로, 1인칭 컨트롤러를 구현하고 카메라 트래킹과 움직임을 제작했습니다. 생성형AI를 활용하여 동양화 그림체를 구현하였습니다.",
    images: [
      "assets/img/portfolio/tech/도깨비불00.png",
      "assets/img/portfolio/tech/도깨비불01.png",
      "assets/img/portfolio/tech/도깨비불02.png"
    ]
  },
  "11": {
    id: "11",
    category: "Tech",
    title: "AR전시 ‘Null:01’ 총괄 및 개발",
    role: "팀리더 및 총괄개발",
    projectName: "Null:01",
    client: "캡스톤 프로젝트1",
    date: "2024.09~12",
    url: "#",
    intro: "관람객 상호작용형 AR전시 ‘Null:01’ 기획 및 개발",
    description: "사용자가 입력한 텍스트로 캐릭터를 생성하고 대화할 수 있도록 Meshy API, OpenAI API를 연결하였고, 전시 공간에 AR 인터랙션으로 구현하였습니다.",
    images: [
      "assets/img/portfolio/tech/Null00.png",
      "assets/img/portfolio/tech/Null01.png",
      "assets/img/portfolio/tech/Null03.png"
    ]
  },
  "10": {
    id: "10",
    category: "Film",
    title: "구룡성채 컨셉 필름",
    role: "1인 제작",
    projectName: "구룡성채 컨셉필름",
    client: "게임엔진2 과제",
    date: "2025.04",
    url: "https://youtu.be/agOvlk3NEYg",
    intro: "1980년 홍콩 내 위험하고 불가사의했던 무법지대. 구룡성채 철거 전 날, 그는 마지막을 받아들일까 저항할까",
    description: "‘1980년 홍콩 내 위험하고 불가사의했던 무법지대. 구룡성채 철거 전 날, 그는 마지막을 받아들일까 저항할까’로 시작된 상상에 기반한 필름입니다. 홍콩 구룡성채의 철거 전 빛나지만 쓸쓸한 분위기를 보여주는 레벨디자인을 하였습니다. 마지막을 고민하는 남자의 시선을 담기 위해 좁고 낮은 골목 위로 보이는 비행기, 수직으로 내려가는 카메라 무빙, 흔들리는 계단씬 등을 연출했습니다.",
    images: [
      "assets/img/portfolio/film/구룡성채01.png",
      "assets/img/portfolio/film/구룡성채02.png",
      "assets/img/portfolio/film/구룡성채03.png"
    ]
  },
  "12": {
    id: "12",
    category: "Tech",
    title: "졸업전시 '상상'",
    role: "아트필름 30%",
    projectName: "예술공학부2025 졸업전시",
    client: "중앙대학교 예술공학부",
    date: "2025.03~",
    url: "https://youtu.be/QOoHgKZX7JE",
    intro: "졸업전시를 위한 미디어아트 기획 및 제작",
    description: "생성형 AI, TouchDesigner, 키넥틱센서를 활용한 실시간 반응형 미디어아트를 기획 중이며, 메인 아트필름은 Midjourney, Runway, Firefly, KlingAI 등을 통해 제작되었습니다.",
    images: [
      "assets/img/portfolio/film/상상00.png",
      "assets/img/portfolio/film/전시장0.png",
      "assets/img/portfolio/film/전시장1.png",
      "assets/img/portfolio/film/상상1.png",
      "assets/img/portfolio/film/상상2.png",
      "assets/img/portfolio/film/상상3.png",
      "assets/img/portfolio/film/상상4.png",
      "assets/img/portfolio/film/상상5.png",
      "assets/img/portfolio/film/상상6.png"
    ]
  },
  "7": {
  id: "7",
  category: "Tech",
  title: "Workvalley",
  role: "프론트엔드 개발",
  projectName: "Workvalley",
  client: "중앙대학교 멋쟁이사자처럼 12기 해커톤",
  date: "2024.07-08",
  url: "https://github.com/LikeLion-CAU-12th-Hackathon-Team1/Front-End",
  intro: "워케이션을 떠난 프리랜서를 위한 맞춤형 워라밸 파트너 서비스",
  description: "프리랜서들이 일과 삶의 균형을 찾기 위한 여행을 다니며, 일정 관리와 맞춤 매칭 서비스를 통해 최적의 워케이션 장소를 추천하는 웹서비스를 기획 및 개발했습니다. 저는 프론트엔드 개발자로 참여하여 전체 UI 구현과 기능 개발을 담당했습니다.",
  images: [
    "assets/img/portfolio/tech/workvalley00.png",
    "assets/img/portfolio/tech/workvalley01.png",
    "assets/img/portfolio/tech/workvalley02.png",
    "assets/img/portfolio/tech/workvalley03.png",
    "assets/img/portfolio/tech/workvalley04.png",
    "assets/img/portfolio/tech/workvalley05.png",
    "assets/img/portfolio/tech/workvalley06.png",
    "assets/img/portfolio/tech/workvalley07.png",
    "assets/img/portfolio/tech/workvalley08.png"
  ]
},
"13": {
  id: "13",
  category: "Design",
  title: "보이넥스트도어 성호_노장르 포스터",
  role: "포스터 디자인",
  projectName: "보이넥스트도어 성호_노장르 포스터",
  client: "개인 프로젝트",
  date: "2025.05",
  url: "https://pin.it/7FANdwP1j",
  intro: "보이넥스트도어 성호_노장르 포스터",
  description: "포토샵, 일러스트 연습을 위해 보이넥스트성호 [No Genre] 포스터를 작업했습니다.",
  images: [
    "assets/img/portfolio/design/성호노장르포스터.jpg"
  ]
}, 
"14": {
  id: "14",
  category: "Design",
  title: "동아리 단체티셔츠 디자인",
  role: "단체티 디자인",
  projectName: "동아리 단체티셔츠 디자인",
  client: "중앙대학교 테니스동아리 C.A.T",
  date: "2025.05",
  url: "#",
  intro: "중앙대학교 테니스동아리 C.A.T 단체티셔츠 디자인",
  description: "중앙대학교 테니스 동아리 C.A.T 단체티셔츠 디자인, 일러스트 작업",
  images: [
    "assets/img/portfolio/design/티셔츠목업.png",
    "assets/img/portfolio/design/고양이최종로고.png",
    "assets/img/portfolio/design/테니스2.jpg",
  ]
},  
"15": {
  id: "15",
  category: "Film",
  title: "자기소개 영상",
  role: "100%",
  projectName: "예술공학개론 자기소개 영상",
  client: "예술공학개론 과제",
  date: "2024.04",
  url: "https://youtu.be/WHuGbrkdLJI?si=idZkXRXrtZ8u6-pV",
  intro: "중앙대학교 예술공학개론 자기소개 영상",
  description: "중앙대학교 예술공학부 예술공학개론 자기소개 영상과제, Vllo를 이용해 편집하였습니다.",
  images: [
    "assets/img/portfolio/film/예공개자기소개썸네일.png",
    "assets/img/portfolio/film/예공개1.png",
    "assets/img/portfolio/film/예공개2.png",
    "assets/img/portfolio/film/예공개3.png",
    "assets/img/portfolio/film/예공개4.png",
  ]
}, 
"16": {
  id: "16",
  category: "Film",
  title: "리투아니아 브이로그",
  role: "개인 유튜브",
  projectName: "리투아니아 교환 브이로그",
  client: "개인 유튜브 채널",
  date: "2025. 01",
  url: "https://youtu.be/QGovZFgOhOI?si=S5tWV0ZHr-_5hKWC",
  intro: "리투아니아 교환 브이로그 ep.1",
  description: "겨울방학 단기파견으로 리투아니아에 온 후 첫 주말. 소셜클래스 과제로 올드타운에 있는 Mint Vinetu와 Užupis(우주피스 공화국)에 다녀왔습니다.🏠 브이로그 편집을 해보며 컷 편집의 템포와 자막 활용 등을 연습했습니다.(프리미어프로, 포토샵)",
  images: [
    "assets/img/portfolio/film/리투1.png",
    "assets/img/portfolio/film/리투2.png",
    "assets/img/portfolio/film/리투3.png",
    "assets/img/portfolio/film/리투4.png",
    "assets/img/portfolio/film/리투5.png",
    "assets/img/portfolio/film/리투6.png",
    "assets/img/portfolio/film/리투7.png",
    "assets/img/portfolio/film/리투0.png"
   
  ]
}  
};