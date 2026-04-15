"use client";

import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";

export default function SecurityActions() {
  const downloadWhitepaper = () => {
    const content = [
      "InboxAgent Security Whitepaper",
      "==============================",
      "",
      "InboxAgent processes customer messages under a strict set of security and",
      "privacy commitments. This document is a placeholder stub. Contact",
      "security@inboxagent.example for the full whitepaper.",
      "",
      "Topics covered in the full version:",
      "  - Data flow and retention",
      "  - Encryption primitives and key management",
      "  - Incident response and notification SLAs",
      "  - Sub-processors and vendor management",
      "  - Penetration testing cadence",
      "",
      `Generated ${new Date().toISOString()}`,
    ].join("\n");
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "inboxagent-security-whitepaper.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 md:px-8 py-20">
      <Reveal className="rounded-lg border border-outline-variant glass-card p-10 text-center">
        <h2 className="font-headline text-2xl md:text-3xl font-bold">
          Need to go deeper?
        </h2>
        <p className="text-on-surface-variant mt-3 max-w-md mx-auto">
          Download our whitepaper or reach out directly to the security team.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <MagneticButton
            type="button"
            onClick={downloadWhitepaper}
            className="rounded-full bg-primary text-on-primary font-bold px-6 py-3 hover:bg-primary-dim transition-colors"
          >
            Download Whitepaper
          </MagneticButton>
          <a
            href="mailto:security@inboxagent.example?subject=Security%20question"
            className="rounded-full border border-outline-variant px-6 py-3 font-semibold hover:bg-surface-container transition-colors"
          >
            Contact Security Team
          </a>
        </div>
      </Reveal>
    </section>
  );
}
