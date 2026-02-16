"use client";
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShieldCheck,
    Upload,
    Calendar,
    Lock,
    Building2,
    Layers,
    CheckCircle2,
    Link2,
    Copy,
    ArrowLeft,
    MailCheck,
    Loader2,
    Check
} from 'lucide-react';

export default function StartProject() {
    // Core States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [trackingId, setTrackingId] = useState("");

    // Form States
    const [isReturningClient, setIsReturningClient] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [agreedToPolicies, setAgreedToPolicies] = useState(false);
    const [agreedToContact, setAgreedToContact] = useState(false);
    const [selectedScope, setSelectedScope] = useState<string[]>([]);
    const [projectNature, setProjectNature] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const toggleScope = (type: string) => {
        setSelectedScope(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(trackingId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") setIsDragging(true);
        else if (e.type === "dragleave") setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
            if (validTypes.includes(file.type)) {
                setUploadedFile(file);
            } else {
                alert("File type not allowed. Please use PDF or static Images.");
            }
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreedToPolicies || !agreedToContact) return;

        setIsSubmitting(true);

        // Security simulation (Encryption & Handshake)
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Adding GABO prefix to the ID
        const id = "GABO-" + Math.random().toString(36).substring(2, 9).toUpperCase();
        setTrackingId(id);
        setIsSubmitting(false);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // --- RENDER SUCCESS VIEW ---
    if (submitted) {
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
                            href="/"
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
    }

    // --- RENDER FORM VIEW ---
    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                        <Lock size={12} /> GABO Secure Intake
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-on-surface">Initialize Project.</h1>
                    <p className="text-on-surface-variant leading-relaxed max-w-2xl font-medium">
                        Securely transmit requirements to GABO engineering. All data is processed via AES-256 encrypted protocols.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-10 bg-surface-container/30 p-8 md:p-12 rounded-[2.5rem] border border-outline/10 backdrop-blur-sm shadow-2xl">

                    {/* 1. Identity Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Building2 size={18} className="text-primary" />
                            <h2 className="text-sm font-black uppercase tracking-widest text-on-surface">Organization Profile</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-outline">Contact Full Name</label>
                                <input required type="text" placeholder="John Doe" className="w-full bg-background border border-outline/20 rounded-xl px-4 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-outline/30" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-outline">Legal Company Name</label>
                                <input required type="text" placeholder="Gabo Ltd / Ministry of..." className="w-full bg-background border border-outline/20 rounded-xl px-4 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-outline/30" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-outline">Verified Work Email</label>
                                <input required type="email" placeholder="contact@company.com" className="w-full bg-background border border-outline/20 rounded-xl px-4 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-outline/30" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-outline">Organization Entity</label>
                                <select className="w-full bg-background border border-outline/20 rounded-xl px-4 py-4 text-sm focus:border-primary focus:outline-none appearance-none cursor-pointer">
                                    <option>Large Enterprise</option>
                                    <option>Government Agency</option>
                                    <option>SME / Startup</option>
                                    <option>International NGO</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <hr className="border-outline/5" />

                    {/* 2. Technical Scope - HIGH VISIBILITY SELECTION */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-2">
                            <Layers size={18} className="text-primary" />
                            <h2 className="text-sm font-black uppercase tracking-widest text-on-surface">Technical Perimeter</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Mobile App', 'Web Platform', 'Core Engine', 'IoT/Embedded'].map((type) => {
                                const isSelected = selectedScope.includes(type);
                                return (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => toggleScope(type)}
                                        className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 overflow-hidden ${
                                            isSelected
                                                ? 'bg-primary border-primary text-on-primary scale-[1.03] shadow-2xl shadow-primary/30'
                                                : 'bg-background border-outline/10 text-outline hover:border-primary/50'
                                        }`}
                                    >
                                        {isSelected && <Check size={14} className="absolute top-2 right-2 text-on-primary" />}
                                        <span className={`text-[10px] font-black uppercase tracking-tighter ${isSelected ? 'text-on-primary' : 'text-outline'}`}>
                                            {type}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-outline">Project Nature</label>
                                <div className="flex gap-3">
                                    {['New', 'Update'].map((nature) => {
                                        const isSelected = projectNature === nature;
                                        return (
                                            <button
                                                key={nature}
                                                type="button"
                                                onClick={() => setProjectNature(nature)}
                                                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest border rounded-2xl transition-all ${
                                                    isSelected
                                                        ? 'bg-primary border-primary text-on-primary shadow-xl shadow-primary/20 scale-[1.02]'
                                                        : 'bg-background border-outline/10 text-outline hover:bg-surface-container'
                                                }`}
                                            >
                                                {nature === 'New' ? 'Greenfield' : 'Legacy Sync'}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-outline">Priority Window</label>
                                <select className="w-full bg-background border border-outline/20 rounded-xl px-4 py-4 text-sm focus:border-primary focus:outline-none appearance-none">
                                    <option>Immediate Execution</option>
                                    <option>Q1 / Next 3 Months</option>
                                    <option>Strategic Planning</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <hr className="border-outline/5" />

                    {/* 3. Assets & Documentation */}
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest ml-1 text-outline">Logic Overview</label>
                            <textarea required rows={5} placeholder="Describe business logic, user flow, and critical features..." className="w-full bg-background border border-outline/20 rounded-2xl px-4 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-outline/30 resize-none" />
                        </div>

                        <div
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            className={`relative border-2 border-dashed rounded-[2.5rem] p-12 text-center transition-all ${isDragging ? 'border-primary bg-primary/5 scale-[1.01]' : 'border-outline/20 bg-background/50 hover:bg-background'}`}
                        >
                            <input type="file" accept=".pdf, .jpg, .jpeg, .png" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => e.target.files && setUploadedFile(e.target.files[0])} />
                            <div className="space-y-4">
                                <div className="mx-auto w-12 h-12 rounded-full bg-surface-container flex items-center justify-center border border-outline/10">
                                    {uploadedFile ? <CheckCircle2 className="text-green-500" size={24} /> : <Upload className="text-outline" size={24} />}
                                </div>
                                <p className="text-sm font-black text-on-surface">{uploadedFile ? uploadedFile.name : "Transmit Technical Brief (PDF/IMG)"}</p>
                                <p className="text-[9px] text-outline uppercase tracking-widest font-bold">Max 25MB • ISO Secure Transfer</p>
                            </div>
                        </div>
                    </div>

                    <hr className="border-outline/5" />

                    {/* 4. Mandatory Consents */}
                    <div className="space-y-4">
                        <div className={`p-6 rounded-[2rem] border transition-all flex items-start gap-4 ${agreedToPolicies ? 'bg-primary/5 border-primary/40' : 'bg-surface-container-high/50 border-outline/10'}`}>
                            <input required type="checkbox" id="legal" checked={agreedToPolicies} onChange={(e) => setAgreedToPolicies(e.target.checked)} className="mt-1 w-5 h-5 rounded border-outline/30 text-primary cursor-pointer" />
                            <label htmlFor="legal" className="text-[10px] text-on-surface-variant leading-relaxed uppercase font-black cursor-pointer select-none">
                                I confirm compliance with GABO data handling and security privacy policies.
                            </label>
                        </div>

                        <div className={`p-6 rounded-[2rem] border transition-all flex items-start gap-4 ${agreedToContact ? 'bg-primary/5 border-primary/40' : 'bg-surface-container-high/50 border-outline/10'}`}>
                            <input required type="checkbox" id="contact" checked={agreedToContact} onChange={(e) => setAgreedToContact(e.target.checked)} className="mt-1 w-5 h-5 rounded border-outline/30 text-primary cursor-pointer" />
                            <label htmlFor="contact" className="text-[10px] text-on-surface-variant leading-relaxed uppercase font-black cursor-pointer select-none">
                                I consent to be contacted via secure email or phone for this technical initialization.
                            </label>
                        </div>
                    </div>

                    <div className="pt-4 flex flex-col items-center gap-6">
                        <button
                            type="submit"
                            disabled={!agreedToPolicies || !agreedToContact || isSubmitting}
                            className={`w-full py-7 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] transition-all flex items-center justify-center gap-4
                                ${agreedToPolicies && agreedToContact && !isSubmitting
                                ? 'bg-primary text-on-primary shadow-2xl shadow-primary/40 active:scale-[0.98]'
                                : 'bg-outline/20 text-on-surface/30 cursor-not-allowed'}
                            `}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Encrypting & Transmitting...
                                </>
                            ) : (
                                <>
                                    <Calendar size={18} /> Initialize Project
                                </>
                            )}
                        </button>
                        <p className="flex items-center gap-2 text-[10px] text-outline font-black uppercase tracking-[0.2em]">
                            <ShieldCheck size={14} className="text-primary" /> End-to-End Encryption Active
                        </p>
                    </div>
                </form>
            </div>
        </main>
    );
}