"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useCallback } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const handleClick = useCallback(() => {
        setTheme(theme === "dark" ? "light" : "dark");
    }, [theme, setTheme]);

    return (
        <button
            aria-label="Toggle theme"
            onClick={handleClick}
            className="theme-btn"
            title="Toggle theme"
        >
            {/* Render both; CSS shows the correct one per theme */}
            <Sun size={18} className="icon-sun" aria-hidden="true" />
            <Moon size={18} className="icon-moon" aria-hidden="true" />
        </button>
    );
}
