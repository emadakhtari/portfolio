"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import ContactForm from "@/components/elements/ContactForm";
import { Poppins } from "next/font/google";

// Load only ExtraBold (800)
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["800"],
    variable: "--font-poppins",
});

export default function ContactContent() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prev) => !prev); // toggle
    };

    return (
        <section className="mx-auto max-w-5xl px-6 py-16">
            <div
                className={cn(
                    "relative z-50 rounded-xl",
                    "bg-[#ffffff] border-neutral-200",
                    "dark:bg-[#111111] dark:border-neutral-800"
                )}
            >
                <div key="about-content" className="p-8 md:p-10">
                    {/* Header */}
                    <div className="mb-12 mt-2 flex items-center justify-center relative">
                        <div className="text-2xl font-semibold">
                            <div
                                className="h1-51 font-extrabold tracking-tight uppercase leading-tight name-font-home z-10 relative font-poppins"
                                style={{ fontSize: 50, lineHeight: "0.83" }}
                            >
                                <span style={{ color: "var(--about-muted)", paddingRight: ".3rem" }}>GET</span>
                                <span style={{ color: "var(--about-muted)" }}>IN</span>
                                <span className="name-font-home" style={{ color: "var(--heading)" }}>TOUCH</span>
                            </div>
                        </div>

                        <span
                            className={`${poppins.variable} font-sans hidden md:block`}
                            style={{
                                color: "var(--resume-text)",
                                fontSize: 110,
                                position: "absolute",
                                fontWeight: "bold",
                                marginTop: "-0.3rem",
                            }}
                        >
                            CONTACT
                        </span>
                    </div>

                    <main className="min-h-screen ">
                        <div className="p-5 sm:p-6 md:p-8 contact-main">
                            <div
                                className="relative w-full grid grid-cols-1 items-center
                           px-6 md:px-10 xl:px-14 2xl:px-20
                           gap-8 lg:gap-8
                           lg:grid-cols-[minmax(0,25vw)_1fr] contact-index "
                            >
                                <div className="relative">
                                    <section
                                        className={cn(
                                            "relative overflow-hidden rounded-2xl p-5 md:p-7 min-h-[22rem] box-border",
                                            "text-neutral-900 dark:text-white"
                                        )}
                                    >
                                        <h2
                                            className="mb-6 name-font-home font-semibold tracking-tight"
                                            style={{ color: "var(--heading)" }}
                                        >
                                            <span className="text-lg sm:text-xl md:text-3xl pb-3 block">
                                                Don't be shy !
                                            </span>
                                        </h2>
                                        <p className="mb-6 block font-semibold text-neutral-900 dark:text-white break-words font-weight-normal">
                                            Feel free to get in touch with me.
                                            <br />
                                            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                        </p>
                                        <p className="mb-8 pl-12 block font-semibold text-neutral-900 dark:text-white break-words relative font-weight-normal text-sm">
                                            <i className="svg-mask svg-map w-5 h-5 text-amber-500 contact-svg-map absolute" aria-hidden />
                                            <span className="block text-neutral-500 dark:text-neutral-400 font-weight-normal text-sm pb-1">
                                                Address Point
                                            </span>
                                            No.145 - Shora .av Karaj, Alborz, Iran.
                                        </p>

                                        <p className="mb-8 pl-12 block font-semibold text-neutral-900 dark:text-white break-words relative font-weight-normal text-sm">
                                            <i className="svg-mask svg-email-contact w-5 h-5 text-amber-500 contact-svg-email absolute" aria-hidden />
                                            <span className="block text-neutral-500 dark:text-neutral-400 font-weight-normal text-sm pb-1">
                                                Mail Me
                                            </span>
                                            <a href="mailto:akhtari.em1@gmail.com" className="hover:underline">akhtari.em1@gmail.com</a>
                                        </p>
                                        <p className="mb-8 pl-12 block font-semibold text-neutral-900 dark:text-white break-words relative font-weight-normal text-sm">
                                            <i className="svg-mask svg-phone-contact w-5 h-5 text-amber-500 contact-svg-phone absolute" aria-hidden />
                                            <span className="block text-neutral-500 dark:text-neutral-400 font-weight-normal text-sm pb-1">
                                                Call Me
                                            </span>
                                            <a href="tel:+989125666716" className="hover:underline">+98 912 566 6716</a>
                                        </p>
                                        {/* Example toggle with isOpen */}
                                        <div className="contact-inner">
                                            <ul className="contact-inner-list">
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://github.com/emadakhtari"
                                                        onClick={handleClick}
                                                        aria-label="Toggle theme"
                                                        className="theme-btn contact-btn"
                                                    >
                                                        <i className={`svg-mask svg-github-contact contact-svg-github  ${isOpen ? "icon-moon" : "icon-sun"}`} aria-hidden />
                                                        <i className={`svg-mask svg-github-contact contact-svg-github  ${isOpen ? "icon-sun" : "icon-moon"}`} aria-hidden />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://api.whatsapp.com/send?phone=+989125666716&text=Hi, I contacted you Through your website."
                                                        onClick={handleClick}
                                                        aria-label="Toggle theme"
                                                        className="theme-btn contact-btn"
                                                    >
                                                        <i className={`svg-mask svg-whatsup-contact contact-svg-github  ${isOpen ? "icon-moon" : "icon-sun"}`} aria-hidden />
                                                        <i className={`svg-mask svg-whatsup-contact contact-svg-github  ${isOpen ? "icon-sun" : "icon-moon"}`} aria-hidden />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        target="_blank"
                                                        href="https://telegram.me/akhtari_em"
                                                        onClick={handleClick}
                                                        aria-label="Toggle theme"
                                                        className="theme-btn contact-btn"
                                                    >
                                                        <i className={`svg-mask svg-telegram-contact contact-svg-github  ${isOpen ? "icon-moon" : "icon-sun"}`} aria-hidden />
                                                        <i className={`svg-mask svg-telegram-contact contact-svg-github  ${isOpen ? "icon-sun" : "icon-moon"}`} aria-hidden />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </div>

                                <div className="relative">
                                    <ContactForm poppins={poppins} />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}


