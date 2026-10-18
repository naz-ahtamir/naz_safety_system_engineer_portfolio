import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Get in touch with Nasaruddin, ST — Safety System Engineer Assistant. Available via email, WhatsApp, and LinkedIn for safety project inquiries.",
  openGraph: {
    title: "Contacts — Nasaruddin, ST",
    description:
      "Get in touch with Nasaruddin, ST via email, WhatsApp, or LinkedIn for safety project inquiries.",
  },
};

export default function ContactsPage() {
  return (
    <article className="space-y-10 py-10" style={{ fontFamily: "var(--font-typewriter)" }}>
      {/* <header>
        <h1 className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1">
          Contacts
        </h1>
      </header> */}

      <section className="space-y-2 text-sm">
        <p>Please direct all inquiries to:</p>
        <p className="mt-3">
          <a href="mailto:nasaruddin@gem.com.cn" className="hover:underline">
            nasaruddin@gem.com.cn
          </a>
        </p>
      </section>

      {/* Professional Contacts */}
      <section className="space-y-6 text-sm">
        <div className="space-y-1">
          <p className="uppercase tracking-widest font-bold text-xs">
            Work Location
          </p>
          <p>Emergency Response Management Department</p>
          <p>PT. QMB New Energy Materials, Morowali, Central Sulawesi, Indonesia</p>
        </div>

        <div className="space-y-1">
          <p className="uppercase tracking-widest font-bold text-xs">
            LinkedIn
          </p>
          <p>
            <a
              href="https://linkedin.com/in/nasaruddin-st"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/nasaruddin-st
            </a>
          </p>
        </div>

        <div className="space-y-1">
          <p className="uppercase tracking-widest font-bold text-xs">
            WhatsApp
          </p>
          <p>
          <a href="https://wa.me/6282220715073" target="_blank" rel="noopener noreferrer" className="hover:underline">
              +62 822-2071-5073
            </a>
          </p>
        </div>

        <div className="space-y-1">
          <p className="uppercase tracking-widest font-bold text-xs">
            For safety project inquiries
          </p>
          <p>
            Please provide details about the project scope, timeline, and
            relevant safety standards applicable.
          </p>
        </div>
      </section>
    </article>
  );
}
