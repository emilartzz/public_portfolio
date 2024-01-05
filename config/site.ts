export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Emil Warelius",
  description:
    "Software Engineer from Sweden that builds things for the web.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/emilartzz",
    linkedin: "https://www.linkedin.com/in/warelius/",
    projects: "/projects"
  },
}
