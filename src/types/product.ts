import { ReactNode } from "react";

export interface ProductInterface {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
  themeColor?: string; 
  features: {
    title: string;
    items: string[];
  }[];
  link?: string; 
  imageSrc?: string;
}
