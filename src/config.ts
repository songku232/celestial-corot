export const SITE = {
  website: "https://celestial-corot.vercel.app/", // 배포 후 실제 주소
  author: "Song (0xElionah)",
  profile: "https://github.com/", // 원하면 SNS/깃허브 링크로 교체
  desc: "0xElionah :: deploy_light --mode sentinel",
  title: "0xElionah",
  ogImage: "astropaper-og.jpg", // 기본 og 이미지 그대로 둬도 OK
  lightAndDarkMode: true, // 다크/라이트 모드 지원
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15분
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "수정하기", // 한글화
    url: "https://github.com/songku232/celestial-corot/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // 왼쪽→오른쪽 정렬
  lang: "ko", // 한국어로 변경
  timezone: "Asia/Seoul", // 한국 표준시
} as const;
