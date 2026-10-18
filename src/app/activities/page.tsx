import type { Metadata } from "next";
import ActivityCard from "@/components/ActivityCard";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Safety activities, field inspections, audits, and training programs carried out by Nasaruddin, ST — Safety System Engineer Assistant.",
  openGraph: {
    title: "Activities — Nasaruddin, ST",
    description:
      "Safety activities, field inspections, audits, and training programs carried out by Nasaruddin, ST.",
  },
};

export const activities = [
  {
    id: 1,
    title: "Monthly P2K3 Meeting",
    year: "2026",
    description: "Organized monthly P2K3 meetings to review HSE performance and discuss workplace safety improvements.",
  },
  {
    id: 2,
    title: "Internal Audit — SMK3",
    year: "2025",
    description: "Conducted internal SMK3 audits to assess compliance with occupational health and safety management requirements.",
  },
  {
    id: 3,
    title: "In-House Training — Working at Height",
    year: "2025",
    description: "Delivered in-house training on safe working at height practices and fall prevention.",
  },  
  {
    id: 4,
    title: "Job Safety Analysis (JSA) Training",
    year: "2025",
    description: "Delivered JSA training on hazard identification, risk assessment, and control measures.",
  },
  {
    id: 5,
    title: "Safety Induction — New Employees",
    year: "2025",
    description: "Delivered safety induction to newly hired employees on workplace safety rules and procedures.",
  },
  {
    id: 6,
    title: "Production Power Equipment (PTP) Inspection and Testing",
    year: "2025",
    description: "Accompanied an external inspector during production power equipment inspection and testing.",
  },
  {
    id: 7,
    title: "K3 Data Collection — Production Power Equipment",
    year: "2024",
    description: "Collected and documented K3 data for production power equipment (PTP).",
  },
  {
    id: 8,
    title: "Traffic Safety Refreshment Induction — Trailer Operators",
    year: "2024",
    description: "Refresher safety induction for trailer operators who violated site traffic rules.",
  },
  {
    id: 9,
    title: "SMK3 External Audit",
    year: "2024",
    description: "Coordinated and accompanied external auditors during the SMK3 external audit.",
  },
];

export default function ActivitiesPage() {
  return (
    <article className="space-y-8 py-10" style={{ fontFamily: "var(--font-typewriter)" }}>
      {/* <header>
        <h1 className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1">
          Activities
        </h1>
      </header> */}

      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1cm]">
        {activities.map((item) => (
          <ActivityCard key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
}
