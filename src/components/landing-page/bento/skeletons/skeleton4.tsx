import type React from "react";
import { motion } from "framer-motion";
import { skeletonFourFirstVariants, skeletonFourMiddleVariants, skeletonFourSecondVariants } from "@/config/motionConfig";

interface SkeletonFourProps {
  leftIcon?: React.ReactNode;
  middleIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  title?: React.ReactNode;
}

export const SkeletonFour: React.FC<SkeletonFourProps> = ({ 
  leftIcon = <img src="/images/products/Tezi.webp" alt="TezPDF Logo" className="h-10 w-10" />, 
  middleIcon = <img src="/images/products/TeziB2B.webp" alt="Tezi-B2B Logo" className="h-10 w-10" />, 
  rightIcon = <img src="/images/products/WhatsappReminder1.webp" alt="Another Plugin Logo" className="h-10 w-10" />, // Replace with the correct image for the third plugin
  title = <img
    src="https://cdn.worldvectorlogo.com/logos/shopify.svg"
    alt="Shopify Logo"
    height="40"
    width="40"
    className="h-6 w-6"
  />
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-col w-full h-full min-h-[6rem]"
    >
      <motion.div className="flex flex-1 w-full h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
        {/* TezPDF: Product Catalogues */}
        <motion.div
          variants={skeletonFourFirstVariants}
          className="h-full w-1/3 rounded-2xl bg-primary p-4 dark:bg-black dark:border-white/[0.1] shadow-xl border border-black flex flex-col items-center justify-center"
        >
          <div className="h-10 w-10 mb-2 flex items-center justify-center">
            {leftIcon}
          </div>
          <p className="text-xs sm:text-sm text-center font-semibold text-background flex-grow flex items-center">
            Create tailor-made product catalogues with customizable layouts and branding options.
          </p>
          <p className=" bg-lime-400 dark:bg-cyan-900/20 text-gray-900 text-xs sm:text-sm rounded-full px-2 py-0.5 mt-2">
            <a href="https://apps.shopify.com/pdf-catalog" target="_blank" rel="noopener noreferrer">
              TezPDF
            </a>
          </p>
        </motion.div>

        {/* Tezi-B2B */}
        <motion.div
          variants={skeletonFourMiddleVariants}
          className="h-full relative z-20 w-1/3 rounded-2xl bg-primary p-4 dark:bg-black dark:border-white/[0.1] shadow-xl border border-black flex flex-col items-center justify-center"
        >
          <div className="h-10 w-10 mb-2 flex items-center justify-center">
            {middleIcon}
          </div>
          <p className="text-xs sm:text-sm text-center font-semibold text-background flex-grow flex items-center">
            Streamline B2B customer onboarding with customizable signup forms and easy customer management.
          </p>
          <p className=" bg-purple-400 dark:bg-violet-900/20 text-gray-900 text-xs sm:text-sm rounded-full px-2 py-0.5 mt-2">
            <a href="https://apps.shopify.com/tezi-b2b" target="_blank" rel="noopener noreferrer">
              Tezi-B2B
            </a>
          </p>
        </motion.div>

        {/* Another Plugin (Assuming similar structure) */}
        <motion.div
          variants={skeletonFourSecondVariants}
          className="h-full w-1/3 rounded-2xl bg-primary p-4 dark:bg-black dark:border-white/[0.1] shadow-xl border border-black flex flex-col items-center justify-center"
        >
          <div className="h-10 w-10 mb-2 flex items-center justify-center">
            {rightIcon}
          </div>
          <p className="text-xs sm:text-sm text-center font-semibold text-background flex-grow flex items-center">
            Add a WhatsApp chat button to your store, enabling direct customer communication.
          </p>
          <p className=" bg-yellow-400 dark:bg-purple-900/20 text-gray-900 text-xs sm:text-sm rounded-full px-2 py-0.5 mt-2">
            <a href="https://apps.shopify.com/whatsapp-chat-button-4" target="_blank" rel="noopener noreferrer">
              ChatMe
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
