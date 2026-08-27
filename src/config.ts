import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://mawalidmasrgang.org/",
  author: "Ahmad Fathallah",
  desc: "Mawalid Masr Gang — Indonesians and other Asians born in Egypt. Hangouts, celebrations, and knowledge-sharing.",
  title: "MMG",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
];
