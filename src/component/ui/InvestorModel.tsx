"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, ShieldCheck } from 'lucide-react';

interface InvestorModalProps {
    isOpen: boolean;
    onClose: () => void; // This is the function we must call
}

export const InvestorModal = ({ isOpen, onClose }: InvestorModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose} // FIXED: Call the function from props
                        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-surface-container-high border border-outline/20 rounded-[2.5rem] p-8 md:p-12 shadow-3xl overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-10">
                                <div>
                                    <h2 className="text-3xl font-black tracking-tighter text-on-background mb-2">Investor Data Room</h2>
                                    <p className="text-sm text-on-surface-variant flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        Secure Connection Established
                                    </p>
                                </div>
                                <button
                                    onClick={onClose} // FIXED: Call the function from props
                                    className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                                >
                                    <X size={24} className="text-on-surface-variant" />
                                </button>
                            </div>

                            <div className="grid gap-6 mb-10">
                                <div className="p-6 rounded-2xl bg-surface-container/50 border border-outline/10 flex items-center gap-5 group hover:border-primary/40 transition-colors cursor-pointer">
                                    <div className="p-4 rounded-xl bg-primary/10 text-primary">
                                        <FileText size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-on-surface text-lg">Q1 2026 Executive Summary</h4>
                                        <p className="text-xs text-on-surface-variant italic">PDF • 4.2 MB • Updated 2 days ago</p>
                                    </div>
                                    <Download size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <div className="p-6 rounded-2xl bg-surface-container/50 border border-outline/10 flex items-center gap-5 group hover:border-primary/40 transition-colors cursor-pointer">
                                    <div className="p-4 rounded-xl bg-primary/10 text-primary">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-on-surface text-lg">Infrastructure Compliance Audit</h4>
                                        <p className="text-xs text-on-surface-variant italic">Security Protocol v4.0 • ISO/IEC 27001</p>
                                    </div>
                                    <Download size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <p className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-4 text-center">Request Full Pitch Deck</p>
                                <div className="flex gap-2">
                                    <input type="email" placeholder="Enter corporate email" className="flex-1 bg-surface-container px-6 py-4 rounded-xl border border-outline/20 focus:outline-none focus:border-primary transition-colors text-sm" />
                                    <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-sm">Request Access</button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};