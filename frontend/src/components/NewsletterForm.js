"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex border border-white/15"
      onSubmit={(e) => e.preventDefault()}
      data-testid="newsletter-form"
    >
      <input
        type="email"
        required
        placeholder="you@domain.com"
        className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
        data-testid="newsletter-input"
      />
      <button
        type="submit"
        className="bg-white text-black px-3 py-2 text-sm font-semibold hover:bg-signal hover:text-white transition-colors"
        data-testid="newsletter-submit"
      >
        Join
      </button>
    </form>
  );
}
