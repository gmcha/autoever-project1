export interface EducationItem {
  id: number;
  period: string;
  school: string;
  major: string;
  descriptions: string[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 1,
    period: "2021-2026",
    school: "한국대학교",
    major: "ABCD 전공, EFGHIJK 복수전공",
    descriptions: [
      "이러이러한 것들을 배우고 이러이러한 것들 학습!",
      "어쩌구저쩌구 학습",
    ],
  },
  {
    id: 2,
    period: "2019-2021",
    school: "현토에버고등학교",
    major: "",
    descriptions: [],
  },
];

export interface CertificationItem {
  id: number;
  date: string;
  name: string;
  grade: string;
}

export const CERTIFICATION_DATA: CertificationItem[] = [
  { id: 1, date: "2024.03.19", name: "OPIc", grade: "Intermediate HIGH" },
  { id: 2, date: "2024.03.19", name: "TOEIC", grade: "990 점" },
];

export interface ExterActivityItem {
  id: number;
  period: string;
  title: string;
  role: string;
  descriptions: string[];
}

export const EXTERACTIVITY_DATA: ExterActivityItem[] = [
  {
    id: 1,
    period: "2025 - 현재",
    title: "현대오토에버 모빌리티 SW 스쿨",
    role: "웹/앱 개발 과정",
    descriptions: ["이렇고 저렇고 이런 저런 내용을 배움"],
  },
  {
    id: 2,
    period: "2024 - 2025",
    title: "현대오토에버",
    role: "ABCD팀, Frontend-Engineer",
    descriptions: ["이렇고 저렇고 이렇고 저런 업무를 담당"],
  },
  {
    id: 3,
    period: "2024 - 2025",
    title: "현대오토에버",
    role: "ABCD팀, Frontend-Engineer",
    descriptions: ["이렇고 저렇고 이렇고 저런 업무를 담당"],
  },
];
