"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import {EngineeringCore} from "@/component/EngineeringCore";

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-screen flex items-center bg-background transition-colors duration-500">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <div className="mb-8">
                        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] text-on-background">
                            We build the <span className="text-primary">Tech.</span><br />
                            <span className="text-on-surface-variant">You build the </span>
                            <span className="text-on-background">Future.</span>
                        </h2>
                    </div>

                    <p className="text-on-surface-variant text-lg md:text-2xl max-w-xl leading-relaxed mb-10 font-medium">
                        {SITE_CONFIG.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black shadow-xl"
                        >
                            Start Implementation
                        </motion.button>

                        <div className="flex items-center gap-3 px-6 py-5 border border-outline-variant rounded-2xl bg-surface-container backdrop-blur-md">
                            <Zap className="text-primary" size={20} />
                            <span className="text-sm font-semibold tracking-wide uppercase italic text-on-surface">Infrastructure v2.6</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Engineering Core Component */}
                <div className="w-full">
                    <EngineeringCore />
                </div>
            </div>
        </section>
    );
};