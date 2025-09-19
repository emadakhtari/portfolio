"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Skeleton } from "@/components/ui/Skeleton";

export function GalleryDialogSkeleton({
    open,
    onOpenChange,
}: { open: boolean; onOpenChange: (v: boolean) => void }) {
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
                    {/* ✅ Accessible title (visually hidden) */}
                    <Dialog.Title className="sr-only">Loading project…</Dialog.Title>

                    <Dialog.Close asChild>
                        <button
                            className="absolute right-3 top-3 rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </Dialog.Close>

                    {/* Title skeleton */}
                    <div className="mb-4 flex justify-center">
                        <Skeleton className="h-7 w-56 rounded-md" />
                    </div>

                    {/* Info grid skeleton */}
                    <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="rounded-lg px-3 py-2 bg-neutral-50 dark:bg-white/[0.04]">
                                <Skeleton className="h-5 w-64 rounded-md" />
                            </div>
                        ))}
                    </div>

                    {/* Image area skeleton */}
                    <div className="rounded-xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10">
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                            <Skeleton className="absolute inset-0 rounded-none" />
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
