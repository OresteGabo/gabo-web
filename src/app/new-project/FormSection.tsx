"use client";
import React from 'react';

interface FormSectionProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

export const FormSection = ({ icon, title, children }: FormSectionProps) => (
    <div className="space-y-6">
        <div className="flex items-center gap-3 mb-2">
            <span className="text-primary">{icon}</span>
            <h2 className="text-sm font-black uppercase tracking-widest text-on-surface">{title}</h2>
        </div>
        {children}
        <hr className="border-outline/5 mt-10" />
    </div>
);