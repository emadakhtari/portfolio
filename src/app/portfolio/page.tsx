import * as React from "react";
import { cn } from "@/lib/cn";
import PhotoGallery from "@/components/elements/PhotoGallery";

export const metadata = {
    title: "Emad Akhtari",
};


import { Poppins } from "next/font/google";

// Load only ExtraBold (800)
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["800"], // ExtraBold
    variable: "--font-poppins",
});



export default function PortfolioPage() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <div
                className={cn(
                    "relative z-50 rounded-xl",
                    "bg-[#ffffff] border-neutral-200",
                    "dark:bg-[#111111] dark:border-neutral-800"
                )}
            >
                <div
                    key="about-content"
                    className="p-8 md:p-10"
                >

                    {/* Header */}
                    <div className="mb-12 mt-2 flex items-center justify-center relative">
                        <div className="text-2xl font-semibold">
                            <div className="h1-51 font-extrabold tracking-tight uppercase leading-tight name-font-home z-10 relative font-poppins" style={{ fontSize: 50, lineHeight: "0.83" }}>
                                <span style={{ color: "var(--about-muted)" }}>MY</span>
                                <span className="name-font-home" style={{ color: "var(--heading)" }}>PORTFOLIO</span>
                            </div>
                        </div>

                        <span
                            className={`${poppins.variable} font-sans hidden md:block`}
                            style={{ color: "var(--resume-text)", fontSize: 110, position: "absolute", fontWeight: 'bold', marginTop: '-0.3rem' }}
                        >

                            WORKS
                        </span>
                    </div>

                    <main className="min-h-screen ">
                        <PhotoGallery />
                    </main>
                </div>
            </div>
        </section>
    );
}
