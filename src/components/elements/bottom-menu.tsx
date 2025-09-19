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

export default function BottomMenu() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Primary"
            className="bottom-menu lg:hidden"
        >
            <div className="bottom-menu__inner">
                <ul className="bottom-menu__list">
                    {items.map(({ href, label, Icon }) => {
                        const active = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    aria-label={label}
                                    aria-current={active ? "page" : undefined}
                                    className={cn("bottom-btn", active && "is-active")}
                                >
                                    <Icon size={20} />
                                </Link>


                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
