"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

const PageWrapper = ({ children }) => {
  const pathname = usePathname();

  const boxes = [
    {
      id: 1,
      key: pathname,
      initial: { x: "0", },
      animate: { x: "-100%", },
      transition: { delay: 0.3, duration: 0.75, ease: "easeOut" },
      exit: { x: "100%", opacity: 0 }
    },
    {
      id: 2,
      key: pathname,
      initial: { x: "0", },
      animate: { x: "-100%", },
      transition: { delay: 0.2, duration: 0.75, ease: "easeOut" },
      exit: { x: "100%", opacity: 0 }
    },
    {
      id: 3,
      key: pathname,
      initial: { x: "0", },
      animate: { x: "-100%", },
      transition: { duration: 0.75, ease: "easeOut" },
      exit: { x: "100%", opacity: 0 }
    },
  ]

  return (
    <>
      <AnimatePresence mode='wait'>
        {
          boxes.map(box => {
            return (
              <motion.div
                key={box.pathname}
                initial={box.initial}
                animate={box.animate}
                transition={box.transition}
                exit={box.exit}
                className="relative"
              >
                <div className="w-full h-[300px] bg-[var(--secondary-tint-70)]">
                </div>
              </motion.div>
            )
          })
        }

        <motion.div
          key={pathname}
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{ delay: 0.75, duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1, }}
        >
          <div className="w-full h-full absolute top-0 -z-1">
            <div className="container py-4">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
};

export default PageWrapper;