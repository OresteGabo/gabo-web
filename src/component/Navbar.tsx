"use client";
import React from 'react';
import Link from 'next/link'; // Use Next.js Link for faster routing
import { SITE_CONFIG } from '@/lib/constants';

export const Navbar = () => (
    <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-xl border-b border-outline/5">
        <Link href="/" className="text-2xl font-black tracking-tighter text-primary">
            {SITE_CONFIG.name}.
        </Link>

        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
            <a href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</a>
            <a href="#investors" className="hover:text-primary transition-colors">Investors</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
            {/* New Client Portal Link */}
            <Link
                href="/console"
                className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors border-r border-outline/20 pr-4"
            >
                Client Portal
            </Link>

            <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                Start a Project
            </button>
        </div>
    </nav>
);