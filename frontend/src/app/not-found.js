import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6" data-testid="not-found">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal mb-6">
        /// 404
      </div>
      <h1 className="font-display text-6xl md:text-8xl font-black tracking-tightest">
        Lost a fold.
      </h1>
      <p className="mt-6 text-white/70 max-w-md text-center">
        The page you&apos;re looking for isn&apos;t here. Let&apos;s get you back.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-4 hover:bg-signal hover:text-white transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
