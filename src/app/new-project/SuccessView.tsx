"use client";
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MailCheck, CheckCircle2, Copy, ArrowLeft } from 'lucide-react';

interface SuccessViewProps {
    trackingId: string;
    copied: boolean;
    handleCopy: () => void;
}

export const SuccessView = ({ trackingId, copied, handleCopy }: SuccessViewProps) => {
    return (
        <main className="min-h-screen bg-background pt-40 pb-20 px-6 relative overflow-hidden">
            {/* Subtle Branded Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                <h2 className="text-[25rem] font-black italic tracking-tighter">GABO</h2>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto text-center space-y-8 relative z-10"
            >
                <div className="space-y-6">
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-2xl font-black tracking-tighter italic text-on-surface">GABO</span>
                        <div className="h-4 w-[1px] bg-outline/20" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Intelligence Systems</span>
                    </div>
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20 shadow-xl shadow-primary/5">
                        <MailCheck size={40} className="text-primary" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-black tracking-tighter italic text-on-surface">Transmission Successful.</h1>
                    <p className="text-on-surface-variant leading-relaxed text-sm">
                        The <span className="font-black text-on-surface">GABO Core Team</span> has received your initialization request...
                    </p>
                </div>

                <div className="p-8 bg-surface-container/50 rounded-[2.5rem] border border-outline/10 space-y-4 relative overflow-hidden backdrop-blur-md">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">GABO Secure Reference</p>
                        <p className="text-[9px] text-outline uppercase font-bold tracking-widest opacity-60 italic">Store for technical audit purposes</p>
                    </div>

                    <div className="flex items-center justify-center gap-3 bg-background p-5 rounded-2xl border border-outline/10 group transition-all hover:border-primary/20">
                        <code className="text-2xl font-black text-on-surface tracking-[0.2em]">{trackingId}</code>
                        <button
                            onClick={handleCopy}
                            className="p-3 hover:bg-primary/10 rounded-xl transition-all relative active:scale-90"
                        >
                            {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} className="text-outline group-hover:text-primary" />}
                            <AnimatePresence>
                                {copied && (
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[8px] font-black px-3 py-1.5 rounded-full"
                                    >
                                        COPIED TO VAULT
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                <div className="pt-8 flex flex-col items-center gap-6">
                    <Link
                        href="/public"
                        className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-outline hover:text-primary transition-all group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Exit to Ecosystem
                    </Link>
                    <div className="flex items-center gap-4 text-[9px] text-outline/40 uppercase font-bold tracking-widest">
                        <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" /> System Online</span>
                        <span className="w-1 h-1 bg-outline/20 rounded-full" />
                        <span>Encrypted Handshake Verified</span>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};