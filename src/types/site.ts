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