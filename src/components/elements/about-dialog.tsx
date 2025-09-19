"use client";

import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { cn } from "@/lib/cn";
import Donut from "@/components/elements/Donut";
import { Poppins } from "next/font/google";

// Load only ExtraBold (800)
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
    { value: "20+", lines: ["COMlETE MASTERY", "BACK-END & FRONT-END"] },
];

const STATSDonut = [
    { value: 65, title: "Solidity" },
    { value: 88, title: "Web3" },
    { value: 91, title: "ReactJs" },
    { value: 75, title: "React / Native" },
    { value: 88, title: "React / Next.js" },
    { value: 82, title: "Bootstrap" },
    { value: 90, title: "Tailwind CSS" },
    { value: 90, title: "MUI Fraimvork" },
    { value: 81, title: "PHP" },
    { value: 90, title: "PHP Laravel" },
    { value: 95, title: "Rest API" },
];

const slideUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 1.6, ease: [0.25, 0.1, 0.25, 1] } },
    exit: { opacity: 0, y: 40, transition: { duration: 0.25 } },
};

export function AboutDialogTrigger({ className }: { className?: string }) {
    const [open, setOpen] = React.useState(false);

    return (
        <MotionConfig reducedMotion="user">
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <button
                        className={cn(
                            "group relative isolate inline-flex items-center gap-3 rounded-full border border-[var(--accent)] pl-5",
                            "h-12 text-sm tracking-wide transition-all bg-transparent overflow-hidden",
                            className
                        )}
                        style={{ color: "var(--home-muted)" }}
                    >
                        <span
                            className="pointer-events-none absolute inset-y-0 right-0 -z-[1] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full"
                            aria-hidden
                        />
                        <span className="z-10">MORE ABOUT ME</span>
                        <span className="z-10 grid h-12 w-12 place-items-center rounded-full bg-[var(--accent)]">
                            <ArrowRight size={16} />
                        </span>
                    </button>
                </Dialog.Trigger>

                <AnimatePresence>
                    {open && (
                        <Dialog.Portal forceMount>
                            {/* Overlay (clicking it will close automatically now) */}
                            <Dialog.Overlay asChild>
                                <motion.div

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.25 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                />
                            </Dialog.Overlay>

                            {/* Make Content the PANEL (not a full-screen container) */}
                            <Dialog.Content
                                className={cn(
                                    "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
                                    "w-[95vw] max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl",
                                    "max-h-[85vh] overflow-y-auto rounded-3xl border shadow-2xl outline-none",
                                    "bg-[#ffffff] border-neutral-200",
                                    "dark:bg-[#111111] dark:border-neutral-800"
                                )}
                                /* ESC closes by default; this just ensures no interference */
                                onEscapeKeyDown={() => setOpen(false)}
                            >
                                {/* Close button */}
                                <Dialog.Close
                                    className={cn(
                                        "absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full outline-none z-[1]",
                                        "theme-btn-dialog-cloce dialog-cloce"
                                    )}
                                    aria-label="Close"
                                >
                                    <X size={20} style={{ color: "rgb(115 115 115 / var(--tw-text-opacity))" }} />
                                </Dialog.Close>

                                {/* Animated inner content */}
                                <motion.div
                                    key="about-content"
                                    initial={slideUp.initial}
                                    animate={slideUp.animate}
                                    exit={slideUp.exit}
                                    className="p-8 md:p-10"
                                >
                                    {/* Header */}
                                    <div className="mb-12 mt-2 flex items-center justify-center relative">
                                        <div className="text-2xl font-semibold">
                                            <div className="h1-51 font-extrabold tracking-tight uppercase leading-tight name-font-home z-10 relative font-poppins" style={{ fontSize: 50, lineHeight: "0.83" }}>
                                                <span style={{ color: "var(--about-muted)" }}>ABOUT</span>
                                                <span className="name-font-home" style={{ color: "var(--heading)" }}>ME</span>
                                            </div>
                                        </div>

                                        <span
                                            className={`${poppins.variable}  font-sans `}
                                            style={{ color: "var(--resume-text)", fontSize: 110, position: "absolute", fontWeight: 'bold', marginTop: '-0.3rem' }}
                                        >
                                            RESUME
                                        </span>
                                    </div>

                                    {/* Body: two columns */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* LEFT – Personal Infos */}
                                        <section
                                            className={cn(
                                                "relative overflow-hidden rounded-2xl p-5 md:p-7 min-h-[22rem] box-border",
                                                "text-neutral-900 dark:text-white"
                                            )}
                                        >
                                            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-6 name-font-home" style={{ color: "var(--heading)" }}>
                                                PERSONAL INFOS
                                            </h2>

                                            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm md:text-base">
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">First Name</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white break-words">Emad</dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Last Name</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white break-words">Akhtari</dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Age</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white">
                                                        36 <span className="font-normal">Years</span>
                                                    </dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Nationality</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white break-words">IRAN</dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Freelance</dt>
                                                    <dd className="block font-semibold text-emerald-600 dark:text-emerald-400">Available</dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Address</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white break-words">Karaj, Tehran</dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Phone</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white break-words">
                                                        <a href="tel:+989125666716" className="hover:underline">+98 912 566 6716</a>
                                                    </dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Email</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white break-words">
                                                        <a href="mailto:akhtari.em1@gmail.com" className="hover:underline">akhtari.em1@gmail.com</a>
                                                    </dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Languages</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white break-words">Persian, English</dd>
                                                </div>
                                                <div className="min-w-0">
                                                    <dt className="block text-neutral-500 dark:text-neutral-400">Github</dt>
                                                    <dd className="block font-semibold text-neutral-900 dark:text-white break-words name-font-home" style={{ color: "var(--heading)" }}>
                                                        <a href="https://github.com/emadakhtari" className="hover:underline">github.com/emadakhtari</a>
                                                    </dd>
                                                </div>
                                            </dl>

                                            {/* CTA */}
                                            <div className="mt-6">
                                                <a
                                                    href="/cv.pdf"
                                                    download
                                                    className={cn(
                                                        "group relative isolate inline-flex items-center gap-3 rounded-full border border-[var(--accent)] pl-5",
                                                        "h-12 text-sm tracking-wide transition-all bg-transparent overflow-hidden"
                                                    )}
                                                    style={{ color: "var(--home-muted)" }}
                                                >
                                                    <span className="pointer-events-none absolute inset-y-0 right-0 -z-[1] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" aria-hidden />
                                                    <span className="z-10">DOWNLOAD CV</span>
                                                    <span className="z-10 grid h-12 w-12 place-items-center rounded-full bg-[var(--accent)]">
                                                        <ArrowRight size={16} />
                                                    </span>
                                                </a>
                                            </div>
                                        </section>

                                        {/* RIGHT – 2×2 Stats */}
                                        <section className="relative overflow-hidden p-4 md:p-6 box-border">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[10.5rem] items-stretch">
                                                {STATS.map((s) => (
                                                    <article
                                                        key={s.value}
                                                        className={cn(
                                                            "h-full overflow-hidden rounded-xl p-4 md:p-5 box-border",
                                                            "ring-1 ring-neutral-200 dark:ring-neutral-700/60"
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

                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />

                                    <Dialog.Title className="text-2xl font-semibold">
                                        <div className="h4-25 font-extrabold tracking-tight uppercase leading-tight name-font-home z-10 relative">
                                            <span className="text-center h-full block p-5" style={{ color: "var(--about-muted)" }}>Some Of My Skills</span>
                                        </div>
                                    </Dialog.Title>

                                    <div
                                        className="
                      grid place-items-center bg-white text-neutral-900 dark:bg-[#111111] dark:text-white p-8 w-full
                      [--donut-track:#eeeeee] dark:[--donut-track:#2b2a2a]
                      [--donut-indicator:#ffb400] dark:[--donut-indicator:#ffb400]
                    "
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 auto-rows-[10.5rem] items-stretch w-full">
                                            {STATSDonut.map((s) => (
                                                <Donut key={s.title} value={s.value} title={s.title} />
                                            ))}
                                        </div>
                                    </div>
                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />
                                    <Dialog.Title className="text-2xl font-semibold">
                                        <div className="h4-25 font-extrabold tracking-tight uppercase leading-tight name-font-home z-10 relative">
                                            <span className="text-center h-full block p-5" style={{ color: "var(--about-muted)" }}>Some Of My Experiences</span>
                                        </div>
                                    </Dialog.Title>

                                    <div
                                        className="
                      grid place-items-center bg-white text-neutral-900 dark:bg-[#111111] dark:text-white p-8 w-full
                      [--donut-track:#eeeeee] dark:[--donut-track:#2b2a2a]
                      [--donut-indicator:#ffb400] dark:[--donut-indicator:#ffb400]
                    "
                                    >
                                        <div className="grid grid-cols-2 md:grid-cols-2
                                         gap-12">
                                            <div className="grid justify-items-center">
                                                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                                                    <li className="mb-10 ms-6">
                                                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-3 ring-8 bg-[var(--accent)] ring-[var(--white)] dark:ring-[var(--dark)]" style={{ left: "-20px" }} >


                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                width="24" height="24">
                                                                <circle cx="12" cy="8" r="6" />
                                                                <path d="M15.9 14.5L19 21l-7-4-7 4 3.1-6.5" />
                                                            </svg>
                                                        </span>
                                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white pl-4">
                                                            The beginning of my programming career
                                                        </h3>
                                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pl-4">
                                                            Started working professionally, in April 2016, at Idea Pardazan Parax Aran Company
                                                        </time>
                                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-4">
                                                            At this point, when I joined the company, I had little knowledge about HTML-CSS. But when I started working, I gradually became familiar with frameworks like Bootstrap, and after a while, by doing various tasks, I became almost a pro at these frameworks.
                                                        </p>
                                                    </li>
                                                    <li className="mb-10 ms-6">
                                                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-3 ring-8 bg-[var(--accent)] ring-[var(--white)] dark:ring-[var(--dark)]" style={{ left: "-20px" }} >
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                width="24" height="24">
                                                                <circle cx="12" cy="8" r="6" />
                                                                <path d="M15.9 14.5L19 21l-7-4-7 4 3.1-6.5" />
                                                            </svg>
                                                        </span>
                                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white pl-4">
                                                            Start To Grow
                                                        </h3>
                                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pl-4">
                                                            Around June 2017, at Idea Pardazan Parax Aran Company
                                                        </time>
                                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-4">
                                                            During this time, I gradually became familiar with the PHP language. And very soon I became completely familiar with this language.
                                                        </p>
                                                    </li>
                                                    <li className="mb-10 ms-6">
                                                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-3 ring-8 bg-[var(--accent)] ring-[var(--white)] dark:ring-[var(--dark)]" style={{ left: "-20px" }} >
                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                width="24" height="24">
                                                                <circle cx="12" cy="8" r="6" />
                                                                <path d="M15.9 14.5L19 21l-7-4-7 4 3.1-6.5" />
                                                            </svg>
                                                        </span>
                                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white pl-4">
                                                            Getting Started with PHP Laravel
                                                        </h3>
                                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pl-4">
                                                            Around May 2018, at Idea Pardazan Parax Aran Company
                                                        </time>
                                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-4">
                                                            During this period of time, I started using PHP Laravel in projects. Both the web side and the user panel side with different accesses and dynamics and APIs.
                                                        </p>
                                                    </li>
                                                    <li className="mb-10 ms-6">
                                                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-3 ring-8 bg-[var(--accent)] ring-[var(--white)] dark:ring-[var(--dark)]" style={{ left: "-20px" }} >

                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                width="24" height="24">
                                                                <circle cx="12" cy="8" r="6" />
                                                                <path d="M15.9 14.5L19 21l-7-4-7 4 3.1-6.5" />
                                                            </svg>
                                                        </span>
                                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white pl-4">
                                                            I began to self-teach with ReactJS in my spare time
                                                        </h3>
                                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pl-4">
                                                            Around January 2018, at Idea Pardazan Parax Aran Company
                                                        </time>
                                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-4">
                                                            At this time, I started self-taught ReactJS and to some extent React Native until March 2019 when I left the company, when I left the company.
                                                            By the time I left, I was almost completely fluent in ReactJS and had learned React Native to a large extent.
                                                        </p>
                                                    </li>
                                                </ol>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-1
                                         gap-2">
                                                <ol className="relative border-s border-gray-200 dark:border-gray-700">

                                                    <li className="mb-10 ms-6">
                                                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-3 ring-8 bg-[var(--accent)] ring-[var(--white)] dark:ring-[var(--dark)]" style={{ left: "-20px" }} >

                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                width="24" height="24">
                                                                <circle cx="12" cy="8" r="6" />
                                                                <path d="M15.9 14.5L19 21l-7-4-7 4 3.1-6.5" />
                                                            </svg>
                                                        </span>
                                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white pl-4">
                                                            Leaving Idea Pardazan Parax Aran and joining Simorgh Samaneh Company
                                                        </h3>
                                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pl-4">
                                                            Leaving Idea Pardazan Parax Company, March 2019 and joining Simorgh Samaneh Company, April 2020
                                                        </time>
                                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-4">
                                                            Joining Simorgh Samaneh was a turning point in my career. Because I worked directly with the CEO, and he allowed me to learn any programming language I needed whenever I needed it, regardless of what I was going to do. That's why during my time at this company, I became proficient in various programming languages. Both back-end and front-end.
                                                            <br />
                                                            I also started working as a senior programmer when I joined the company.
                                                        </p>
                                                    </li>
                                                    <li className="mb-10 ms-6">
                                                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-3 ring-8 bg-[var(--accent)] ring-[var(--white)] dark:ring-[var(--dark)]" style={{ left: "-20px" }} >

                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                width="24" height="24">
                                                                <circle cx="12" cy="8" r="6" />
                                                                <path d="M15.9 14.5L19 21l-7-4-7 4 3.1-6.5" />
                                                            </svg>
                                                        </span>
                                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white pl-4">
                                                            Huge growth at Simorgh Samaneh Company
                                                        </h3>
                                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pl-4">
                                                            From April 2020 to now
                                                        </time>
                                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-4">
                                                            Since I joined Simorgh Samaneh, I have mastered various languages and have completed many startup projects using those languages.
                                                            <br />
                                                            <span className="name-font-home" style={{ color: "var(--heading)" }}>Solidity, </span>
                                                            <span className="name-font-home" style={{ color: "var(--heading)" }}>Web3, </span>
                                                            <span className="name-font-home" style={{ color: "var(--heading)" }}>React / Native, </span>
                                                            <span className="name-font-home" style={{ color: "var(--heading)" }}>React / Next.js & ... </span>
                                                            <br />
                                                            And also complete familiarity with project management tools like:
                                                            <br />
                                                            <span className="name-font-home" style={{ color: "var(--heading)" }}>Jira, </span>
                                                            <span className="name-font-home" style={{ color: "var(--heading)" }}>Trello, </span>
                                                            <span className="name-font-home" style={{ color: "var(--heading)" }}>Linear, </span>
                                                            <span className="name-font-home" style={{ color: "var(--heading)" }}>& ClickUp </span>
                                                        </p>
                                                    </li>

                                                    <li className="mb-10 ms-6">
                                                        <span className="absolute flex items-center justify-center w-10 h-10 rounded-full -start-3 ring-8 bg-[var(--accent)] ring-[var(--white)] dark:ring-[var(--dark)]" style={{ left: "-20px" }} >

                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                fill="none" stroke="currentColor"
                                                                strokeWidth="2"
                                                                viewBox="0 0 24 24"
                                                                width="24" height="24">
                                                                <circle cx="12" cy="8" r="6" />
                                                                <path d="M15.9 14.5L19 21l-7-4-7 4 3.1-6.5" />
                                                            </svg>
                                                        </span>
                                                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white pl-4">
                                                            About Simorgh Samaneh Company
                                                        </h3>
                                                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 pl-4">
                                                            From April 2020 to now
                                                        </time>
                                                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 pl-4">
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
                                                        </p>
                                                    </li>
                                                </ol>
                                            </div>

                                        </div>

                                    </div>
                                </motion.div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    )}
                </AnimatePresence>
            </Dialog.Root>
        </MotionConfig>
    );
}
