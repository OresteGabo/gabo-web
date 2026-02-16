// 1. Enums
export enum ProjectStatus {
    PROPOSAL = "PROPOSAL",
    FEASIBILITY = "FEASIBILITY STUDY",
    ESTIMATION = "ESTIMATION",
    ARCHITECTING = "SYSTEM DESIGN",
    DEVELOPMENT = "IN DEVELOPMENT",
    BETA = "BETA ACCESS",
    PRODUCTION = "PRODUCTION",
    MAINTENANCE = "MAINTENANCE"
}

export enum ProjectOwnership {
    MANAGED = "GABO MANAGED",
    DELIVERED = "CLIENT OWNED",
    PARTNERSHIP = "JOINT VENTURE"
}

// 2. Types
export interface Client {
    name: string;
    type: "GOVERNMENT" | "ENTERPRISE" | "INDIVIDUAL";
    contactPerson: string;
    location: string;
    email: string;
}

export interface Project {
    id: string;
    title: string;
    desc: string;
    status: ProjectStatus;
    ownership: ProjectOwnership;
    client: Client;
    stack: string[];
    isPublic: boolean;      // For public landing page
    projectChief: string;   // Internal use
    startDate: string;      // For timeline
    metrics?: {
        label: string;
        value: string;
        growth: string;
    };
}

// 3. Client Data
export const CLIENTS: Record<string, Client> = {
    GOV_RWANDA: {
        name: "Government of Rwanda",
        type: "GOVERNMENT",
        contactPerson: "Ministry of ICT",
        location: "Kigali",
        email: "projects@ict.gov.rw"
    },
    KGL_CORP: {
        name: "KGL Express Ltd",
        type: "ENTERPRISE",
        contactPerson: "Operations Director",
        location: "Kigali/Global",
        email: "tech@kglexpress.rw"
    },
    FERWAFA_PARTNER: {
        name: "Rwanda Sports Federation",
        type: "ENTERPRISE",
        contactPerson: "Technical Director",
        location: "Amahoro Office",
        email: "data@sports.gov.rw"
    }
};

// 4. Project Data
export const PROJECTS: Project[] = [
    {
        id: "schoolbridge-v1",
        title: "SchoolBridge Core",
        desc: "Academic data engine and communication bridge for national scale education monitoring.",
        status: ProjectStatus.PRODUCTION,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.GOV_RWANDA,
        stack: ["Next.js", "PostgreSQL", "Java"],
        isPublic: true,
        projectChief: "Jean-Luc K.",
        startDate: "2024-05-12"
    },
    {
        id: "kgl-logistics",
        title: "KGL Fleet Tracker",
        desc: "Real-time logistics monitoring and fleet management system for cross-border operations.",
        status: ProjectStatus.DEVELOPMENT,
        ownership: ProjectOwnership.DELIVERED,
        client: CLIENTS.KGL_CORP,
        stack: ["C++", "MQTT", "React Native"],
        isPublic: true,
        projectChief: "Alphonse M.",
        startDate: "2025-02-01"
    },
    {
        id: "athletix-engine",
        title: "Athletix Engine",
        desc: "High-performance sports analytics platform tracking player metrics and match data points.",
        status: ProjectStatus.BETA,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.FERWAFA_PARTNER,
        stack: ["Python", "Java", "TensorFlow"],
        isPublic: true,
        projectChief: "Gabo Lead",
        startDate: "2025-11-15",
        metrics: { label: "Sports Data Points", value: "62k+", growth: "+40% MoM" } // Dynamic data
    }
];

// 5. Site Config & Helpers
export const SITE_CONFIG = {
    name: "GABO",
    tagline: "We build the Tech. You build the Future.",
    description: "Gabo is the digital engine for the most ambitious projects. We handle the engineering complexity so you can focus on scale, operations, and global impact.",
    email: "hello@gabo.rw",
    careerPageLink: "/careers"
};
// 6. Helper for UI colors
export const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
        case ProjectStatus.PROPOSAL:
        case ProjectStatus.FEASIBILITY:
            return "bg-outline/20 text-on-surface-variant";
        case ProjectStatus.DEVELOPMENT:
        case ProjectStatus.ARCHITECTING:
            return "bg-primary/20 text-primary";
        case ProjectStatus.BETA:
            return "bg-secondary/20 text-secondary border-secondary/20";
        case ProjectStatus.PRODUCTION:
            return "bg-tertiary/20 text-tertiary border-tertiary/20";
        default:
            return "bg-outline/10 text-outline";
    }
};