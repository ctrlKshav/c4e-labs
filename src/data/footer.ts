import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const socialMedia = [
  { icon: Facebook, label: "Facebook", link: "/" },
  { icon: Twitter, label: "Twitter", link: "/" },
  { icon: Linkedin, label: "LinkedIn", link: "/" },
  { icon: Instagram, label: "Instagram", link: "/" },
] as const;

export const productLinks = [
  {
    name: "LegalDocs",
    href: "https://legaldocs-tau.vercel.app/",
  },
  {
    name: "Zeon",
    href: "https://gozeon.com/",
  },
  {
    name: "Resume AI Pro",
    href: "https://resume-site-c4e.vercel.app/",
  },
  {
    name: "All Products",
    href: "/products",
  },
] as const;

export const companyLinks = [
  {
    name: "About Us",
    href: "#about-us",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Community",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
] as const;
