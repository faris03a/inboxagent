import Link from "next/link";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/presets", label: "Presets" },
      { href: "/pricing", label: "Pricing" },
      { href: "/security", label: "Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#", label: "About" },
      { href: "/#", label: "Careers" },
      { href: "/#", label: "Press" },
      { href: "/#", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/#", label: "Docs" },
      { href: "/#", label: "Changelog" },
      { href: "/#", label: "Status" },
      { href: "/#", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/#", label: "Terms" },
      { href: "/#", label: "Privacy" },
      { href: "/#", label: "DPA" },
      { href: "/#", label: "Cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="font-headline text-lg font-bold">
            Inbox<span className="text-primary">Agent</span>
          </Link>
          <p className="text-xs text-on-surface-variant mt-3 max-w-[220px]">
            The AI customer service agent that replaces your VA and never sleeps.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-headline font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-on-surface">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-outline-variant py-6 text-center text-xs text-on-surface-variant">
        &copy; {new Date().getFullYear()} InboxAgent. All rights reserved.
      </div>
    </footer>
  );
}
