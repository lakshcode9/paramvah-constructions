"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function OpeningAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check session storage to run only once per session
    const hasRun = sessionStorage.getItem("paramvah_intro_shown");
    if (hasRun) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("paramvah_intro_shown", "true");
    }, 2500); // Shorter, punchier intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative w-24 h-24 mb-6">
              <Image
                src="/logo-bg-removed.png"
                alt="Paramvah Logo"
                fill
                className="object-contain dark:invert dark:brightness-0 dark:filter" 
                priority
              />
            </div>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold text-foreground tracking-[0.2em] uppercase"
            >
              PARAMVAH
            </motion.h1>
             <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-primary font-bold tracking-[0.3em] text-sm mt-4 uppercase text-center"
            >
              We construct your dreams
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
