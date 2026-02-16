"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/component/Navbar';
import { Footer } from '@/component/Footer';
import { SITE_CONFIG } from '@/lib/constants';
import { Code, GitFork, UserCog, Send } from 'lucide-react';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-background text-on-background selection:bg-primary/30 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-8 max-w-7xl mx-auto text-center">
                {/* Decorative Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-secondary/10 blur-[180px] rounded-full -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tighter leading-[0.9] bg-gradient-to-br from-on-background via-on-background to-outline bg-clip-text text-transparent">
                        Build the <span className="text-primary">Future</span> <br />
                        with <span className="text-tertiary">Gabo.</span>
                    </h1>
                    <p className="text-on-surface-variant text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                        Join a team that engineers core infrastructure for Africa&apos;s most ambitious projects. We&apos;re looking for builders.
                    </p>
                    <motion.a
                        href={`mailto:${SITE_CONFIG.email}?subject=Career%20Inquiry`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-primary text-on-primary px-10 py-5 rounded-2xl font-black shadow-xl shadow-primary/10"
                    >
                        Apply Now <Send size={20} />
                    </motion.a>
                </motion.div>
            </section>

            {/* Engineering Roles Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Opportunities</h3>
                    <h4 className="text-4xl font-bold text-on-surface">Who We&apos;re Looking For</h4>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Java Engineer Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-[2.5rem] bg-surface-container border border-outline/10 text-center"
                    >
                        <Code size={40} className="text-tertiary mx-auto mb-6" />
                        <h5 className="text-xl font-bold mb-3 text-on-surface">Senior Java Engineer</h5>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                            Designing and implementing high-performance, scalable backend systems. Experience with Spring Boot, Kafka, and Microservices.
                        </p>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">
              Full-Time
            </span>
                    </motion.div>

                    {/* C++ Engineer Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-[2.5rem] bg-surface-container border border-outline/10 text-center"
                    >
                        <GitFork size={40} className="text-secondary mx-auto mb-6" />
                        <h5 className="text-xl font-bold mb-3 text-on-surface">Embedded C++ Developer</h5>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                            Building robust, efficient, and low-latency systems for IoT, edge computing, and real-time data processing.
                        </p>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">
              Full-Time
            </span>
                    </motion.div>

                    {/* React/Frontend Engineer Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-[2.5rem] bg-surface-container border border-outline/10 text-center"
                    >
                        <UserCog size={40} className="text-primary mx-auto mb-6" />
                        <h5 className="text-xl font-bold mb-3 text-on-surface">Fullstack/React Engineer</h5>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                            Crafting intuitive and performant user interfaces with Next.js and Material Design. Expertise in UX/UI principles.
                        </p>
                        <span className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">
              Full-Time
            </span>
                    </motion.div>
                </div>
            </section>

            {/* Culture & Benefits Section (Optional for future expansion) */}
            <section className="py-24 px-8 max-w-7xl mx-auto text-center">
                <h3 className="text-sm font-bold text-tertiary uppercase tracking-[0.3em] mb-4">Our Culture</h3>
                <h4 className="text-4xl font-bold text-on-surface mb-8">Engineering with Impact</h4>
                <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
                    At Gabo, you&apos;ll work on projects that directly influence national infrastructure and
                    solve complex challenges for large enterprises. We foster a collaborative environment
                    focused on innovation, quality, and continuous learning.
                </p>
            </section>

            <Footer />
        </main>
    );
}