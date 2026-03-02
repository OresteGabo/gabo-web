"use client";
import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, getStatusColor } from '@/lib/constants';
import { ExternalLink, Play, Apple, ChevronLeft, ChevronRight } from 'lucide-react';

export const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("All");
    const scrollRef = useRef<HTMLDivElement>(null);

    const categories = useMemo(() =>
            ["All", ...new Set(PROJECTS.map(p => p.category))],
        []);

    const filteredProjects = PROJECTS.filter(p => {
        const matchesTab = activeTab === "All" || p.category === activeTab;
        return p.isPublic && matchesTab;
    });

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8; // Scroll 80% of view width
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section id="ecosystem" className="py-32 overflow-hidden relative">
            {/* Header Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mb-4">GABO Ecosystem</h3>
                    <h4 className="text-5xl md:text-7xl font-black text-on-surface tracking-tighter italic leading-none">
                        Products in <br/><span className="text-outline">Real-World Use.</span>
                    </h4>
                </div>

                {/* Navigation Controls */}
                <div className="flex gap-3">
                    <button onClick={() => scroll('left')} className="p-4 rounded-full border border-outline/10 hover:bg-surface-container-high transition-all active:scale-90">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={() => scroll('right')} className="p-4 rounded-full border border-outline/10 hover:bg-surface-container-high transition-all active:scale-90">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="sticky top-[72px] z-[50] mb-16 px-6 py-4 bg-background/80 backdrop-blur-xl border-y border-outline/5">
                <div className="flex overflow-x-auto no-scrollbar gap-2 items-center max-w-7xl mx-auto">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                                activeTab === cat
                                    ? "bg-on-surface text-surface shadow-xl"
                                    : "text-on-surface-variant hover:text-primary"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Scrollable Row */}
            <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-[calc((100vw-80rem)/2+2rem)] pb-12"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="snap-start flex-none w-[85vw] md:w-[450px] group relative flex flex-col rounded-[3rem] bg-surface-container/20 border border-outline/10 overflow-hidden hover:bg-surface-container/40 transition-all duration-500"
                        >
                            {/* Image Area - EXACTLY AS PER YOUR WORKING CODE */}
                            <div className="aspect-[16/10] bg-surface-container-high relative overflow-hidden">
                                {project.imageUrl ? (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                                        <span className="text-[12rem] font-black italic opacity-[0.03] select-none tracking-tighter">GABO</span>
                                    </div>
                                )}

                                <div className="absolute top-6 left-6">
                                    <span className={`text-[8px] font-black px-3 py-1.5 rounded-full backdrop-blur-md border uppercase ${getStatusColor(project.status)} bg-background/50`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex justify-between items-end mb-6">
                                    <div>
                                        <p className="text-[9px] font-bold text-primary uppercase tracking-[0.2em] mb-2">{project.category}</p>
                                        <h5 className="text-3xl font-black tracking-tight">{project.title}</h5>
                                    </div>

                                    <div className="flex gap-3">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" className="p-3 rounded-full bg-on-surface text-surface hover:scale-110 transition-transform">
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                        {project.playStoreUrl && (
                                            <a href={project.playStoreUrl} className="p-3 rounded-full bg-surface-container border border-outline/10 hover:border-primary transition-all">
                                                <Play size={18} className="fill-current" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-on-surface-variant text-sm leading-relaxed font-medium line-clamp-3">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};