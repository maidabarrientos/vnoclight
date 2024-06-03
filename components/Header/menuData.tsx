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
        newTab: false,
        path: "/#build",
      },
      {
        id: 22,
        title: "Use Cases",
        newTab: false,
        path: "/use_cases",
      },
      {
        id: 23,
        title: "Why VNOC",
        newTab: false,
        path: "/why",
      },
      
    ],
  },
  
  {
    id: 3,
    title: "Pricing",
    newTab: true,
    path: "https://services.vnoc.com"
  },


  {
    id: 4,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Our Story",
        newTab: false,
        path: "/our_story",
      },
     
      {
        id: 42,
        title: "Blog",
        newTab: false,
        path: "https://about.vnoc.com",
      },
      {
        id: 43,
        title: "Knowledge Base",
        newTab: false,
        path: "https://vnoc.tawk.help",
      },
      {
        id: 44,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 45,
        title: "Partner with Us",
        newTab: false,
        path: "https://domaindirectory.com/servicepage/?domain=vnoc.com",
      },      
    ],
  },
];

export default menuData;
