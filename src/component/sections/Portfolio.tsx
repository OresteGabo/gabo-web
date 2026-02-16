"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, getStatusColor } from '@/lib/constants';

export const Portfolio = () => {
    return (
        <section id="ecosystem" className="py-24 px-8 max-w-7xl mx-auto">
            <div className="mb-20 text-center">
                <h3 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Portfolio</h3>
                <h4 className="text-5xl font-black text-on-surface tracking-tighter">Public Proof of Concepts</h4>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.filter(p => p.isPublic).map((project) => (
                    <motion.div key={project.id} whileHover={{ y: -10 }} className="p-8 rounded-[3rem] bg-surface-container/40 border border-outline/10 backdrop-blur-sm flex flex-col h-full">
                        <div className="mb-6">
              <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
                        </div>
                        <h5 className="text-2xl font-bold mb-4">{project.title}</h5>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">{project.desc}</p>
                        <div className="flex flex-wrap gap-2 pt-6 border-t border-outline/5">
                            {project.stack.slice(0, 3).map(tech => (
                                <span key={tech} className="text-[9px] font-mono text-outline uppercase">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};