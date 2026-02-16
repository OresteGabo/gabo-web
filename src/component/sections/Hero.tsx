"use client";
import React from "react";
import {motion, useReducedMotion, Variants} from "framer-motion";
import { Zap, ArrowRight, Terminal } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { EngineeringCore } from "@/component/sections/EngineeringCore";

export const Hero = () => {
    const shouldReduceMotion = useReducedMotion();
    // Unified fade-up variant
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };
    const coreEnter: Variants = {
        hidden: shouldReduceMotion
            ? { y: 0, scale: 1 }
            : { y: 24, scale: 0.98 },
        show: shouldReduceMotion
            ? { y: 0, scale: 1 }
            : {
                y: 0,
                scale: 1,
                transition: {
                    type: "spring",
                    stiffness: 160,
                    damping: 22,
                    mass: 0.9,
                },
            },
    };

    return (
        <section className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-screen flex items-center overflow-hidden">

            {/* Background floating blur */}
            <motion.div
                animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[140px] rounded-full pointer-events-none"
            />

            <div className="grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">

                {/* LEFT CONTENT */}
                <div className="flex flex-col">

                    {/* Badge */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        className="flex items-center gap-2 mb-6"
                    >
                        <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-2">
                            <Terminal size={14} className="text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Deployment Ready
              </span>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.1 }}
                        /* Changed text-6xl/8xl to text-4xl/6xl */
                        className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] md:leading-[1.0]"
                    >
                        We build the <br />
                        <span className="text-primary">Tech.</span><br />
                        <span className="text-on-surface-variant/60">You build the</span><br />
                        Future.
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.2 }}
                        className="text-on-surface-variant text-lg md:text-xl max-w-lg leading-relaxed my-10 font-medium"
                    >
                        {SITE_CONFIG.description}
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-6 items-center"
                    >
                        {/* Primary Button */}
                        <motion.button
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 260 }}
                            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black shadow-xl flex items-center gap-3"
                        >
                            Start Implementation
                            <motion.span
                                whileHover={{ x: 6 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <ArrowRight size={20} />
                            </motion.span>
                        </motion.button>

                        {/* Info block */}
                        <motion.div
                            whileHover={{ y: -3 }}
                            className="flex items-center gap-4 px-6 py-5 border border-outline-variant rounded-2xl bg-surface-container/60 backdrop-blur-xl"
                        >
                            <Zap className="text-primary" size={20} />
                            <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                  System Version
                </span>
                                <span className="text-sm font-black">
                  Infrastructure v2.6
                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* RIGHT — EngineeringCore with ONLY opacity fade */}
                <motion.div
                    variants={coreEnter}
                    initial="hidden"
                    animate="show"
                    className="w-full relative will-change-transform"
                >
                    <EngineeringCore />
                </motion.div>

            </div>
        </section>
    );
};
