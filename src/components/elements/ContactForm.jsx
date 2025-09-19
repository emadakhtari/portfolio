"use client";
import { useState } from "react";
import { cn } from "@/lib/cn";

export default function ContactForm({ poppins, className = "" }) {
    const [status, setStatus] = useState({ sending: false, ok: null, error: "" });

    async function onSubmit(e) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const payload = {
            name: fd.get("name")?.toString() || "",
            email: fd.get("email")?.toString() || "",
            subject: fd.get("subject")?.toString() || "",
            message: fd.get("message")?.toString() || "",
        };

        setStatus({ sending: true, ok: null, error: "" });

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const json = await res.json().catch(() => ({}));
        if (res.ok && json.ok) {
            setStatus({ sending: false, ok: true, error: "" });
            e.currentTarget.reset();
        } else {
            setStatus({ sending: false, ok: false, error: json.error || "Failed to send." });
        }
    }

    return (
        <form id="form-contact" onSubmit={onSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                {/* NAME */}
                <div className="relative mb-1" style={{ height: "fit-content" }}>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <span className="svg-mask svg-user w-5 h-5 text-amber-500" aria-hidden />
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`${poppins?.variable ?? ""} border text-sm block w-full ps-10 p-2.5 rounded-[30px]
                        border-[var(--border-active)] focus:outline-none focus:border-[#ffb400]`}
                        placeholder="YOUR NAME"
                        required
                    />
                </div>

                {/* EMAIL */}
                <div className="relative mb-1" style={{ height: "fit-content" }}>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <span className="svg-mask svg-email w-5 h-5 text-amber-500" aria-hidden />
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`${poppins?.variable ?? ""} border text-sm block w-full ps-10 p-2.5 rounded-[30px]
                        border-[var(--border-active)] focus:outline-none focus:border-[#ffb400]`}
                        placeholder="YOUR EMAIL"
                        required
                    />
                </div>
            </div>

            {/* SUBJECT */}
            <div className="mb-1">
                <div className="relative mb-6" style={{ height: "fit-content" }}>
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <span className="svg-mask svg-subject w-5 h-5 text-amber-500" aria-hidden />
                    </div>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className={`${poppins?.variable ?? ""} border text-sm block w-full ps-10 p-2.5 rounded-[30px]
                        border-[var(--border-active)] focus:outline-none focus:border-[#ffb400]`}
                        placeholder="YOUR SUBJECT"
                        required
                    />
                </div>
            </div>

            {/* MESSAGE */}
            <div className="mb-8">
                <div className="relative mb-6" style={{ height: "fit-content" }}>
                    <div className="absolute inset-y-0 start-0 flex items-start ps-3.5 pointer-events-none" style={{ paddingTop: ".8rem" }}>
                        <span className="svg-mask svg-write w-5 h-5 text-amber-500" aria-hidden />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className={`${poppins?.variable ?? ""} border text-sm block w-full ps-10 p-2.5 rounded-[30px]
                        border-[var(--border-active)] focus:outline-none focus:border-[#ffb400]`}
                        placeholder="WRITE YOUR MESSAGE HERE..."
                        required
                    />
                </div>
            </div>

            {/* SUBMIT */}
            <button
                type="submit"
                disabled={status.sending}
                className={cn(
                    "group relative isolate inline-flex items-center gap-3 rounded-full border border-[var(--accent)] pl-5",
                    "h-12 text-sm tracking-wide transition-all bg-transparent overflow-hidden disabled:opacity-60",
                    className
                )}
                style={{ color: "var(--home-muted)" }}
            >
                <span className="pointer-events-none absolute inset-y-0 right-0 -z-[1] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                <span className="z-10 poppins-font">{status.sending ? "Sending..." : "Send Message"}</span>
                <span className="z-10 grid h-12 w-12 place-items-center rounded-full bg-[var(--accent)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </span>
            </button>

            {/* Status */}
            {status.ok && <p className="mt-3 text-sm text-emerald-500">Thanks! Your message has been sent.</p>}
            {status.ok === false && <p className="mt-3 text-sm text-red-500">Failed to send: {status.error}</p>}
        </form>
    );
}
