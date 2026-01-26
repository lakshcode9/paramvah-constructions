"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time or asset readiness
    // For a "cinematic" feel, we want it to linger just enough to see the logo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds total duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Custom easing for "heavy curtain" feel
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-48 h-48 md:w-64 md:h-64"
            >
               <Image
                  src="/logo-new.png"
                  alt="Paramvah Constructions"
                  fill
                  className="object-contain"
                  priority
               />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-primary font-bold tracking-[0.25em] text-xs md:text-sm uppercase text-center mt-2"
            >
              We construct your dreams
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
