import type { IconType } from "react-icons";

export type Service = {
  title: string;
  text: string;
  icon: IconType;
};

export type Step = {
  title: string;
  text: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
export type RecentWorkMedia = {
  eyebrow: string;
  title: string;
  text: string;
  images: {
    src: string;
    alt: string;
    label: string;
  }[];
  videos?: {
    src: string;
    poster: string;
    label: string;
  }[];
};
