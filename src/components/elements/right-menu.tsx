"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User2, Briefcase, Mail, Newspaper } from "lucide-react";
import { cn } from "@/lib/cn";

const items = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/about", label: "About", Icon: User2 },
    { href: "/portfolio", label: "Portfolio", Icon: Briefcase },
    { href: "/contact", label: "Contact", Icon: Mail },
];

export default function RightMenu() {
    const pathname = usePathname();

    return (
        <nav
            className="
    fixed right-5 top-1/2 z-20 -translate-y-1/2
    hidden lg:flex w-[168px] flex-col items-end space-y-4
  "
        >

            {items.map(({ href, label, Icon }) => {
                const active = pathname === href;
                return (
                    <Link
                        key={href}
                        href={href}
                        aria-label={label}
                        className={cn(
                            "menu-pill group ml-auto",                 // right-anchored pill
                            active && "is-active"
                        )}
                    >
                        {/* LABEL FIRST so it sits to the LEFT of icon in a right-aligned pill */}
                        <span className="menu-label">{label}</span>
                        <span className="menu-icon">
                            <Icon size={18} />
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}
