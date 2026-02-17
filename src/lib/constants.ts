import { Layers, Network, Globe, Cpu, LucideIcon } from "lucide-react";

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
export enum ProjectCategory {
    GOV_TECH = "Gov-Tech",
    LOGISTICS = "Logistics",
    ANALYTICS = "Analytics",
    FINTECH = "FinTech",
    SECURITY = "Security",
    INFRASTRUCTURE = "Infrastructure",
    OTHER = "Other"
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
    category: ProjectCategory;
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
    playStoreUrl?: string;
    appStoreUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
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
    // --- GOV-TECH ---
    {
        id: "citizen-id-vault",
        title: "Nexus ID Vault",
        desc: "Biometric-encrypted sovereign identity layer for unified civil registry access across 12 administrative regions.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.GOV_TECH,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.GOV_INTL,
        stack: ["Rust", "PostgreSQL", "Docker"],
        isPublic: true,
        projectChief: "Sarah O.",
        startDate: "2023-11-20"
    },
    {
        id: "tax-rail-v4",
        title: "TaxRail Ledger",
        desc: "Real-time fiscal reporting engine and automated VAT reconciliation system for national revenue authorities.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.GOV_TECH,
        ownership: ProjectOwnership.DELIVERED,
        client: CLIENTS.GOV_INTL,
        stack: ["Java", "Oracle", "Spring"],
        isPublic: true,
        projectChief: "David K.",
        startDate: "2024-01-15"
    },
    {
        id: "e-vis-system",
        title: "BorderGate OS",
        desc: "Automated visa processing and entry-exit monitoring system with real-time watch-list synchronization.",
        status: ProjectStatus.BETA,
        category: ProjectCategory.GOV_TECH,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.GOV_INTL,
        stack: ["Next.js", "Python", "Redis"],
        isPublic: true,
        projectChief: "Elena R.",
        startDate: "2025-03-10"
    },

    // --- FINTECH ---
    {
        id: "swift-core-pay",
        title: "CorePay Mesh",
        desc: "Low-latency payment switch for inter-bank settlement, handling 15,000 transactions per second.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.FINTECH,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.BANK_CORP,
        stack: ["Go", "Kafka", "Cassandra"],
        isPublic: true,
        projectChief: "Mark T.",
        startDate: "2024-06-05"
    },
    {
        id: "crypto-custody-x",
        title: "Vault-X Custody",
        desc: "Multi-signature institutional digital asset storage with cold-wallet hardware integration.",
        status: ProjectStatus.BETA,
        category: ProjectCategory.FINTECH,
        ownership: ProjectOwnership.DELIVERED,
        client: CLIENTS.FINANCIAL_GRP,
        stack: ["C++", "Solidity", "AWS"],
        isPublic: true,
        projectChief: "Ivan S.",
        startDate: "2025-01-12"
    },
    {
        id: "micro-lend-api",
        title: "LendScale Engine",
        desc: "Automated credit scoring and disbursement engine for rural micro-finance institutions.",
        status: ProjectStatus.DEVELOPMENT,
        category: ProjectCategory.FINTECH,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.FINANCIAL_GRP,
        stack: ["Python", "Django", "MongoDB"],
        isPublic: true,
        projectChief: "Amina J.",
        startDate: "2025-02-28"
    },

    // --- LOGISTICS ---
    {
        id: "port-op-control",
        title: "PortMaster Core",
        desc: "Automated container tracking and crane orchestration system for deep-water maritime ports.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.LOGISTICS,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.LOGISTICS_GLOBAL,
        stack: ["C#", "SQL Server", "MQTT"],
        isPublic: true,
        projectChief: "Tom B.",
        startDate: "2024-04-18"
    },
    {
        id: "cold-chain-monitor",
        title: "FrostChain Hub",
        desc: "IoT-driven temperature monitoring for pharmaceutical supply chains with automated audit logs.",
        status: ProjectStatus.DEVELOPMENT,
        category: ProjectCategory.LOGISTICS,
        ownership: ProjectOwnership.DELIVERED,
        client: CLIENTS.LOGISTICS_GLOBAL,
        stack: ["C++", "InfluxDB", "Grafana"],
        isPublic: true,
        projectChief: "Lars H.",
        startDate: "2025-04-01"
    },
    {
        id: "last-mile-ai",
        title: "RouteOptima AI",
        desc: "Neural-based route optimization for last-mile delivery fleets in hyper-dense urban environments.",
        status: ProjectStatus.BETA,
        category: ProjectCategory.LOGISTICS,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.KGL_CORP,
        stack: ["Python", "PyTorch", "MapBox"],
        isPublic: true,
        projectChief: "Chen W.",
        startDate: "2025-05-20"
    },

    // --- ANALYTICS ---
    {
        id: "urban-flow-data",
        title: "CityPulse Analytics",
        desc: "Real-time traffic flow analysis and congestion prediction for smart-city infrastructure planning.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.ANALYTICS,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.GOV_INTL,
        stack: ["Go", "Scala", "ElasticSearch"],
        isPublic: true,
        projectChief: "Nadia K.",
        startDate: "2024-08-14"
    },
    {
        id: "grid-monitor-plus",
        title: "PowerGrid Insight",
        desc: "National power grid load balancing and predictive maintenance monitoring for renewable energy nodes.",
        status: ProjectStatus.DEVELOPMENT,
        category: ProjectCategory.ANALYTICS,
        ownership: ProjectOwnership.DELIVERED,
        client: CLIENTS.ENERGY_CORP,
        stack: ["Python", "React", "TimescaleDB"],
        isPublic: true,
        projectChief: "Marcus P.",
        startDate: "2025-06-05"
    },

    // --- SECURITY & INFRA ---
    {
        id: "threat-shield-v1",
        title: "CyberShield IDS",
        desc: "Intrusion detection system using behavioral analysis to protect government data centers from zero-day threats.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.SECURITY,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.GOV_INTL,
        stack: ["Rust", "eBPF", "Kubernetes"],
        isPublic: true,
        projectChief: "Alex H.",
        startDate: "2024-02-11"
    },
    {
        id: "cloud-mesh-infra",
        title: "SkyMesh Fabric",
        desc: "Private multi-region cloud mesh allowing seamless data replication for sensitive state-owned data.",
        status: ProjectStatus.BETA,
        category: ProjectCategory.SECURITY,
        ownership: ProjectOwnership.MANAGED,
        client: CLIENTS.GOV_INTL,
        stack: ["Terraform", "Go", "GCP"],
        isPublic: true,
        projectChief: "Sofia G.",
        startDate: "2025-02-15"
    },

    // --- MIXED OTHERS TO ROUND TO 20 ---
    {
        id: "p14",
        title: "MedLink Hub",
        desc: "Inter-hospital medical record exchange protocol enabling secure patient data portability.",
        status: ProjectStatus.BETA,
        category: ProjectCategory.GOV_TECH,
        client: CLIENTS.GOV_INTL,
        ownership: ProjectOwnership.MANAGED,
        projectChief: "Dr. Alice W.",
        startDate: "2025-01-10",
        stack: ["FHIR", "Java", "PostgreSQL"],
        isPublic: true
    },
    {
        id: "p15",
        title: "AquaTrack",
        desc: "National water utility pressure monitoring system detecting leaks in real-time via IoT sensors.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.ANALYTICS,
        client: CLIENTS.GOV_INTL,
        ownership: ProjectOwnership.DELIVERED,
        projectChief: "Omar S.",
        startDate: "2024-03-22",
        stack: ["LoRaWAN", "Python", "TimescaleDB"],
        isPublic: true
    },
    {
        id: "p16",
        title: "AgriYield AI",
        desc: "Satellite-based crop yield prediction using multi-spectral imagery for national food security.",
        status: ProjectStatus.DEVELOPMENT,
        category: ProjectCategory.ANALYTICS,
        client: CLIENTS.GOV_INTL,
        ownership: ProjectOwnership.MANAGED,
        projectChief: "Grace L.",
        startDate: "2025-06-15",
        stack: ["TensorFlow", "GDAL", "Python"],
        isPublic: true
    },
    {
        id: "p17",
        title: "SafeTransit",
        desc: "High-speed public transport tap-and-go payment validator supporting offline processing.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.FINTECH,
        client: CLIENTS.KGL_CORP,
        ownership: ProjectOwnership.DELIVERED,
        projectChief: "Jean-Pierre N.",
        startDate: "2023-12-01",
        stack: ["NFC", "C++", "SQLite"],
        isPublic: true
    },
    {
        id: "p18",
        title: "Bridges G2C",
        desc: "Unified government-to-citizen service portal centralizing 50+ administrative functions.",
        status: ProjectStatus.PRODUCTION,
        category: ProjectCategory.GOV_TECH,
        client: CLIENTS.GOV_INTL,
        ownership: ProjectOwnership.MANAGED,
        projectChief: "Kabeza F.",
        startDate: "2024-09-10",
        stack: ["React", "Go", "Kubernetes"],
        isPublic: true
    },
    {
        id: "p19",
        title: "StockFlow",
        desc: "AI-driven warehouse automation and predictive inventory restocking for regional distributors.",
        status: ProjectStatus.BETA,
        category: ProjectCategory.LOGISTICS,
        client: CLIENTS.LOGISTICS_GLOBAL,
        ownership: ProjectOwnership.MANAGED,
        projectChief: "Hassan B.",
        startDate: "2025-02-14",
        stack: ["Node.js", "Redis", "Kafka"],
        isPublic: true
    },
    {
        id: "p20",
        title: "Sentinel Guard",
        desc: "Industrial-grade biometric access control with edge-computing facial recognition.",
        status: ProjectStatus.DEVELOPMENT,
        category: ProjectCategory.SECURITY,
        client: CLIENTS.KGL_CORP,
        ownership: ProjectOwnership.DELIVERED,
        projectChief: "Ritha M.",
        startDate: "2025-08-01",
        stack: ["C#", "OpenCV", "Azure IoT"],
        isPublic: true
    }
    ];

// 5. Site Config & Helpers
export const SITE_CONFIG = {
    name: "GABO",
    tagline: "High-Performance Engineering. Production-Ready Code.",
    description: "GABO is a technical execution firm specializing in building, maintaining, and scaling mission-critical software. We provide the full-stack engineering power required to transform ambitious concepts into stable, national-scale digital infrastructure.",
    email: "engineering@gabo.rw", // Changed to 'engineering' for a more technical feel
    careerPageLink: "/careers",
    services: [
        "Custom Software Development",
        "System Maintenance & Support",
        "Infrastructure Scaling",
        "Legacy Code Modernization"
    ]
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



export interface ServiceCard {
    title: string;
    text: string;
    Icon: LucideIcon;
    code: string;
}

export const ENGINEERING_CARDS: ServiceCard[] = [
    {
        title: "Enterprise Solutions",
        text: "Building mission-critical systems for finance and gov-tech. We specialize in migrating legacy complexity into modern, high-uptime microservices.",
        Icon: Layers,
        code: "PORTFOLIO-01"
    },
    {
        title: "Cloud & Scalability",
        text: "99.9% uptime architecture. We design auto-scaling infrastructure that handles millions of requests while optimizing your cloud burn-rate.",
        Icon: Network,
        code: "INFRA-WIN"
    },
    {
        title: "Regional Impact",
        text: "Pioneering Rwanda’s digital stack. From national ID integrations to local fintech hubs, we build tech that understands the African market.",
        Icon: Globe,
        code: "KIGALI-NODE"
    },
    {
        title: "Elite Engineering",
        text: "Our code is our contract. We deliver production-ready software using rigorous CI/CD pipelines and a 'security-first' development mindset.",
        Icon: Cpu,
        code: "TEAM-CORE"
    },
];

export const PARTNERS = [
    { name: "RISA", category: "Gov" },
    { name: "MINICT", category: "Gov" },
    { name: "BK GROUP", category: "Finance" },
    { name: "RSSB", category: "Public" },
    { name: "MTN", category: "Telco" },
    { name: "I&M BANK", category: "Finance" },
    { name: "COGEBANK", category: "Finance" },
];