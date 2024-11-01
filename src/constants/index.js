import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Store", "Mac", "iPad","Watch","TV & Home","AirPods","Accessories", "iPhone", "Support"];

  export const chapterLists = [
    {id: 1, title: 'iPhone 16 Pro', icon: '/assets/images/chapter/iphone_16_pro.svg', newStatus: true},
    {id: 2, title: 'iPhone 16', icon: '/assets/images/chapter/iphone_15.svg', newStatus: true},
    {id: 3, title: 'iPhone 15', icon: '/assets/images/chapter/iphone_15.svg', newStatus: false},
    {id: 4, title: 'iPhone 14', icon: '/assets/images/chapter/iphone_14.svg', newStatus: false},
    {id: 5, title: 'iPhone SE', icon: '/assets/images/chapter/iphone_se.svg', newStatus: false},
    {id: 6, title: 'Compare', icon: '/assets/images/chapter/iphone_compare.svg', newStatus: false},
    {id: 7, title: 'AirPods', icon: '/assets/images/chapter/airpods.svg', newStatus: true },
    {id: 8, title: 'AirTag', icon: '/assets/images/chapter/airtag.svg', newStatus: false},
    {id: 9, title: 'Accessories', icon: '/assets/images/chapter/accessories.svg', newStatus: false},
    {id: 10, title: 'Apple Card', icon: '/assets/images/chapter/iphone_card.svg', newStatus: false},
    {id: 11, title: 'iOS 18', icon: '/assets/images/chapter/iphone_ios.svg', newStatus: false},
    {id: 12, title: 'Shop iPhone', icon: '/assets/images/chapter/shop_iphone.svg', newStatus: false},

  ];
  
  export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Enter A17 Pro.",
        "Game‑changing chip.",
        "Groundbreaking performance.",
      ],
      video: highlightFirstVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: ["Titanium.", "So strong. So light. So Pro."],
      video: highlightSecondVideo,
      videoDuration: 5,
    },
    {
      id: 3,
      textLists: [
        "iPhone 15 Pro Max has the",
        "longest optical zoom in",
        "iPhone ever. Far out.",
      ],
      video: highlightThirdVideo,
      videoDuration: 2,
    },
    {
      id: 4,
      textLists: ["All-new Action button.", "What will yours do?."],
      video: highlightFourthVideo,
      videoDuration: 3.63,
    },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];