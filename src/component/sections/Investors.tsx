"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { StatCard } from '@/component/StatCard';
import { PROJECTS } from '@/lib/constants';

export const Investors = () => {
    const athletixProject = PROJECTS.find(p => p.id === "athletix-engine");
    const activeProjectsCount = PROJECTS.length;

    return (
        <section id="investors" className="py-24 bg-gradient-to-b from-transparent to-primary/5 border-t border-outline/10">
            <div className="max-w-7xl auto px-8 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h3 className="text-4xl font-bold mb-6 italic tracking-tight text-on-background">Engineering for Government & Enterprise.</h3>
                    <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                        We specialize in custom infrastructure for Government of Rwanda (GoE) initiatives and private sectors.
                    </p>
                    <div className="flex gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all items-center">
                        <span className="font-black text-xl tracking-tighter">RISA</span>
                        <span className="font-black text-xl tracking-tighter">MINICT</span>
                        <span className="font-black text-xl tracking-tighter">BK GROUP</span>
                    </div>
                </div>
                <motion.div whileHover={{ y: -5 }} className="bg-surface-container-high p-10 rounded-[2.5rem] border border-outline/20 shadow-2xl relative backdrop-blur-xl">
                    <div className="space-y-8">
                        <StatCard label="Active Implementations" value={`${activeProjectsCount} Units`} growth="Scaling" />
                        <StatCard label={athletixProject?.metrics?.label || "Data Throughput"} value={athletixProject?.metrics?.value || "N/A"} growth={athletixProject?.metrics?.growth || "Stable"} />
                        <StatCard label="Infrastructure Uptime" value="99.9%" growth="Stable" />
                        <button className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-primary text-on-primary rounded-xl text-sm font-bold">
                            Investor Access <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};