import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Features",
        description: "Traffic, offers, trademarks and builds in one toolkit",
        icon: "grid",
        newTab: false,
        path: "/#tools",
      },
      {
        id: 22,
        title: "Use Cases",
        description: "The screens we use to run 20,000+ domains",
        icon: "layers",
        newTab: false,
        path: "/use_cases",
      },
      {
        id: 23,
        title: "Why VNOC",
        description: "What domain investors get from the platform",
        icon: "spark",
        newTab: false,
        path: "/why",
      },
    ],
  },

  {
    id: 3,
    title: "Services",
    newTab: false,
    path: "/services"
  },

  {
    id: 4,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Our Story",
        description: "How our own portfolio tools became VNOC",
        icon: "book",
        newTab: false,
        path: "/our_story",
      },
      {
        id: 42,
        title: "Blog",
        description: "News and notes from the team",
        icon: "pen",
        newTab: false,
        path: "https://about.vnoc.com",
      },
      {
        id: 44,
        title: "Support",
        description: "Talk to the team about your account",
        icon: "lifebuoy",
        newTab: false,
        path: "/support",
      },
      {
        id: 45,
        title: "Partner with Us",
        description: "Work with VNOC on a domain or venture",
        icon: "link",
        newTab: false,
        path: "https://domaindirectory.com/servicepage/?domain=vnoc.com",
      },
    ],
  },
];

export default menuData;
