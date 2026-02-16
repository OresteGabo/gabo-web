"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

const navItems = [
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Investors", href: "#investors" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 mx-auto max-w-7xl w-full px-6 py-4 md:px-8 z-[1000] bg-[color:var(--md-sys-color-background)]/80 backdrop-blur-xl border-b border-[color:var(--md-sys-color-outline)]/5">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-black tracking-tighter text-[color:var(--md-sys-color-primary)]">
                    {SITE_CONFIG.name}.
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-[color:var(--md-sys-color-on-surface-variant)]">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="hover:text-[color:var(--md-sys-color-primary)] transition-colors">
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link href="/console" className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-[color:var(--md-sys-color-on-surface-variant)] hover:text-[color:var(--md-sys-color-primary)] border-r border-[color:var(--md-sys-color-outline)]/20 pr-4">
                        Client Portal
                    </Link>

                    {/* Primary Visible Button */}
                    <button className="bg-[color:var(--md-sys-color-primary)] text-[color:var(--md-sys-color-on-primary)] px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[color:var(--md-sys-color-primary)]/20">
                        Start a Project
                    </button>

                    {/* Hamburger (No full-screen blur logic) */}
                    <button
                        className="md:hidden p-2 text-[color:var(--md-sys-color-on-surface-variant)]"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Simple Dropdown (No Overlay) */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 bg-[color:var(--md-sys-color-surface-container)] border-b border-[color:var(--md-sys-color-outline)]/10 p-6 flex flex-col gap-4 md:hidden shadow-xl z-10"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-[10px] font-black uppercase tracking-widest text-[color:var(--md-sys-color-on-surface-variant)]"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <Link href="/console" className="text-[10px] font-black uppercase tracking-widest text-[color:var(--md-sys-color-primary)]" onClick={() => setMenuOpen(false)}>
                            Client Portal
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};