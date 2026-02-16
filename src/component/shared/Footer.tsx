"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Github, Linkedin, ArrowUpRight, Cpu } from 'lucide-react';
import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="contact" className="pt-24 pb-12 px-8 border-t border-outline/10 bg-surface-container-lowest/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

                    {/* Brand & Vision */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-2 mb-6">
                            <Cpu className="text-primary" size={24} />
                            <span className="text-2xl font-black tracking-tighter">{SITE_CONFIG.name}.</span>
                        </div>
                        <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm mb-8">
                            Engineering the next generation of African digital infrastructure.
                            From Kigali to the world.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="p-3 rounded-full border border-outline/20 hover:border-primary transition-colors cursor-pointer"><Linkedin size={18} /></div>
                            <div className="p-3 rounded-full border border-outline/20 hover:border-primary transition-colors cursor-pointer"><Github size={18} /></div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-6">
                        <h6 className="text-xs font-black uppercase tracking-widest text-primary">Platform</h6>
                        <ul className="space-y-4 text-on-surface-variant font-medium text-sm">
                            <li>
                                <Link href="/console" className="hover:text-primary transition-colors flex items-center gap-2">
                                    Client Dashboard <span className="text-[8px] bg-primary/10 px-1.5 py-0.5 rounded text-primary font-black">SECURE</span>
                                </Link>
                            </li>
                            <li><a href="#investors" className="hover:text-primary transition-colors">Investor Relations</a></li>
                            <li><a href="/status" className="hover:text-primary transition-colors">System Status</a></li>
                        </ul>
                    </div>

                    {/* Careers & Future */}
                    <div className="md:col-span-4 space-y-6">
                        <h6 className="text-xs font-black uppercase tracking-widest text-primary">Talent</h6>
                        <Link href={SITE_CONFIG.careerPageLink} className="group p-6 rounded-[2rem] bg-surface-container border border-outline/10 hover:border-primary/30 transition-all cursor-pointer block">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-lg font-bold">Careers</span>
                                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <p className="text-sm text-on-surface-variant mb-4">We are always looking for Java, C++, and React engineers.</p>
                            <span className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">
      View Openings
    </span>
                        </Link>
                    </div>
                </div>

                {/* Final Bottom Bar */}
                <div className="pt-8 border-t border-outline/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-outline uppercase tracking-widest">
                        &copy; 2026 {SITE_CONFIG.name} TECHNOLOGY LTD • RWANDA
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="flex items-center gap-2 text-sm font-bold text-on-surface"
                    >
                        <Mail size={16} className="text-primary" />
                        {SITE_CONFIG.email}
                    </motion.a>
                </div>
            </div>
        </footer>
    );
};