"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { X, FileText, User, Code2, ExternalLink } from "lucide-react";
import * as React from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import { GalleryDialogSkeleton } from "@/components/elements/portfolio/GalleryDialogSkeleton";

/* ---------- DATA ---------- */
type PhotoInfo = {
    id: string;
    src: string;
    title: string;
    project: string;
    client: string;
    languages: string;
    preview?: string;
};

const PHOTOS: PhotoInfo[] = [
    // ... (same data you already have)
    { id: "a1", src: "/gallery/a1.jpg", title: "Slider Project", project: "Website", client: "Themeforest", languages: "HTML, CSS, JavaScript", },
    { id: "a2", src: "/gallery/a2.jpg", title: "Landing Hero", project: "Website", client: "Internal", languages: "React, Tailwind", preview: "https://example.com" },
    { id: "a3", src: "/gallery/a3.jpg", title: "Mobile App Shots", project: "Mobile", client: "Acme Inc.", languages: "React Native" },
    { id: "a4", src: "/gallery/a4.jpg", title: "Dashboard", project: "Web App", client: "Fintech", languages: "Next.js, TypeScript" },
    { id: "a5", src: "/gallery/a5.jpg", title: "Illustrations", project: "Branding", client: "Studio", languages: "Figma" },
    { id: "a6", src: "/gallery/a6.jpg", title: "E commerce", project: "Website", client: "Shoply", languages: "Next.js, Stripe" },
    { id: "a7", src: "/gallery/a7.jpg", title: "Blog System", project: "CMS", client: "Editorial", languages: "Next.js, MDX" },
    { id: "a8", src: "/gallery/a8.jpg", title: "Photography", project: "Portfolio", client: "Freelance", languages: "Next.js, Tailwind" },
    { id: "a9", src: "/gallery/a9.jpg", title: "Marketing Site", project: "Website", client: "SaaS", languages: "Next.js, SEO" },
    { id: "a10", src: "/gallery/a10.jpg", title: "Animations", project: "UI/UX", client: "MotionLab", languages: "Framer Motion" },
    { id: "a11", src: "/gallery/a11.jpg", title: "Analytics", project: "Dashboard", client: "DataCo", languages: "Next.js, d3.js" },
    { id: "a12", src: "/gallery/a12.jpg", title: "Bookings", project: "Web App", client: "Travel", languages: "Next.js, Prisma" },
];

/* ---------- UTILS ---------- */
function chunk<T>(arr: T[], size: number): T[][] {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}
const rows = chunk(PHOTOS, 3);
const FIRST_LOAD_ROWS = 2;

/* ---------- ANIMATIONS ---------- */
const containerEnter = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const rowVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.12 } },
};
const cardVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ---------- COMPONENT ---------- */
export default function PhotoGallery() {
    const [open, setOpen] = React.useState(false);
    const [active, setActive] = React.useState<PhotoInfo | null>(null);
    const [dialogImageLoaded, setDialogImageLoaded] = React.useState(false);

    const onOpen = (item: PhotoInfo) => {
        setActive(item);
        setDialogImageLoaded(false); // reset for skeleton
        setOpen(true);
    };

    return (
        <>
            {/* GALLERY */}
            <motion.div initial={containerEnter.initial} animate={containerEnter.animate} className="mx-auto max-w-6xl p-6">
                <div className="space-y-6">
                    {rows.map((row, rowIndex) => {
                        const BaseRow = (
                            <motion.div
                                key={rowIndex}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                variants={rowVariants}
                                transition={{ delay: rowIndex * 0.15 }}
                            >
                                {row.map((item, i) => (
                                    <Card key={item.id} item={item} onClick={() => onOpen(item)} priority={rowIndex === 0 && i < 3} />
                                ))}
                            </motion.div>
                        );
                        if (rowIndex < FIRST_LOAD_ROWS) {
                            return React.cloneElement(BaseRow, { initial: "hidden", animate: "show" });
                        }
                        return React.cloneElement(BaseRow, {
                            initial: "hidden",
                            whileInView: "show",
                            viewport: { once: false, amount: 0.35 },
                        });
                    })}
                </div>
            </motion.div>

            {/* DIALOG (skeleton + content) */}
            {/* Skeleton while image is loading */}
            {open && (
                <GalleryDialog
                    open={open}
                    onOpenChange={setOpen}
                    active={active}
                />
            )}

            {/* Real dialog once image loaded (or immediately, if cached) */}
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
                    <Dialog.Content
                        className="
              fixed left-1/2 top-1/2 z-50
              w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2
              rounded-2xl border border-black/10 bg-white text-neutral-800 shadow-2xl
              dark:bg-[#121212] dark:text-neutral-100 dark:border-white/10
              p-5 sm:p-6 max-h-[85vh] overflow-auto
            "
                    >
                        <Dialog.Close asChild>
                            <button className="absolute right-3 top-3 rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10" aria-label="Close">
                                <X className="h-5 w-5" />
                            </button>
                        </Dialog.Close>

                        <Dialog.Title className="mb-4 text-center text-2xl font-extrabold tracking-tight text-amber-500">
                            {active?.title ?? "Project"}
                        </Dialog.Title>

                        {active && (
                            <>
                                {/* info grid */}
                                <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <InfoRow icon={<FileText className="h-4 w-4 opacity-70" />} label="Project" value={active.project} />
                                    <InfoRow icon={<User className="h-4 w-4 opacity-70" />} label="Client" value={active.client} />
                                    <InfoRow icon={<Code2 className="h-4 w-4 opacity-70" />} label="Language" value={active.languages} />
                                    <InfoRow
                                        icon={<ExternalLink className="h-4 w-4 opacity-70" />}
                                        label="Preview"
                                        value={
                                            active.preview ? (
                                                <a className="underline decoration-amber-500 underline-offset-4 hover:opacity-80" href={active.preview} target="_blank" rel="noreferrer">
                                                    {active.preview.replace(/^https?:\/\//, "")}
                                                </a>
                                            ) : ("—")
                                        }
                                    />
                                </div>

                                {/* full image (fires 'onLoadingComplete' to hide skeleton modal) */}
                                <div className="rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
                                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                                        <Image
                                            src={active.src}
                                            alt={active.title}
                                            fill
                                            className="object-contain bg-neutral-100 dark:bg-neutral-900"
                                            sizes="(min-width: 800px) 768px, 100vw"
                                            priority
                                            // onLoadingComplete={() => setDialogImageLoaded(true)}
                                            onLoad={() => setLoaded(true)}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

/* ---------- Card with inline skeleton ---------- */
function Card({ item, onClick, priority }: { item: PhotoInfo; onClick: () => void; priority?: boolean }) {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <motion.button
            type="button"
            variants={cardVariants}
            onClick={onClick}
            className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-black/10 shadow-sm bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={`Open details for ${item.title}`}
        >
            {/* image */}
            <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className={[
                    "object-cover object-top transition-all duration-700 ease-in-out group-hover:object-bottom",
                    loaded ? "opacity-100" : "opacity-0",
                ].join(" ")}
                priority={priority}
                // onLoadingComplete={() => setLoaded(true)}
                onLoad={() => setLoaded(true)}
            />
            {/* card skeleton overlay while image loads */}
            {!loaded && <Skeleton className="absolute inset-0 rounded-none" />}

            {/* title overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent flex items-end p-3">
                <span className="text-white text-sm font-medium drop-shadow">
                    {item.title}
                </span>
            </div>
        </motion.button>
    );
}

/* ---------- Info row ---------- */
function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode; }) {
    return (
        <div className="flex items-start gap-2 rounded-lg bg-neutral-50 dark:bg-white/[0.04] px-3 py-2">
            <div className="mt-0.5">{icon}</div>
            <div className="text-sm">
                <span className="opacity-70">{label}: </span>
                <span className="font-semibold">{value}</span>
            </div>
        </div>
    );
}
function GalleryDialog({
    open,
    onOpenChange,
    active,
}: {
    open: boolean;
    onOpenChange: (v: boolean) => void;
    active: {
        title: string;
        project: string;
        client: string;
        languages: string;
        preview?: string;
        src: string;
    } | null;
}) {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
                <Dialog.Content
                    className="
            fixed left-1/2 top-1/2 z-50
            w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2
            rounded-2xl border border-black/10 bg-white text-neutral-800 shadow-2xl
            dark:bg-[#121212] dark:text-neutral-100 dark:border-white/10
            p-5 sm:p-6 max-h-[85vh] overflow-auto
          "
                >
                    {/* ✅ Required by Radix for a11y */}
                    <Dialog.Title className="mb-4 text-center text-2xl font-extrabold tracking-tight text-amber-500">
                        {active?.title ?? "Project"}
                    </Dialog.Title>

                    <Dialog.Close asChild>
                        <button
                            className="absolute right-3 top-3 rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </Dialog.Close>

                    {active && (
                        <>
                            {/* Info grid */}
                            <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <InfoRow label="Project" value={active.project} />
                                <InfoRow label="Client" value={active.client} />
                                <InfoRow label="Language" value={active.languages} />
                                <InfoRow
                                    label="Preview"
                                    value={
                                        active.preview ? (
                                            <a
                                                className="underline decoration-amber-500 underline-offset-4 hover:opacity-80"
                                                href={active.preview}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {active.preview.replace(/^https?:\/\//, "")}
                                            </a>
                                        ) : (
                                            "—"
                                        )
                                    }
                                />
                            </div>

                            {/* Image with skeleton */}
                            <div className="rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
                                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                                    {/* skeleton underneath; fades when image loads */}
                                    <div className={`absolute inset-0 ${loaded ? "opacity-0" : "opacity-100"} transition-opacity`}>
                                        <div className="relative h-full w-full overflow-hidden bg-neutral-200/80 dark:bg-neutral-800/80">
                                            <div className="absolute inset-0 animate-pulse" />
                                        </div>
                                    </div>

                                    <Image
                                        src={active.src}
                                        alt={active.title}
                                        fill
                                        className={`object-contain bg-neutral-100 dark:bg-neutral-900 transition-opacity ${loaded ? "opacity-100" : "opacity-0"}`}
                                        sizes="(min-width: 800px) 768px, 100vw"
                                        priority
                                        // onLoadingComplete={() => setLoaded(true)}
                                        onLoad={() => setLoaded(true)}
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}


