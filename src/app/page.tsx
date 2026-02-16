"use client";
import React from 'react';
import { Navbar } from '@/component/Navbar';
import { Footer } from '@/component/Footer';
import { ImigongoBackground } from "@/component/ImigongoBackground";

// Import Section Components
import { Hero } from '@/component/sections/Hero';
import { Portfolio } from '@/component/sections/Portfolio';
import { Investors } from '@/component/sections/Investors';

export default function LandingPage() {
  return (
      <main className="min-h-screen bg-background text-on-background selection:bg-primary/30 overflow-x-hidden relative">
        <Navbar />
        <ImigongoBackground />

        <Hero />
        <Portfolio />
        <Investors />

        <Footer />
      </main>
  );
}