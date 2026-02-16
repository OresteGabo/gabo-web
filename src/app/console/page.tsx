"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/component/shared/Navbar';
import { PROJECTS, CLIENTS, ProjectStatus, getStatusColor } from '@/lib/constants';
import { Building2, User, HardHat, Calendar } from 'lucide-react';

export default function ConsolePage() {
    return (
        <main className="min-h-screen bg-background text-on-background pt-32 px-8">
            <div className="max-w-7xl mx-auto mb-16">
                <h1 className="text-4xl font-black tracking-tighter mb-2">GABO CONSOLE</h1>
                <p className="text-on-surface-variant uppercase text-xs font-bold tracking-[0.3em]">Internal Infrastructure Registry</p>
            </div>

            <section className="max-w-7xl mx-auto space-y-32 pb-40">
                {Object.values(CLIENTS).map((client) => {
                    const clientProjects = PROJECTS.filter(p => p.client.name === client.name);
                    return (
                        <div key={client.name} className="grid lg:grid-cols-12 gap-12 border-t border-outline/10 pt-16">
                            {/* Sidebar: Private Client Contact Info */}
                            <div className="lg:col-span-4 sticky top-32 h-fit">
                                <div className="flex items-center gap-2 text-primary mb-4">
                                    {client.type === 'GOVERNMENT' ? <Building2 size={20} /> : <User size={20} />}
                                    <span className="text-xs font-black tracking-widest uppercase">{client.type}</span>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">{client.name}</h2>
                                <div className="p-4 rounded-2xl bg-surface-container-high space-y-3 text-sm">
                                    <p><strong>Primary Contact:</strong> {client.contactPerson}</p>
                                    <p><strong>Direct Email:</strong> {client.email}</p>
                                    <p><strong>Region:</strong> {client.location}</p>
                                </div>
                            </div>

                            {/* Project List with Internal Metadata */}
                            <div className="lg:col-span-8 space-y-6">
                                {clientProjects.map((project) => (
                                    <div key={project.id} className="bg-surface-container/30 border border-outline/10 rounded-[2.5rem] p-8">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-xl font-bold">{project.title}</h3>
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                                        </div>

                                        {/* Internal Info Row */}
                                        <div className="flex gap-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                                            <div className="flex items-center gap-2">
                                                <HardHat size={14} className="text-primary" />
                                                <span>Chief: {project.projectChief}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} className="text-primary" />
                                                <span>Initiated: {project.startDate}</span>
                                            </div>
                                        </div>

                                        <p className="text-sm text-on-surface-variant mb-10 leading-relaxed">{project.desc}</p>

                                        {/* Timeline Component - Visible to Employees/Clients */}
                                        <div className="pt-6 border-t border-outline/5">
                                            <div className="h-1.5 w-full bg-outline/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary"
                                                     style={{ width: project.status === ProjectStatus.PRODUCTION ? '100%' : '45%' }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}