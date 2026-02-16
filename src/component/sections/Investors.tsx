"use client";
import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {ArrowRight, ShieldCheck, Globe2, BarChart3, X, FileText, Download} from 'lucide-react';
import { StatCard } from '@/component/ui/StatCard';
import { PROJECTS, PARTNERS } from '@/lib/constants';
import {InvestorModal} from "@/component/ui/InvestorModel";

export const Investors = () => {
    const athletixProject = PROJECTS.find(p => p.id === "athletix-engine");
    const activeProjectsCount = PROJECTS.length;
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <section id="investors" className="py-32 bg-background relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

                {/* Left Side: Strategic Narrative */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                        <ShieldCheck size={12} /> Strategic Partnership
                    </div>

                    <h3 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-on-background leading-[1.1]">
                        Engineering the <span className="text-primary italic">Universal Backbone</span> of the Modern Digital Economy.
                    </h3>

                    <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed mb-12">
                        <p>
                            We provide the underlying technical infrastructure that powers national-scale initiatives. From Gov-Tech stabilities to high-frequency financial layers, our mission is to ensure every packet of data moves securely and at scale.
                        </p>
                        <p className="text-sm border-l-2 border-primary/30 pl-6 italic">
                            &quot;Our focus isn&apos;t just building software; it&apos;s building the trust that allows a nation&apos;s digital ecosystem to thrive.&quot;
                        </p>
                    </div>

                    {/* Infinite Brand Marquee */}
                    <div className="relative group">
                        <p className="text-[10px] font-bold text-primary/60 uppercase tracking-[0.2em] mb-6">Trusted by Industry Leaders</p>

                        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                            <motion.div
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="flex gap-12 items-center whitespace-nowrap pr-12"
                            >
                                {/* We double the list to create the infinite loop effect */}
                                {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                                    <span key={i} className="font-black text-2xl tracking-tighter opacity-30 hover:opacity-100 hover:text-primary transition-all cursor-default">
                                        {partner.name}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: High-Precision Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[3rem] -z-10" />

                    <div className="bg-surface-container-high/80 p-10 rounded-[3rem] border border-outline/20 shadow-2xl backdrop-blur-2xl">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h4 className="text-xl font-bold text-on-surface">Core Performance</h4>
                                <p className="text-xs text-on-surface-variant">Live metrics from deployment nodes</p>
                            </div>
                            <BarChart3 className="text-primary/40" />
                        </div>

                        <div className="space-y-6">
                            <StatCard label="Active Implementations" value={`${activeProjectsCount} Units`} growth="+12% YoY" />
                            <StatCard label={athletixProject?.metrics?.label || "Network Load"} value={athletixProject?.metrics?.value || "1.2GB/s"} growth="Optimized" />
                            <StatCard label="Infrastructure Uptime" value="99.99%" growth="Verified" />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                // ADD THIS LINE BELOW:
                                onClick={() => setIsModalOpen(true)}
                                className="w-full mt-8 flex items-center justify-center gap-3 py-5 bg-primary text-on-primary rounded-2xl text-sm font-black shadow-lg shadow-primary/20 group"
                            >
                                Investor Relations Access
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>

                        {/* Footer Detail */}
                        <div className="mt-8 pt-8 border-t border-outline/10 flex items-center gap-4 text-on-surface-variant">
                            <Globe2 size={16} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Kigali • Nairobi • Dubai Operations</span>
                        </div>
                    </div>
                </motion.div>
            </div>


            <InvestorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};
