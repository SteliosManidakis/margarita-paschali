"use client";

import { useState } from "react";

type SubscribeCopy = {
  title: string;
  emailLabel: string;
  placeholder: string;
  button: string;
  success: string;
  error: string;
};

export function SubscribeForm({ copy }: { copy: SubscribeCopy }) {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    const formData = new FormData(event.currentTarget);

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.get("email") }),
    });

    setLoading(false);
    setMessage(response.ok ? copy.success : copy.error);
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <label className="block text-sm font-semibold uppercase tracking-[0.12em] text-olive" htmlFor="email">
        {copy.title}
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          className="min-h-12 flex-1 rounded-full border border-olive/25 bg-ivory px-5 text-base text-charcoal outline-none transition placeholder:text-charcoal/40 focus:border-olive"
          id="email"
          name="email"
          type="email"
          placeholder={copy.placeholder}
          aria-label={copy.emailLabel}
          required
        />
        <button
          className="min-h-12 rounded-full bg-olive px-6 text-sm font-semibold uppercase tracking-[0.08em] text-ivory transition hover:bg-charcoal disabled:cursor-wait disabled:opacity-70"
          disabled={loading}
          type="submit"
        >
          {copy.button}
        </button>
      </div>
      {message ? <p className="text-sm text-charcoal/70">{message}</p> : null}
    </form>
  );
}
