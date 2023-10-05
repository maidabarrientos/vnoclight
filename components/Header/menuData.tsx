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
    title: "Features",
    newTab: false,
    path: "/#features"
  },  
  {
    id: 2.1,
    title: "Use Cases",
    newTab: false,
    path: "/use_cases"
  },
  {
    id: 2.2,
    title: "Why VNOC",
    newTab: false,
    path: "/why"
  },
  {
    id: 3,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Build",
        newTab: false,
        path: "/build",
      },
      {
        id: 34,
        title: "Sell",
        newTab: false,
        path: "/sell",
      },
      {
        id: 35,
        title: "Partner",
        newTab: false,
        path: "/partner",
      },
      {
        id: 35,
        title: "Lease",
        newTab: false,
        path: "/lease",
      },
      {
        id: 35.1,
        title: "Contribution Network",
        newTab: false,
        path: "/contribution",
      },
      {
        id: 36,
        title: "Blockchain Assets",
        newTab: false,
        path: "/blockchain",
      },
    ],
  },

  {
    id: 4,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Our Story",
        newTab: false,
        path: "/our_story",
      },
     
      {
        id: 35,
        title: "Blog",
        newTab: false,
        path: "https://about.vnoc.com",
      },
      {
        id: 35,
        title: "Support",
        newTab: false,
        path: "https://vnoc.tawk.help",
      },
      {
        id: 35.1,
        title: "Partner with Us",
        newTab: false,
        path: "https://domaindirectory.com/servicepage/?domain=vnoc.com",
      },      
    ],
  },
];

export default menuData;
