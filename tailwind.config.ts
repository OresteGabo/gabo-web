import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/component/**/*.{js,ts,jsx,tsx,mdx}", // Note: your folder is 'component'
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Here we map the Material Theme variables to Tailwind classes
                primary: "var(--md-sys-color-primary)",
                "on-primary": "var(--md-sys-color-on-primary)",
                secondary: "var(--md-sys-color-secondary)",
                surface: "var(--md-sys-color-surface)",
                "on-surface": "var(--md-sys-color-on-surface)",
                "surface-container": "var(--md-sys-color-surface-container)",
                "on-surface-variant": "var(--md-sys-color-on-surface-variant)",
                background: "var(--md-sys-color-background)",
                "on-background": "var(--md-sys-color-on-background)",
                outline: "var(--md-sys-color-outline)",
            },
        },
    },
    plugins: [],
};
export default config;