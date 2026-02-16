"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    {/* FIXED: Removed text-transparent and improved contrast */}
                    <h2 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter leading-[0.9] text-on-background">
                        We build the <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">Tech.</span><br />
                        <span className="text-on-surface-variant">You build the </span>
                        <span className="text-on-background">Future.</span>
                    </h2>

                    <p className="text-on-surface-variant text-lg md:text-2xl max-w-xl leading-relaxed mb-10 font-medium">
                        {SITE_CONFIG.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black shadow-xl shadow-primary/20"
                        >
                            Start Implementation
                        </motion.button>
                        <div className="flex items-center gap-3 px-6 py-5 border border-outline/20 rounded-2xl bg-surface-container/30 backdrop-blur-md">
                            <Zap className="text-primary" size={20} />
                            <span className="text-sm font-semibold tracking-wide uppercase italic text-on-surface">Infrastructure v2.6</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Engineering Core */}
                <div className="relative w-full h-[500px] flex items-center justify-center">
                    <div className="relative scale-110">
                        {/* Core Radiance */}
                        <motion.div
                            animate={{
                                opacity: [0.1, 0.25, 0.1],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 m-auto w-64 h-64 bg-primary/40 blur-[120px] rounded-full"
                        />

                        {/* Rotating Geometric HUD */}
                        <motion.svg
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            width="500" height="500" viewBox="0 0 400 400"
                            className="relative z-10"
                        >
                            {/* Outer Technical Ring */}
                            <circle
                                cx="200" cy="200" r="190"
                                stroke="var(--primary)"
                                strokeWidth="0.5"
                                fill="none"
                                strokeDasharray="1 10"
                                opacity="0.5"
                            />

                            {/* Pulsing Inner Hex/Diamond Hybrid */}
                            {[0, 60, 120, 180, 240, 300].map((angle) => (
                                <motion.g key={angle} transform={`rotate(${angle} 200 200)`}>
                                    <motion.path
                                        d="M200 40 L220 70 L200 100 L180 70 Z"
                                        fill="none"
                                        stroke="var(--primary)"
                                        strokeWidth="1"
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: angle/100 }}
                                    />
                                    <circle cx="200" cy="40" r="2" fill="var(--primary)" />
                                </motion.g>
                            ))}

                            {/* Central "Imigongo" Shard */}
                            <motion.path
                                d="M200 150 L230 200 L200 250 L170 200 Z"
                                fill="var(--primary)"
                                className="drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.svg>

                        {/* Floating Data Labels */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute top-10 right-0 px-5 py-3 bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-2xl shadow-2xl"
                            >
                                <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
                                    <div className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Status: Operational</div>
                                </div>
                                <div className="text-sm font-bold text-on-surface tracking-tight">Enterprise Infrastructure</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                                className="absolute bottom-10 left-0 px-5 py-3 bg-surface-container/60 backdrop-blur-xl border border-outline/20 rounded-2xl shadow-2xl"
                            >
                                <div className="text-[10px] font-bold text-outline tracking-[0.2em] uppercase mb-1">Deployment Region</div>
                                <div className="text-sm font-bold text-on-surface">Kigali, Rwanda</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
