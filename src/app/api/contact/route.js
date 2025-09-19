require("dotenv/config");
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";        // Nodemailer needs Node runtime
export const dynamic = "force-dynamic"; // avoid caching in dev

function buildTransport() {
    const host = process.env.SMTP_HOST || "";
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || "false") === "true";

    const user = process.env.SMTP_USER || "";
    const pass = process.env.SMTP_PASS || "";

    if (!host || !user || !pass) {
        throw new Error("SMTP is not configured: check SMTP_HOST/USER/PASS");
    }

    return nodemailer.createTransport({
        host,
        port,
        secure, // true for 465 (SSL), false for 587 (STARTTLS)
        auth: { user, pass },

        // Helpful on some local networks; uncomment if IPv6 causes issues:
        // family: 4,

        // If your host uses self-signed certs and you see CERT errors in dev,
        // you *can* relax TLS (not recommended for production):
        // tls: { rejectUnauthorized: false },

        // timeouts (optional)
        // connectionTimeout: 10000,
        // greetingTimeout: 10000,
    });
}

function textTemplate({ name, email, subject, message }) {
    return `New contact form submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
`;
}

export async function POST(req) {
    try {
        const body = await req.json().catch(() => ({}));
        const name = (body.name || "").toString().trim();
        const email = (body.email || "").toString().trim();
        const subject = (body.subject || "").toString().trim();
        const message = (body.message || "").toString().trim();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ ok: false, error: "Missing fields." }, { status: 400 });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
        }

        const transporter = buildTransport();

        const fromName = process.env.MAIL_FROM_NAME || "Portfolio";
        const fromAddr = process.env.MAIL_FROM_ADDRESS || process.env.SMTP_USER || "no-reply@example.com";
        const to = process.env.CONTACT_TO || process.env.SMTP_USER || "admin@example.com";

        const text = textTemplate({ name, email, subject, message });

        await transporter.sendMail({
            from: `${fromName} <${fromAddr}>`,
            to,
            replyTo: email,                    // replying in your inbox goes to the sender
            subject: `Contact: ${subject} — ${name}`,
            text,                              // simple, reliable text body
            // html: "<p>…</p>",               // you can add HTML if you want later
        });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("contact route error:", err);
        return NextResponse.json({ ok: false, error: "Email failed." }, { status: 500 });
    }
}
