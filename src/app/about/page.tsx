import type { Metadata } from "next";
import ProfilePhoto from "@/components/ProfilePhoto";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nasaruddin, ST — Safety System Engineer Assistant with expertise in OHSMS auditing, hazard identification, risk assessment, and safety management systems in industrial environments.",
  openGraph: {
    title: "About — Nasaruddin, ST",
    description:
      "Safety System Engineer Assistant with expertise in OHSMS auditing, hazard identification, risk assessment, and safety management systems.",
  },
};

export default function AboutPage() {
  return (
    <div
      className="flex items-start gap-10 py-10"
      style={{ fontFamily: "var(--font-typewriter)" }}
    >
      {/* LEFT: sticky photo column */}
      <aside
        className="shrink-0"
        style={{ width: "26rem", position: "sticky", top: "2rem", alignSelf: "flex-start" }}
      >
        <ProfilePhoto />
        <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">
          Nasaruddin, ST
        </p>
      </aside>

      {/* RIGHT: scrollable article */}
      <article className="flex-1 space-y-10 min-w-0">
        {/* Subtitle */}
        {/* <p className="text-sm uppercase tracking-widest text-gray-500">
          Safety System Engineer Assistant
        </p> */}

        {/* Bio */}
        <section className="space-y-4 text-sm leading-snug">
          <p>
            I am a safety professional with a strong focus on safety management systems, risk assessment, and continuous improvement. I believe effective safety management is built on systematic processes, rigorous documentation, transparent reporting, and disciplined field practice. I am a Safety Systems Engineer Assistant working in complex industrial environments. My work focuses on OHSMS auditing, hazard identification, and risk assessment, with an emphasis on evaluating compliance and identifying potential gaps before they lead to incidents. I develop and implement safety procedures, establish equipment inspection protocols, and support emergency response planning. I also conduct internal audits and deliver safety inductions, toolbox talks, and training, helping close compliance gaps and build a proactive safety culture across the workforce. I am confident in OHSMS auditing, hazard identification, risk assessment, and safety training. These are supported by analytical thinking, attention to detail, clear communication, and cross-functional collaboration. I am committed to strengthening safety management systems, improving compliance, and fostering safer workplaces.</p>
        </section>
        
        {/* Selected Experience */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1">
            Working Experiences
          </h2>
          <ul className="space-y-6 text-sm">
            {[
              {
                year: "August 2025 - Present",
                role: "Safety System Engineer Assistant",
                place: "PT. QMB New Energy Materials, Morowali, Central Sulawesi, Indonesia",
                jobdesks: [
                  "Conducted internal SMK3 audits across 65 divisions and workshops, identifying 1000+ findings and evaluating compliance against PP No. 50/2012, strengthening the company’s audit readiness.",
                  "Prepared corrective action reports and consulted department owners on audit follow-up, achieving a 91% completion rate, ensuring findings were closed on time rather than left open.",
                  "Delivered safety induction and OHS training to new employees and contractors as a BNSP-certified trainer (Level IV), reaching 1,500+ employees (about 40 sessions per year), building safety awareness and consistent safe work practices.",
                  "Accompanied external audits and government inspections as auditee , preparing documentation and evidence and reviewing permits to work, maintaining legal compliance and safe contractor operations.",
                ],
              },
              {
                year: "Jan - Aug 2025",
                role: "Safety System Engineer Assistant",
                place: "PT. MEIMING New Energy Materials, Morowali, Central Sulawesi, Indonesia",
                jobdesks: [
                  "Supported the development of the OHS Management System and managed control documents (policies, hazard identification and risk assessment (IBPR), SOPs, work instructions, and forms), monitoring objectives, targets, and KPIs, ensuring documentation stays current and aligned with planned safety performance.",
                  "Prepared corrective action reports from internal and external SMK3 audits, accompanied internal audits, and consulted department owners on audit follow-up, coordinating document fulfillment and field implementation of SMK3, ensuring audit findings are closed on time.",
                  "Coordinated safety report, induction, training, and OHS administration staff, compiled weekly and monthly HSE performance reports, and delivered employee training and assessments, strengthening safety competence and transparent performance reporting.",
                  "Accompanied audits and inspections from government and third parties, reviewed permits to work for company and contractor activities, and coordinated compliance programs with area management and contractors, maintaining legal compliance and safe contractor operations.",
                ],
              },
              {
                year: "Oct 2023 - Jan 2025",
                role: "Safety Deputy Foreman",
                place: "PT. ESG New Energy Materials, Morowali, Central Sulawesi, Indonesia",
                jobdesks: [
                  "Planned and coordinated weekly and daily safety control programs, socialized them to all departments, and evaluated their implementation with improvement recommendations, ensuring consistent safety practices across the company and timely follow-up of findings.",
                  "Coordinated initial incident response, emergency handling, investigations, and reporting, and supported emergency drill programs, enabling faster response and continuous learning from every incident.",
                  "Coordinated inspections of PPE, safety equipment, permits to work, emergency facilities, and critical work areas, documenting findings to ensure compliance with government OHS regulations and company procedures, reducing the risk of incidents.",
                  "Accompanied OHS inspections from government and third parties, preparing documentation and evidence, maintaining audit readiness and compliance with external requirements.",
                ],
              },
              {
                year: "Dec 2022 - Oct 2023",
                role: "Safety Control",
                place: "PT. QMB New Energy Materials, Morowali, Central Sulawesi, Indonesia",
                jobdesks: [
                  "Carried out weekly and daily K3 inspection work instructions in the workplace and improved the execution of daily safety control programs, ensuring consistent safety practices and timely follow-up of findings.",
                  "Handled initial incident response, emergency handling, investigations, and reporting, and implemented corrective and preventive actions based on investigation results, reducing the likelihood of repeat incidents.",
                  "Conducted emergency response drills in the workplace, strengthening personnel readiness and the effectiveness of emergency procedures.",
                  "Performed inspections of PPE, safety equipment, permits to work, emergency facilities, and critical work areas, and implemented corrective and preventive actions based on the findings, keeping hazards controlled and facilities ready for use.",
                ],
              },
            ].map((exp) => (
              <li key={exp.year + exp.role} className="flex items-start gap-2">
                <span className="text-gray-400 shrink-0">—</span>
                <div className="space-y-1.5">
                  <p className="text-black">{exp.year}</p>
                  <p className="uppercase tracking-wide font-medium">{exp.role}</p>
                  <p className="text-black">{exp.place}</p>
                  <ul className="space-y-0.5 mt-1">
                    {exp.jobdesks.map((jd, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-500">
                        <span className="shrink-0">·</span>
                        <span>{jd}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1">
            Education
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-gray-400 shrink-0">—</span>
              Trainer of Trainers Level 4, National Professional Certification Agency (BNSP) (Oct 2026)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 shrink-0">—</span>
              Occupational Health & Safety Management System Auditor, Indonesian Ministry of Manpower (Nov 2023)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 shrink-0">—</span>
              Occupational Health & Safety Expert, Indonesian Ministry of Manpower (Nov 2023)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400 shrink-0">—</span>
              Bachelor of Industrial Engineering, Hasanuddin University, Makassar
            </li>
          </ul>
        </section>

        {/* Certifications
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1">
            Certifications &amp; Training
          </h2>
          <ul className="space-y-1 text-sm">
            {[
              "Hazard Identification and Risk Assessment (HIRA)",
              "Job Safety Analysis (JSA)",
              "Lock Out Tag Out (LOTO) Procedures",
              "Fire Prevention and Emergency Response",
              "Confined Space Entry Safety",
              "Personal Protective Equipment (PPE) Management",
              "Incident Investigation and Root Cause Analysis",
              "Safety Audit and Inspection Techniques",
            ].map((cert) => (
              <li key={cert} className="flex items-start gap-2">
                <span className="text-gray-400 shrink-0">—</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </section> */}

        {/* Skills */}
        <section className="space-y-3">
          <h2 className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1">
            Skills
          </h2>
          <ul className="space-y-1 text-sm">
            {[
              "Audit and Compliance : OHSMS Auditing, Internal SMK3 Audit, Safety Compliance Audit, Audit Reporting",
              "Standards and Frameworks: ISO 45001:2018, ISO 9001:2015, ISO 31000:2018, SMK3 (PP 50/2012)",
              "Risk and Hazard Management : HIRADC, Job Safety Analysis, LOTO, MSDS, CSMS",
              "Training and Development : Safety Training, Safety Induction, Toolbox Meeting, TNA",
              "Emergency Management: Emergency Response Plan, Accident Investigation, Firefighting, First Aid",
              "Leadership : Safety Leadership",
            ].map((skill) => (
              <li key={skill} className="flex items-start gap-2">
                <span className="text-gray-400 shrink-0">—</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
