import { SidebarLink, TopQuestions, PopularTags } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const popularTags: PopularTags[] = [
  {
    route: "/tag-1",
    tag: "nextjs",
    tagNum: 21,
  },
  {
    route: "/tag-2",
    tag: "test",
    tagNum: 15,
  },
  {
    route: "/tag-3",
    tag: "react",
    tagNum: 13,
  },
  {
    route: "/tag-4",
    tag: "css",
    tagNum: 10,
  },
  {
    route: "/tag-5",
    tag: "next js",
    tagNum: 8,
  },
];

export const topQuestions: TopQuestions[] = [
  {
    route: "/question-1",
    label: "Is it only me or the font is bolder than necessary?",
  },
  {
    route: "/question-2",
    label:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
  },
  {
    route: "/question-3",
    label: "Can I get the course for free?",
  },
  {
    route: "/question-4",
    label: "Redux Toolkit Not Updating State as Expected",
  },
  {
    route: "/question-5",
    label: "Async/Await Function Not Handling Errors Properly",
  },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
