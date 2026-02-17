"use client";
import React from 'react';
import { PROJECTS, CLIENTS, ProjectStatus, getStatusColor } from '@/lib/constants';
import { Building2, User, HardHat, Calendar } from 'lucide-react';

export default function ConsolePage() {
    // Safety check: if constants fail to load during build, don't crash the worker
    if (!CLIENTS || !PROJECTS) return null;

    return (
        <main className="min-h-screen bg-background text-on-background pt-32 px-8">
            {/* Page Header */}
            <div className="max-w-7xl mx-auto mb-16">
                <h1 className="text-4xl font-black tracking-tighter mb-2 italic uppercase">GABO Console</h1>
                <p className="text-on-surface-variant uppercase text-xs font-bold tracking-[0.3em]">Internal Infrastructure Registry</p>
            </div>

            <section className="max-w-7xl mx-auto space-y-32 pb-40">
                {Object.values(CLIENTS).map((client, i) => {
                    // 1. Filter projects for this specific client safely
                    const clientProjects = PROJECTS.filter(p => p?.client?.name === client?.name);

                    return (
                        // 2. FIXED: Use client name or index 'i' as key (Stable & Pure)
                        <div key={client?.name || i} className="grid lg:grid-cols-12 gap-12 border-t border-outline/10 pt-16">

                            {/* Sidebar: Client Contact Info */}
                            <div className="lg:col-span-4 sticky top-32 h-fit">
                                <div className="flex items-center gap-2 text-primary mb-4">
                                    {client?.type === 'GOVERNMENT' ? <Building2 size={20} /> : <User size={20} />}
                                    <span className="text-xs font-black tracking-widest uppercase">
                                        {client?.type || 'Standard Entity'}
                                    </span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4 tracking-tight">{client?.name}</h2>

                                <div className="p-6 rounded-[2rem] bg-surface-container/50 border border-outline/5 space-y-3 text-sm">
                                    <div className="flex justify-between font-medium">
                                        <span className="text-outline uppercase text-[10px] tracking-tighter">Contact:</span>
                                        <span className="text-on-surface">{client?.contactPerson}</span>
                                    </div>
                                    <div className="flex justify-between font-medium">
                                        <span className="text-outline uppercase text-[10px] tracking-tighter">Email:</span>
                                        <span className="text-on-surface">{client?.email}</span>
                                    </div>
                                    <div className="flex justify-between font-medium">
                                        <span className="text-outline uppercase text-[10px] tracking-tighter">Region:</span>
                                        <span className="text-on-surface">{client?.location}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Project List */}
                            <div className="lg:col-span-8 space-y-6">
                                {clientProjects.length > 0 ? (
                                    clientProjects.map((project, index) => (
                                        <div key={project?.id || index} className="bg-surface-container/30 border border-outline/10 rounded-[2.5rem] p-8">
                                            <div className="flex justify-between items-center mb-6">
                                                <h3 className="text-xl font-bold tracking-tight">{project?.title}</h3>
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black border uppercase tracking-tighter ${getStatusColor(project?.status)}`}>
                                                    {project?.status}
                                                </span>
                                            </div>

                                            {/* Internal Metadata */}
                                            <div className="flex flex-wrap gap-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                                                <div className="flex items-center gap-2">
                                                    <HardHat size={14} className="text-primary" />
                                                    <span>Chief: {project?.projectChief || 'Unassigned'}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={14} className="text-primary" />
                                                    <span>Initiated: {project?.startDate}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-on-surface-variant mb-10 leading-relaxed font-medium">
                                                {project?.desc}
                                            </p>

                                            {/* Progress Bar */}
                                            <div className="pt-6 border-t border-outline/5">
                                                <div className="h-1.5 w-full bg-outline/10 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-primary transition-all duration-1000 ease-out"
                                                        style={{ width: project?.status === ProjectStatus.PRODUCTION ? '100%' : '45%' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-12 border border-dashed border-outline/10 rounded-[2.5rem] text-center">
                                        <p className="text-xs font-bold uppercase tracking-widest text-outline">No project records found for this entity</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}