"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import React from "react";

import { cn } from "@/lib/utils";

const css = `
.candy-bg {
    background-color: hsla(164, 26%, 48%, 0.02);
    background-image: linear-gradient(
      135deg,
      hsla(164, 26%, 48%, 0.05) 25%,
      transparent 25.5%,
      transparent 50%,
      hsla(164, 26%, 48%, 0.05) 50.5%,
      hsla(164, 26%, 48%, 0.05) 75%,
      transparent 75.5%,
      transparent
    );
    background-size: 10px 10px;
  }
  
  .dark .candy-bg {
    background-color: hsla(164, 26%, 48%, 0.05);
    background-image: linear-gradient(
      135deg,
      hsla(164, 26%, 48%, 0.1) 25%,
      transparent 25.5%,
      transparent 50%,
      hsla(164, 26%, 48%, 0.1) 50.5%,
      hsla(164, 26%, 48%, 0.1) 75%,
      transparent 75.5%,
      transparent
    );
  }
`;

const Stats = () => {
  return (
    <section className="py-32 bg-background font-sans">
      <style>{css}</style>
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-tight">
            We don't believe in talk, <br/> <span className="text-primary">we Deliver Results</span>
          </h2>
          <p className="mt-4 md:mt-6 text-muted-foreground text-xs md:text-lg uppercase tracking-widest font-light opacity-80">
            Precision, Safety, and Operational Excellence measured in data.
          </p>
        </div>
        
        <div className="relative mx-auto mt-10 md:mt-20 flex h-64 md:h-96 max-w-4xl items-center justify-center gap-2 md:gap-4">
          {[
            { value: 92, label: "PRECISION RATE", delay: 0.2 },
            { value: 100, label: "SAFETY SCORE", className: "bg-primary text-background", showToolTip: true, delay: 0.4 },
            { value: 85, label: "SPEED INDEX", delay: 0.6 },
            { value: 98, label: "CLIENT TRUST", delay: 0.8 },
          ].map((props, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                damping: 12,
              }}
              className="h-full w-full"
            >
              <BarChart {...props} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Stats };

const BarChart = ({
  value,
  label,
  className = "",
  showToolTip = false,
  delay = 0,
}: {
  value: number;
  label: string;
  className?: string;
  showToolTip?: boolean;
  delay?: number;
}) => {
  return (
    <div className="group relative h-full w-full flex flex-col items-center">
      <div className="candy-bg relative h-full w-full overflow-hidden rounded-2xl border border-border/10">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, type: "spring", damping: 20, delay }}
          className={cn(
            "absolute bottom-0 mt-auto w-full bg-primary/20 p-2 text-foreground flex flex-col justify-end items-center",
            className,
          )}
        >
          <div className="relative flex w-full items-center justify-center font-black text-2xl md:text-3xl mb-4">
            <NumberFlow value={value} suffix="%" />
          </div>
        </motion.div>
      </div>

      {showToolTip && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 text-background text-xs font-bold uppercase tracking-widest rounded-none whitespace-nowrap"
        >
          Industry Leader
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45" />
        </motion.div>
      )}
      
      <p className="mt-4 text-[8px] md:text-xs font-bold tracking-wider md:tracking-[0.2em] text-muted-foreground uppercase text-center">
        {label}
      </p>
    </div>
  );
};
