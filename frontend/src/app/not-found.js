import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden bg-paper" data-testid="not-found">
      <div className="absolute inset-0 dotted opacity-50 pointer-events-none" />
      <div className="relative text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal mb-6">
          /// 404
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-black tracking-tightest text-signal">
          Page not found.
        </h1>
        <p className="mt-6 text-ink-soft max-w-md mx-auto">
          The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back to the home page.
        </p>
        <Link href="/" className="mt-10 btn-pill btn-primary inline-flex">
          Back home
        </Link>
      </div>
    </div>
  );
}
