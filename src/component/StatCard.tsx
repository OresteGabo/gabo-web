import React from 'react';

interface StatCardProps {
    label: string;
    value: string;
    growth: string;
}

export const StatCard = ({ label, value, growth }: StatCardProps) => (
    <div className="flex flex-col gap-1 border-b border-outline/10 pb-4 last:border-0 last:pb-0">
    <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant opacity-70">
      {label}
    </span>
        <div className="flex justify-between items-baseline">
            {/* value is now text-on-surface (High Contrast white/light) */}
            <span className="text-3xl font-black tracking-tighter text-on-surface">
        {value}
      </span>
            {/* growth now uses 'tertiary' which is the Material standard for accents/growth */}
            <span className="text-xs font-mono font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded-md">
        {growth}
      </span>
        </div>
    </div>
);