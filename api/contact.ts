import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

const BUSINESS_EMAIL = "danicrucita60@gmail.com";
const FROM_ADDRESS = "Crux Vision <onboarding@resend.dev>";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, company, phone, services, note } = req.body ?? {};

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: "Numele și email-ul sunt obligatorii." });
  }

  try {
    // 1. Notificare la business
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: BUSINESS_EMAIL,
      replyTo: email,
      subject: `🦈 Mesaj nou de la ${name}`,
      html: businessEmailHtml({ name, email, company, phone, services, note }),
    });

    // 2. Auto-reply la client
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: `Mulțumim, ${name}! Am primit mesajul tău. 🦈`,
      html: autoReplyHtml({ name }),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return res.status(500).json({ error: "Nu s-a putut trimite email-ul. Încearcă din nou." });
  }
}

function businessEmailHtml({
  name, email, company, phone, services, note,
}: {
  name: string; email: string; company?: string;
  phone?: string; services?: string; note?: string;
}) {
  return `<!DOCTYPE html>
<html lang="ro">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px;font-family:system-ui,-apple-system,sans-serif;background:#0d1224;color:#e2e8f0;">
  <div style="max-width:560px;margin:0 auto;background:#151c35;border-radius:16px;overflow:hidden;border:1px solid #2d3a5e;">
    <div style="background:linear-gradient(135deg,#3b82f6,#6366f1);padding:28px 32px;">
      <p style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.65)">Crux Vision · Formular website</p>
      <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff">🦈 Mesaj nou de la ${escHtml(name)}</h1>
    </div>
    <div style="padding:28px 32px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:8px 0;color:#94a3b8;width:110px">Nume</td><td style="padding:8px 0;font-weight:600">${escHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;color:#94a3b8">Email</td><td style="padding:8px 0"><a href="mailto:${escHtml(email)}" style="color:#60a5fa;text-decoration:none">${escHtml(email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#94a3b8">Companie</td><td style="padding:8px 0">${escHtml(company || "—")}</td></tr>
        <tr><td style="padding:8px 0;color:#94a3b8">Telefon</td><td style="padding:8px 0">${escHtml(phone || "—")}</td></tr>
        <tr><td style="padding:8px 0;color:#94a3b8">Servicii</td><td style="padding:8px 0">${escHtml(services || "—")}</td></tr>
      </table>
      ${note ? `<div style="margin-top:16px;padding:16px;background:#1e2a4a;border-radius:8px;border-left:3px solid #3b82f6"><p style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#94a3b8">Mesaj adițional</p><p style="margin:0;line-height:1.65;font-size:14px">${escHtml(note)}</p></div>` : ""}
    </div>
    <div style="padding:16px 32px 24px;text-align:center;border-top:1px solid #2d3a5e">
      <a href="mailto:${escHtml(email)}" style="display:inline-block;padding:11px 28px;background:linear-gradient(135deg,#3b82f6,#6366f1);color:#fff;border-radius:8px;font-weight:600;font-size:14px;text-decoration:none">Răspunde lui ${escHtml(name)}</a>
    </div>
  </div>
</body>
</html>`;
}

function autoReplyHtml({ name }: { name: string }) {
  return `<!DOCTYPE html>
<html lang="ro">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px;font-family:system-ui,-apple-system,sans-serif;background:#f8fafc;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 24px rgba(0,0,0,.06)">
    <div style="background:linear-gradient(135deg,#0f172a,#1e293b);padding:32px;text-align:center">
      <p style="margin:0 0 2px;font-size:11px;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.4)">CRUX VISION</p>
      <p style="margin:0;font-size:10px;text-transform:uppercase;letter-spacing:.15em;color:rgba(255,255,255,.25)">MEDIA NETWORK</p>
    </div>
    <div style="padding:36px 36px 24px">
      <h1 style="margin:0 0 14px;font-size:22px;font-weight:700;color:#0f172a">Salut, ${escHtml(name)}! 👋</h1>
      <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#475569">Mulțumim că ne-ai contactat! Am primit mesajul tău și unul dintre consultanții noștri îl va analiza în cel mai scurt timp.</p>
      <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#475569">Ne propunem să te contactăm în maxim <strong style="color:#0f172a">24 de ore</strong> lucrătoare cu un răspuns personalizat pentru nevoile tale.</p>
      <div style="background:#f1f5f9;border-radius:12px;padding:18px 22px;border-left:4px solid #3b82f6">
        <p style="margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#64748b;font-weight:600">Între timp</p>
        <p style="margin:0;font-size:14px;color:#334155;line-height:1.65">Explorează portofoliul nostru la <a href="https://www.crux-vision.com" style="color:#3b82f6;font-weight:600;text-decoration:none">crux-vision.com</a> sau urmărește-ne pe <a href="https://www.instagram.com/crux.vision/" style="color:#3b82f6;font-weight:600;text-decoration:none">Instagram</a>.</p>
      </div>
    </div>
    <div style="padding:20px 36px 28px;text-align:center;border-top:1px solid #f1f5f9">
      <p style="margin:0 0 2px;font-size:15px;font-weight:700;color:#0f172a">CRUX <span style="color:#3b82f6">VISION</span></p>
      <p style="margin:0 0 10px;font-size:12px;color:#94a3b8;font-style:italic">Be a shark in the internet ocean ®</p>
      <p style="margin:0;font-size:12px;color:#94a3b8">+40 733 853 653 &nbsp;·&nbsp; <a href="mailto:danicrucita60@gmail.com" style="color:#94a3b8;text-decoration:none">danicrucita60@gmail.com</a></p>
    </div>
  </div>
</body>
</html>`;
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
