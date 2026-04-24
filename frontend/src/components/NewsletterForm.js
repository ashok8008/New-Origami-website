"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex border border-ink-line rounded-full overflow-hidden bg-white"
      onSubmit={(e) => e.preventDefault()}
      data-testid="newsletter-form"
    >
      <input
        type="email"
        required
        placeholder="you@domain.com"
        className="flex-1 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted focus:outline-none"
        data-testid="newsletter-input"
      />
      <button
        type="submit"
        className="bg-signal text-white px-4 py-2.5 text-sm font-semibold hover:bg-signal-hover transition-colors"
        data-testid="newsletter-submit"
      >
        Join
      </button>
    </form>
  );
}
