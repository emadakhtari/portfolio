"use client";
import { useEffect, useMemo, useState } from "react";

type DonutProps = {
    value: number;    // 0..100
    size?: number;    // px: outer size of svg
    stroke?: number;  // ring thickness
    title?: string;   // title under the chart
};

export default function Donut({ value, size = 140, stroke = 10, title }: DonutProps) {
    const v = Math.max(0, Math.min(100, value));
    const radius = (size - stroke) / 2;
    const circumference = useMemo(() => 2 * Math.PI * radius, [radius]);

    // animate the arc
    const [offset, setOffset] = useState(circumference);
    useEffect(() => {
        const target = circumference * (1 - v / 100);
        const id = requestAnimationFrame(() => setOffset(target));
        return () => cancelAnimationFrame(id);
    }, [v, circumference]);

    return (
        <div className="grid justify-items-center">
            <div className="relative" style={{ width: size, height: size }}>
                <svg
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    className="block"
                    aria-hidden
                >
                    {/* Rotate so the arc starts at 12 o'clock */}
                    <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
                        {/* Track (empty ring) */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            stroke="var(--donut-track)"
                            strokeWidth={stroke}
                        />
                        {/* Indicator (filled arc) */}
                        <circle
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            stroke="var(--donut-indicator)"
                            strokeWidth={stroke}
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            style={{ transition: "stroke-dashoffset 900ms cubic-bezier(.25,.1,.25,1)" }}
                        />
                    </g>
                </svg>

                {/* Center percentage */}
                <div
                    className="
    pointer-events-none absolute inset-0 flex items-center justify-center
    font-bold text-2xl
    text-[#666] dark:text-white
  "
                    aria-label={`${v}%${title ? ` ${title}` : ""}`}
                >
                    {v}
                    <span className="text-base ml-1">%</span>
                </div>
            </div>

            {/* Title */}
            {title && (
                <div className="mt-2 text-sm font-medium text-[#666] dark:text-white text-center">
                    {title}
                </div>
            )}
        </div>
    );
}
