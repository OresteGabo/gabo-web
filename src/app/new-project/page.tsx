"use client";

import React, { useState, useCallback } from "react";
import {
    Building2,
    Layers,
    Upload,
    ShieldCheck,
    CheckCircle2,
    Loader2
} from "lucide-react";

import { SuccessView } from "./SuccessView";
import { FormSection } from "./FormSection";

const SCOPE_OPTIONS = ["Mobile App", "Web Platform", "Core Engine", "IoT / Embedded"];

export default function StartProject() {
    // Core States
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [trackingId, setTrackingId] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);

    // Form States
    const [selectedScope, setSelectedScope] = useState<string[]>([]);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [agreedToPolicies, setAgreedToPolicies] = useState<boolean>(false);
    const [agreedToContact, setAgreedToContact] = useState<boolean>(false);

    // Handlers
    const toggleScope = (type: string) => {
        setSelectedScope((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const handleCopy = () => {
        if (!trackingId) return;
        navigator.clipboard.writeText(trackingId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
            e.stopPropagation();

            if (e.dataTransfer.files?.[0]) {
                const file = e.dataTransfer.files[0];

                const validTypes = [
                    "application/pdf",
                    "image/jpeg",
                    "image/png",
                    "image/jpg"
                ];

                if (validTypes.includes(file.type)) {
                    setUploadedFile(file);
                } else {
                    alert("Security: Only flattened PDFs or images are accepted.");
                }
            }
        },
        []
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreedToPolicies || !agreedToContact) return;

        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 1800));

        setTrackingId(
            "REF-" + Math.random().toString(36).substring(2, 9).toUpperCase()
        );

        setIsSubmitting(false);
        setSubmitted(true);

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Success view
    if (submitted) {
        return (
            <SuccessView
                trackingId={trackingId}
                copied={copied}
                handleCopy={handleCopy}
            />
        );
    }

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12">

                <header className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface italic uppercase">
                        New Project.
                    </h1>

                    <p className="text-on-surface-variant text-sm font-medium max-w-lg leading-relaxed">
                        Transmit specifications securely. Use Drive links for large assets.
                        Files must be flattened PDFs or images.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-10">

                    <FormSection icon={<Building2 size={18} />} title="Organization Profile">
                        <div className="grid md:grid-cols-2 gap-4">
                            <input required placeholder="Full Name" className="w-full bg-surface-container/50 border border-outline/20 rounded-xl px-5 py-4 text-sm text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-outline font-medium" />
                            <input required placeholder="Organization" className="w-full bg-surface-container/50 border border-outline/20 rounded-xl px-5 py-4 text-sm text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-outline font-medium" />
                            <input required type="email" placeholder="Work Email" className="w-full bg-surface-container/50 border border-outline/20 rounded-xl px-5 py-4 text-sm text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-outline font-medium md:col-span-2" />
                        </div>
                    </FormSection>

                    <FormSection icon={<Layers size={18} />} title="Technical Scope">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {SCOPE_OPTIONS.map((s) => {
                                const active = selectedScope.includes(s);
                                return (
                                    <button
                                        key={s}
                                        type="button"
                                        onClick={() => toggleScope(s)}
                                        className={`p-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all
                                        ${active
                                            ? "bg-primary text-on-primary border-primary shadow-lg shadow-primary/20"
                                            : "bg-surface-container/30 border-outline/10 text-on-surface-variant hover:border-primary"}`}
                                    >
                                        {s}
                                    </button>
                                );
                            })}
                        </div>
                    </FormSection>

                    <FormSection icon={<Upload size={18} />} title="Assets & Logic">
                        <div className="space-y-6">
                            <textarea
                                rows={5}
                                required
                                placeholder="Describe requirements or paste Cloud links..."
                                className="w-full bg-surface-container/50 border border-outline/20 rounded-2xl px-5 py-4 text-sm text-on-surface focus:outline-none focus:border-primary transition-all placeholder:text-outline resize-none font-medium"
                            />

                            <div
                                onDrop={handleDrop}
                                onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
                                className="relative border-2 border-dashed border-outline/20 rounded-[2rem] p-12 text-center bg-surface-container/20 hover:bg-surface-container/40 transition-all cursor-pointer group"
                            >
                                <input
                                    type="file"
                                    accept=".pdf,image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (e.target.files?.[0]) {
                                            setUploadedFile(e.target.files[0]);
                                        }
                                    }}
                                />

                                <div className="space-y-4">
                                    <div className="mx-auto w-12 h-12 rounded-full bg-background flex items-center justify-center border border-outline/10 text-outline transition-colors group-hover:text-primary">
                                        {uploadedFile
                                            ? <CheckCircle2 size={24} className="text-primary" />
                                            : <Upload size={24} />}
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-xs font-black uppercase tracking-widest text-on-surface">
                                            {uploadedFile ? uploadedFile.name : "Attach Briefing"}
                                        </p>
                                        <p className="text-[9px] font-bold text-outline uppercase tracking-widest opacity-60">
                                            Flattened PDF • Images • Max 25MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FormSection>

                    <div className="space-y-3 pt-4">
                        <label className="flex items-center gap-4 p-5 rounded-2xl border border-outline/10 bg-surface-container/20 cursor-pointer hover:bg-surface-container/40 transition-all select-none">
                            <input
                                type="checkbox"
                                required
                                checked={agreedToPolicies}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgreedToPolicies(e.target.checked)}
                                className="w-5 h-5 rounded border-outline/20 text-primary focus:ring-0 bg-background"
                            />
                            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant leading-none">
                                Confirm data compliance
                            </span>
                        </label>

                        <label className="flex items-center gap-4 p-5 rounded-2xl border border-outline/10 bg-surface-container/20 cursor-pointer hover:bg-surface-container/40 transition-all select-none">
                            <input
                                type="checkbox"
                                required
                                checked={agreedToContact}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgreedToContact(e.target.checked)}
                                className="w-5 h-5 rounded border-outline/20 text-primary focus:ring-0 bg-background"
                            />
                            <span className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant leading-none">
                                Consent to contact
                            </span>
                        </label>
                    </div>

                    <div className="pt-6 space-y-4 text-center">
                        <button
                            type="submit"
                            disabled={!agreedToPolicies || !agreedToContact || isSubmitting}
                            className="w-full py-7 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] bg-primary text-on-primary disabled:opacity-20 disabled:grayscale transition-all shadow-2xl shadow-primary/20 active:scale-[0.98]"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-3">
                                    <Loader2 size={16} className="animate-spin" />
                                    Encrypting...
                                </span>
                            ) : "Initialize Transmission"}
                        </button>

                        <div className="flex justify-center items-center gap-2 text-[10px] font-black text-outline uppercase tracking-widest opacity-40">
                            <ShieldCheck size={14} className="text-primary" />
                            Encrypted handshake active
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
