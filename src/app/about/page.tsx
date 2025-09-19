import * as React from "react";
import { X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";
import Donut from "@/components/elements/Donut";
import { Poppins } from "next/font/google";

export const metadata = {
    title: "Emad Akhtari",
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["800"], // ExtraBold
    variable: "--font-poppins",
});

type Stat = { value: string; lines: [string, string] };

const STATS: Stat[] = [
    { value: "16+", lines: ["YEARS OF", "EXPERIENCE"] },
    { value: "150+", lines: ["COMPLETED", "PROJECTS"] },
    { value: "135+", lines: ["HAPPY", "CUSTOMERS"] },
    { value: "20+", lines: ["COMPLETE MASTERY", "BACK‑END & FRONT‑END"] },
];

const STATSDonut = [
    { value: 65, title: "Solidity" },
    { value: 88, title: "Web3" },
    { value: 91, title: "ReactJS" },
    { value: 75, title: "React / Native" },
    { value: 88, title: "React / Next.js" },
    { value: 82, title: "Bootstrap" },
    { value: 90, title: "Tailwind CSS" },
    { value: 90, title: "MUI Framework" },
    { value: 81, title: "PHP" },
    { value: 90, title: "PHP Laravel" },
    { value: 95, title: "REST API" }
];

export default function AboutPage() {
    return (
        <section
            className={cn(
                "mx-auto max-w-6xl",
                "px-4 sm:px-6 lg:px-8",
                "py-10 md:py-14",

            )}
        >
            {/* Panel wrapper (adaptive theme) */}
            <div
                className={cn(
                    "relative rounded-xl",
                    "bg-[#ffffff] border-neutral-200",
                    "dark:bg-[#111111] dark:border-neutral-800",
                    "rounded-3xl border shadow-2xl outline-none",
                )}
            >
                {/* Header */}
                <div className="relative flex items-center justify-center px-4 sm:px-6 pt-10 md:pt-12">
                    {/* Foreground title */}
                    <div className="z-10 text-center">
                        <h1
                            className={cn(
                                "font-extrabold tracking-tight uppercase leading-[0.9] name-font-home",
                                "text-3xl sm:text-4xl md:text-5xl",
                            )}
                        >
                            <span style={{ color: "var(--about-muted)" }}>ABOUT </span>
                            <span className="name-font-home" style={{ color: "var(--heading)" }}>
                                ME
                            </span>
                        </h1>
                    </div>
                    <span
                        className={`${poppins.variable} font-sans hidden md:block`}
                        style={{
                            color: "var(--resume-text)",
                            fontSize: 110,
                            position: "absolute",
                            fontWeight: "bold",
                            marginTop: "-0.3rem"
                        }}
                    >
                        RESUME
                    </span>

                    {/* Watermark behind title (responsive & unobtrusive) */}
                    <span
                        className={cn(

                            "pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-extrabold uppercase opacity-10",
                            poppins.variable,
                            "font-sans",
                            "leading-none",
                            "text-[10vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw]",
                        )}
                        style={{ color: "var(--resume-text)" }}
                        aria-hidden="true"
                    >
                        RESUME
                    </span>
                </div>

                {/* Body */}
                <div className="p-5 sm:p-6 md:p-8">
                    {/* 2-col at md+ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {/* LEFT – Personal Infos */}
                        <section
                            className={cn(
                                "relative overflow-hidden rounded-2xl p-5 md:p-7 min-h-[22rem] box-border",
                                "text-neutral-900 dark:text-white"
                            )}
                        >
                            <h2
                                className="mb-6 name-font-home font-semibold tracking-tight uppercase"
                                style={{ color: "var(--heading)" }}
                            >
                                <span className="text-lg sm:text-xl md:text-3xl">Personal Infos</span>
                            </h2>

                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base">
                                <InfoItem label="First Name" value="Emad" />
                                <InfoItem label="Last Name" value="Akhtari" />
                                <InfoItem label="Age" value={<><b>36</b> <span className="font-normal">Years</span></>} />
                                <InfoItem label="Nationality" value="IRAN" />
                                <InfoItem label="Freelance" value={<span className="text-emerald-600 dark:text-emerald-400">Available</span>} />
                                <InfoItem label="Address" value="Karaj, Tehran" />
                                <InfoItem label="Phone" value={<a href="tel:+989125666716" className="hover:underline">+98 912 566 6716</a>} />
                                <InfoItem label="Email" value={<a href="mailto:akhtari.em1@gmail.com" className="hover:underline">akhtari.em1@gmail.com</a>} />
                                <InfoItem label="Languages" value="Persian, English" />
                                <InfoItem
                                    label="Github"
                                    value={
                                        <a
                                            href="https://github.com/emadakhtari"
                                            className="hover:underline name-font-home"
                                            style={{ color: "var(--heading)" }}
                                        >
                                            github.com/emadakhtari
                                        </a>
                                    }
                                />
                            </dl>

                            {/* CTA */}
                            <div className="mt-6">
                                <a
                                    href="/cv.pdf"
                                    download
                                    className={cn(
                                        "group relative isolate inline-flex items-center gap-3 rounded-full border pl-5",
                                        "h-11 md:h-12 text-sm tracking-wide transition-all bg-transparent overflow-hidden",
                                        "border-[var(--accent)]",
                                    )}
                                    style={{ color: "var(--home-muted)" }}
                                >
                                    <span
                                        className="pointer-events-none absolute inset-y-0 right-0 -z-[1] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"
                                        aria-hidden
                                    />
                                    <span className="z-10">DOWNLOAD CV</span>
                                    <span className="z-10 grid h-11 md:h-12 w-11 md:w-12 place-items-center rounded-full bg-[var(--accent)]">
                                        <ArrowRight size={16} />
                                    </span>
                                </a>
                            </div>
                        </section>

                        {/* RIGHT – Stats (2×2 on md+) */}
                        <section className="relative overflow-hidden p-4 md:p-6 box-border">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[10.5rem] items-stretch">
                                {STATS.map((s) => (
                                    <article
                                        key={s.value}
                                        className={cn(
                                            "h-full overflow-hidden rounded-xl p-4 md:p-5 box-border",
                                            "ring-1 ring-neutral-200 dark:ring-neutral-700/60",
                                        )}
                                    >

                                        <div className="flex h-full min-w-0 flex-col">
                                            <div className="leading-none">
                                                <div className="text-4xl font-extrabold tracking-tight text-amber-500 name-font-home">
                                                    {s.value.replace("+", "")}
                                                    <span className="align-top text-3xl md:text-4xl name-font-home">+</span>
                                                </div>
                                            </div>
                                            <div className="my-3 h-px w-12 bg-[rgb(115_115_115/0.5)]" />
                                            <div className="flex justify-center items-center h-full">
                                                <p className="text-left font-semibold uppercase leading-tight break-words">
                                                    <span className="block text-sm md:text-base text-neutral-400 text-center">{s.lines[0]}</span>
                                                    <span className="block text-base text-neutral-900 dark:text-white text-center">{s.lines[1]}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Divider */}
                    <hr className="my-8 md:my-10 border-t border-gray-300 dark:border-gray-700" />

                    {/* Skills title */}
                    <h2 className="text-center font-extrabold uppercase tracking-tight name-font-home text-2xl md:text-3xl" style={{ color: "var(--about-muted)" }}>
                        Some Of My Skills
                    </h2>

                    {/* Donut skills grid */}
                    <div
                        className={cn(
                            "mt-6 md:mt-8 rounded-xl p-6 md:p-8",
                            "bg-white text-neutral-900 dark:bg-[#111111] dark:text-white",
                            "[--donut-track:#eeeeee] dark:[--donut-track:#2b2a2a]",
                            "[--donut-indicator:#ffb400]",
                        )}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                            {STATSDonut.map((s) => (
                                <Donut key={s.title} value={s.value} title={s.title} />
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-8 md:my-10 border-t border-gray-300 dark:border-gray-700" />

                    {/* Experiences title */}
                    <h2 className="text-center font-extrabold uppercase tracking-tight name-font-home text-2xl md:text-3xl" style={{ color: "var(--about-muted)" }}>
                        Some Of My Experiences
                    </h2>

                    {/* Timeline (1 col → 2 cols) */}
                    <div
                        className={cn(
                            "mt-6 md:mt-8 rounded-xl p-6 md:p-8",
                            "bg-white text-neutral-900 dark:bg-[#111111] dark:text-white",
                        )}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* Column A */}
                            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                {TIMELINE_A.map((item) => (
                                    <TimelineItem key={item.title} {...item} />
                                ))}
                            </ol>

                            {/* Column B */}
                            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                {TIMELINE_B.map((item) => (
                                    <TimelineItem key={item.title} {...item} />
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ========== Small pieces ========== */

function InfoItem({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="min-w-0">
            <dt className="block text-neutral-500 dark:text-neutral-400">{label}</dt>
            <dd className="block font-semibold text-neutral-900 dark:text-white break-words">{value}</dd>
        </div>
    );
}

type TimelineProps = {
    title: string;
    date: string;
    body: React.ReactNode;
};

function TimelineItem({ title, date, body }: TimelineProps) {
    return (
        <li className="mb-10 ms-6">
            <span
                className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-3 ring-8 bg-[var(--accent)] ring-[var(--white)] dark:ring-[var(--dark)]"
                style={{ left: "-20px" }}
                aria-hidden="true"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24" height="24">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M15.9 14.5L19 21l-7-4-7 4 3.1-6.5" />
                </svg>
            </span>
            <h3 className="mb-1 text-base md:text-lg font-semibold text-gray-900 dark:text-white pl-4">{title}</h3>
            <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500 pl-4">{date}</time>
            <p className="text-sm md:text-base font-normal text-gray-600 dark:text-gray-400 pl-4">{body}</p>
        </li>
    );
}

/* ========== Timeline data (same content, cleaner structure) ========== */

const TIMELINE_A: TimelineProps[] = [
    {
        title: "The beginning of my programming career",
        date:
            "Started working professionally in April 2016 at Idea Pardazan Parax Aran Company",
        body:
            "I joined with little knowledge of HTML/CSS. Over time I learned frameworks like Bootstrap and, through varied tasks, became proficient.",
    },
    {
        title: "Start To Grow",
        date: "Around June 2017, at Idea Pardazan Parax Aran Company",
        body:
            "During this period I learned the PHP language and soon became fully comfortable with it.",
    },
    {
        title: "Getting Started with PHP Laravel",
        date: "Around May 2018, at Idea Pardazan Parax Aran Company",
        body:
            "I began using PHP Laravel in projects—both the web side and admin panel with roles and APIs.",
    },
    {
        title: "Self‑teaching ReactJS",
        date: "Around January 2018, at Idea Pardazan Parax Aran Company",
        body:
            "I taught myself ReactJS (and some React Native). By March 2019, I was fluent in ReactJS and fairly comfortable with React Native.",
    },
];

const TIMELINE_B: TimelineProps[] = [
    {
        title:
            "Leaving Idea Pardazan Parax Aran and joining Simorgh Samaneh Company",
        date: "Left Mar 2019 • Joined Apr 2020",
        body:
            "Working closely with the CEO let me learn any language I needed. I became proficient on both back‑end and front‑end and started as a senior programmer.",
    },
    {
        title: "Huge growth at Simorgh Samaneh Company",
        date: "From April 2020 to now",
        body: (
            <>
                Since joining I’ve mastered multiple stacks and delivered many startups:
                <br />
                <b className="name-font-home" style={{ color: "var(--heading)" }}>
                    Solidity, Web3, React / Native, React / Next.js
                </b>
                {" "}and more. Also comfortable with project tools:{" "}
                <b className="name-font-home" style={{ color: "var(--heading)" }}>
                    Jira, Trello, Linear, ClickUp
                </b>
            </>
        ),
    },
    {
        title:
            "About Simorgh Samaneh Company",
        date: "From April 2020 to now",
        body: (
            <>
                Unfortunately, this company has a problem for me. It signs startup contracts with very large holding companies, and the company has a rule that sensitive and large projects require me to sign a <b className="name-font-home" style={{ color: "var(--heading)" }}>Non-Disclosure Agreement (NDA)</b>, because all these types of startups were and are completely new ideas, And the main employers are holding companies such as the internet service provider Zitel, the Persepolis F.C groups, and even ministries and banks, etc.
                <br />
                <br />
                {" "}But if necessary, to the extent permitted, I will explain these projects with codes and provide the necessary explanations for the audience.{" "}
                <br />
                <br />
                {" "}But there are also projects that do not have a non-disclosure agreement (NDA) and I can show them in full.{" "}
                .
            </>
        ),
    },
];

