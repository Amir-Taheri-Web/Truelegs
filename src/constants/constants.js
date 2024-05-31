import shoe1 from "@/public/images/big-shoe1.png";
import shoe2 from "@/public/images/big-shoe2.png";
import shoe3 from "@/public/images/big-shoe3.png";

import shoe4 from "@/public/images/shoe4.svg";
import shoe5 from "@/public/images/shoe5.svg";
import shoe6 from "@/public/images/shoe6.svg";
import shoe7 from "@/public/images/shoe7.svg";

const HEADER_LINKS = ["Home", "About Us", "Products", "Contact Us"];

const STATISTICS = [
  { amount: "1k+", label: "Brands" },
  { amount: "500+", label: "Shops" },
  { amount: "250k+", label: "Customers" },
];

const HERO_SHOES = [
  { url: shoe1, alt: "shoe 1" },
  { url: shoe2, alt: "shoe 2" },
  { url: shoe3, alt: "shoe 3" },
];

const POPULAR_SHOES = [
  { image: shoe4, rating: 4.5, title: "Nike Air Jordan-01", price: 200.8 },
  { image: shoe5, rating: 4.8, title: "Nike Air Jordan-10", price: 130.1 },
  { image: shoe6, rating: 3.7, title: "Nike Air Jordan-100", price: 380.4 },
  { image: shoe7, rating: 3.5, title: "Nike Air Jordan-101", price: 520.5 },
];

export { HEADER_LINKS, STATISTICS, HERO_SHOES, POPULAR_SHOES };
