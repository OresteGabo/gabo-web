"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, getStatusColor } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

export const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [displayLimit, setDisplayLimit] = useState(6);

    const categories = useMemo(() =>
            ["All", ...new Set(PROJECTS.map(p => p.category))],
        []);

    const filteredProjects = PROJECTS.filter(p => {
        const matchesTab = activeTab === "All" || p.category === activeTab;
        return p.isPublic && matchesTab;
    });

    const visibleProjects = filteredProjects.slice(0, displayLimit);
    const hasMore = displayLimit < filteredProjects.length;

    const handleShowMore = () => setDisplayLimit(prev => prev + 6);

    return (
        /* 1. Ensure the section itself isn't cutting off the sticky child */
        <section id="ecosystem" className="py-24 px-6 md:px-8 max-w-7xl mx-auto relative">
            <div className="mb-12">
                <h3 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Ecosystem</h3>
                <h4 className="text-4xl md:text-5xl font-black text-on-surface tracking-tighter italic">
                    Infrastructure Proof of Concepts.
                </h4>
            </div>

            {/* 2. UPDATED STICKY BAR:
                - Adjusted top to match your Navbar height (usually 64px - 80px).
                - Increased z-index to 50.
                - Added 'self-start' if you use a flex parent elsewhere.
            */}
            <div className="sticky top-[72px] z-[50] mb-12 -mx-6 px-6 py-4 bg-background/95 backdrop-blur-md border-b border-outline/10 shadow-sm transition-all">
                <div className="flex flex-wrap gap-2 items-center max-w-7xl mx-auto">
                    <span className="text-[9px] font-black text-primary/40 uppercase tracking-[0.2em] mr-4 hidden lg:block">
                        Deployment Filter:
                    </span>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveTab(cat);
                                    setDisplayLimit(6);
                                }}
                                className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                    activeTab === cat
                                        ? "bg-primary text-on-primary shadow-lg shadow-primary/30"
                                        : "text-on-surface-variant bg-surface-container/50 hover:bg-surface-container-high border border-outline/5"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Added min-height to prevent layout jump when filtering */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                <AnimatePresence mode='popLayout'>
                    {visibleProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="group p-8 rounded-[2.5rem] bg-surface-container/40 border border-outline/10 backdrop-blur-sm flex flex-col h-full hover:border-primary/40 hover:bg-surface-container/60 transition-all cursor-default"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <span className={`text-[9px] font-black px-3 py-1 rounded-full border uppercase ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                                <span className="text-[9px] font-bold text-outline/50 uppercase tracking-tighter">
                                    {project.category}
                                </span>
                            </div>

                            <h5 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h5>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-6 border-t border-outline/5">
                                {project.stack.slice(0, 3).map(tech => (
                                    <span key={tech} className="text-[9px] font-mono text-outline/60 uppercase group-hover:text-primary/70 transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {hasMore && (
                <div className="mt-16 flex justify-center pb-12">
                    <button
                        onClick={handleShowMore}
                        className="group flex flex-col items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant hover:text-primary transition-all"
                    >
                        <span>Load More Deployments</span>
                        <div className="p-5 rounded-full border border-outline/20 group-hover:border-primary group-hover:bg-primary/5 transition-all">
                            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
                        </div>
                    </button>
                </div>
            )}
        </section>
    );
};