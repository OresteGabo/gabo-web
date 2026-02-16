"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

import {ENGINEERING_CARDS} from "@/lib/constants";


export const EngineeringCore = () => {
    const [index, setIndex] = useState(0);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    // RESTORED: Auto-rotation refs
    const isIdle = useRef(true);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const springConfig = { damping: 30, stiffness: 100 };
    const rotateX = useSpring(useTransform(my, [-500, 500], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mx, [-500, 500], [-15, 15]), springConfig);

    const next = () => setIndex((i) => (i + 1) % ENGINEERING_CARDS.length);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mx.set(e.clientX - window.innerWidth / 2);
            my.set(e.clientY - window.innerHeight / 2);
        };

        window.addEventListener("mousemove", move);

        // RESTORED: Automatic cycling logic
        autoPlayRef.current = setInterval(() => {
            if (isIdle.current) {
                next();
            }
        }, 4000); // Changes every 4 seconds

        return () => {
            window.removeEventListener("mousemove", move);
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, []);

    return (
        <div className="relative w-full h-[700px] flex items-center justify-center [perspective:2000px] overflow-visible">

            {/* Focal Point Glow */}
            <div className="absolute w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-[340px] h-[450px] flex items-center justify-center"
            >
                <AnimatePresence mode="popLayout">
                    {ENGINEERING_CARDS.map((card, i) => {
                        const isActive = i === index;
                        const relIndex = (i - index + ENGINEERING_CARDS.length) % ENGINEERING_CARDS.length;
                        const Icon = card.Icon;

                        return (
                            <motion.div
                                key={card.title}
                                drag
                                dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                                onDragStart={() => (isIdle.current = false)}
                                onDragEnd={(e, info) => {
                                    isIdle.current = true;
                                    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) next();
                                }}
                                onMouseEnter={() => (isIdle.current = false)}
                                onMouseLeave={() => (isIdle.current = true)}
                                initial={{ opacity: 0, scale: 0.8, z: -200 }}
                                animate={{
                                    opacity: 1,
                                    x: isActive ? 0 : relIndex * 50,
                                    y: isActive ? 0 : relIndex * -10,
                                    z: -relIndex * 60,
                                    rotateZ: isActive ? 0 : relIndex * 8,
                                    rotateY: isActive ? 0 : relIndex * -12,
                                    scale: isActive ? 1 : 0.95,
                                }}
                                whileHover={{
                                    y: isActive ? -20 : -10,
                                    z: isActive ? 50 : -relIndex * 60 + 20,
                                    transition: { duration: 0.2 }
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 22,
                                    mass: 1
                                }}
                                className={`absolute inset-0 p-8 rounded-[2.5rem] cursor-grab active:cursor-grabbing
                                    border border-primary/20 backdrop-blur-3xl
                                    bg-gradient-to-br from-surface-container-highest/95 to-surface-container-low/70
                                    shadow-[-20px_20px_50px_rgba(0,0,0,0.3)]
                                    ${isActive ? "z-50" : "z-0"}`}
                                style={{
                                    transformStyle: "preserve-3d",
                                    transformOrigin: "bottom center"
                                }}
                            >
                                {/* Engineering Grid Overlay */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                     style={{ backgroundImage: `radial-gradient(var(--md-sys-color-primary) 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
                                />

                                <motion.div style={{ translateZ: 40 }} className="relative z-10 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                                            <Icon size={32} strokeWidth={1.5} />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="font-mono text-[10px] text-primary/40 uppercase tracking-[0.2em]">{card.code}</span>
                                            <div className="w-8 h-1 bg-primary/20 mt-1 rounded-full" />
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-black text-on-surface tracking-tighter mb-4 leading-none">
                                        {card.title.split(' ').map((word, index) => (
                                            <span key={index} className="block">{word}</span>
                                        ))}
                                    </h3>

                                    <p className="text-sm text-on-surface-variant leading-relaxed font-medium mb-auto">
                                        {card.text}
                                    </p>

                                    <div className="pt-6 border-t border-primary/10 flex items-center justify-between">
                                        <span className="text-[9px] font-bold text-primary tracking-widest uppercase">Implementation Ready</span>
                                        <div className="flex gap-1">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className={`w-1 h-1 rounded-full ${i <= 3 - relIndex ? 'bg-primary' : 'bg-primary/20'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>

            {/* Bottom Counter */}
            <div className="absolute bottom-16 flex flex-col items-center gap-2">
                <div className="text-[10px] font-mono text-primary/60 tracking-[0.4em] uppercase">Module Selection</div>
                <div className="flex gap-3">
                    {ENGINEERING_CARDS.map((_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => {
                                setIndex(i);
                                isIdle.current = false; // Pause auto-play when a user clicks a dot
                            }}
                            animate={{
                                width: i === index ? 32 : 8,
                                backgroundColor: i === index ? "var(--md-sys-color-primary)" : "rgba(var(--primary-rgb), 0.2)"
                            }}
                            className={`h-1 rounded-full transition-all duration-500 bg-primary/20`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};