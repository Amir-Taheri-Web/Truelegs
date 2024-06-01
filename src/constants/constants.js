import shoe1 from "@/public/images/big-shoe1.png";
import shoe2 from "@/public/images/big-shoe2.png";
import shoe3 from "@/public/images/big-shoe3.png";

import shoe4 from "@/public/images/shoe4.svg";
import shoe5 from "@/public/images/shoe5.svg";
import shoe6 from "@/public/images/shoe6.svg";
import shoe7 from "@/public/images/shoe7.svg";

import truck from "@/public/icons/truck-fast.svg";
import shield from "@/public/icons/shield-tick.svg";
import support from "@/public/icons/support.svg";

import customer1 from "@/public/images/customer1.jpeg";
import customer2 from "@/public/images/customer2.svg";

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

const SERVICES = [
  {
    icon: truck,
    title: "Free shipping",
    description:
      "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    icon: shield,
    title: "Secure payment",
    description:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    icon: support,
    title: "Love to help you",
    description:
      "Our dedicated team is here to assist you every step of the way.",
  },
];

const CUSTOMERS = [
  {
    avatar: customer1,
    name: "Morich Brown",
    rating: 4.9,
    description:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    avatar: customer2,
    name: "Lota Mongeskar",
    rating: 4.6,
    description:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export {
  HEADER_LINKS,
  STATISTICS,
  HERO_SHOES,
  POPULAR_SHOES,
  SERVICES,
  CUSTOMERS,
};
