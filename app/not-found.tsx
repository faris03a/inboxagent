import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-primary text-sm font-semibold uppercase tracking-wider">404</p>
      <h1 className="font-headline font-extrabold text-5xl md:text-7xl mt-3 text-glow">
        Inbox zero. Page zero.
      </h1>
      <p className="text-on-surface-variant mt-4 max-w-md">
        We couldn&apos;t find that page. Maybe the agent auto-resolved it.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary text-on-primary font-bold px-6 py-3 hover:bg-primary-dim transition-colors"
      >
        Back home
      </Link>
    </main>
  );
}
