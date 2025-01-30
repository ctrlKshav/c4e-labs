import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { skeletonOneVariants, skeletonOneVariantsSecond } from "@/config/motionConfig";

export const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Link to="/products/saas" className="relative aspect-square w-full overflow-hidden rounded-lg shadow-xl">
       <div className="h-full overflow-y-auto">

        <img
          src="/images/products/LegalDocs.webp"
          alt="Resume AI Pro"
          className="object-contain w-full"
          height={400}
          width={400}
          loading="lazy"
        />
      </div>
      </Link>

    </motion.div>
  );
};