import * as React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
    rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};

const radiusMap = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
};

export function Skeleton({ className = "", rounded = "md", ...props }: Props) {
    return (
        <div
            className={[
                "skeleton-base",
                radiusMap[rounded],
                className,
            ].join(" ")}
            {...props}
        />
    );
}
