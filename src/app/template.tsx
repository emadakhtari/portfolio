"use client";

export default function Template({ children }: { children: React.ReactNode }) {
    // This component remounts on navigation (App Router behavior),
    // so the CSS animation runs each time you change routes.
    return <div className="page-enter">{children}</div>;
}
