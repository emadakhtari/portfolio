"use client";

import Image from "next/image";
import { AboutDialogTrigger } from "@/components/elements/about-dialog";
import { useState } from "react";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      className="
        relative min-h-dvh w-full
        grid grid-cols-1 items-center
        px-6 md:px-10 xl:px-14 2xl:px-20
        gap-10 lg:gap-14
        lg:grid-cols-[minmax(0,34vw)_1fr]
        pb-10 lg:pb-0
      "
    >
      {/* ===== Portrait for ≥ lg ===== */}
      <div className="relative hidden lg:block">
        <div className="relative overflow-hidden rounded-[28px] shadow-2xl">
          <Image
            src="/profile.jpg"
            alt="Emad Akhtari's portfolio"
            width={1200}
            height={1600}
            sizes="(min-width:1024px) 34vw, 100vw"
            className={`h-[78vh] w-full object-cover bg-neutral-100 dark:bg-neutral-900 transition-opacity ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
            priority
          />
        </div>
      </div>

      {/* ===== Portrait for < lg ===== */}
      <div className="lg:hidden">
        <div className="mx-auto mb-8 mt-10 grid place-items-center">
          <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full ring-2 ring-[#2f2f2f] shadow-2xl overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Developer portrait"
              fill
              sizes="(max-width: 768px) 14rem, (max-width: 1024px) 18rem, 24rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* ===== Hero copy ===== */}
      <div
        className="
          relative z-10
          text-center lg:text-left
          place-self-center
          pr-12
        "
      >
        <div className="mb-3 hidden lg:flex items-center gap-4">
          <span className="hero-dash" aria-hidden="true" />
          <span className="sr-only">decorative dash</span>
        </div>

        <h1
          className="
            h1-51 font-extrabold tracking-tight uppercase
            leading-tight name-font-home
          "
          style={{ color: "var(--heading)" }}
        >
          I&apos;M EMAD AKHTARI.
        </h1>

        <h2
          className="
            text-3xl font-extrabold tracking-tight uppercase
            leading-tight mt-1
          "
          style={{ color: "var(--home-muted)" }}
        >
          Full Stack Senior Programmer
        </h2>

        <p
          className="
            mt-6 text-base leading-relaxed opacity-95
            mx-auto lg:mx-0
            max-w-[46rem] md:max-w-[44rem]
            pb-20 lg:pb-0
          "
          style={{ color: "var(--home-muted)" }}
        >
          I am a full-stack senior developer with full proficiency in both{" "}
          <span className="name-font-home" style={{ color: "var(--heading)" }}>
            Front-end
          </span>{" "}
          and{" "}
          <span className="name-font-home" style={{ color: "var(--heading)" }}>
            Back-end
          </span>
          , fluent in multiple programming languages in both, and focused on creating
          clean, user-friendly user experiences. I am passionate about building great
          software across all platforms, web, Android, and iOS, that improves the lives
          of those around me.
        </p>

        {/* CTA visible only on lg+ */}
        <div className="mt-8 mx-auto lg:mx-0 w-fit hidden lg:block">
          <AboutDialogTrigger />
        </div>
      </div>
    </div>
  );
}
