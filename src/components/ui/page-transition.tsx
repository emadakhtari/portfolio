"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <MotionConfig reducedMotion="user">
            {/* allow first-mount animation */}
            <AnimatePresence mode="wait" initial={true}>
                <motion.div
                    key={pathname}
                    // slide in from top (no fade)
                    initial={{ y: -28 }}
                    animate={{
                        y: 0,
                        transition: { type: "spring", stiffness: 80, damping: 32 }, // adjust speed here
                    }}
                    // previous page unmounts immediately
                    exit={{}}
                    className="min-h-screen w-full transform-gpu"
                    style={{ willChange: "transform" }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </MotionConfig>
    );
}
