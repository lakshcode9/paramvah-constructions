"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function CinematicSwitch() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // After mounting, we have access to the theme
    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return <div className="w-[104px] h-[32px] rounded-2xl bg-zinc-900/50" />; 
    }

    const isOn = theme === 'dark';

    const toggleTheme = () => {
        setTheme(isOn ? 'light' : 'dark');
    };

    return (
        <div
            className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm shadow-xl cursor-pointer"
            onClick={toggleTheme}
            role="switch"
            aria-checked={isOn}
            aria-label="Toggle theme"
        >
            {/* 'OFF' Label (Light Mode) */}
            <span className={cn(
                "hidden md:block text-[10px] font-bold tracking-wider transition-colors duration-300",
                !isOn ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" : "text-zinc-500"
            )}>
                LIGHT
            </span>

            {/* Switch Track */}
            <motion.div
                className="relative w-12 h-6 rounded-full shadow-inner"
                initial={false}
                animate={{
                    backgroundColor: isOn ? "hsl(var(--primary))" : "#27272a", 
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Switch Thumb */}
                <motion.div
                    className="absolute top-0.5 left-0.5 w-[20px] h-[20px] rounded-full border border-white/10 shadow-md"
                    initial={false}
                    animate={{
                        x: isOn ? 24 : 0,
                        backgroundColor: isOn ? "hsl(var(--background))" : "#52525b",
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {/* Thumb Highlight (Gloss) */}
                    <div className="absolute top-0.5 left-1 w-2 h-1 bg-white/30 rounded-full blur-[1px]" />
                </motion.div>
            </motion.div>

            {/* 'ON' Label (Dark Mode) */}
            <span className={cn(
                "hidden md:block text-[10px] font-bold tracking-wider transition-colors duration-300",
                isOn ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]" : "text-zinc-500"
            )}>
                DARK
            </span>
        </div>
    );
};
