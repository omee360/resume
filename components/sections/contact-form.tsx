"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/app/contact/actions";

type FormState = {
  errors?: Record<string, string>;
  success?: boolean;
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendMessage, {});

  return (
    <form
      action={formAction}
      className="grid gap-[14px] rounded-xl border border-line bg-[color-mix(in_srgb,var(--color-paper)_86%,transparent)] p-[26px] shadow-soft"
    >
      <label className="grid gap-2 text-[13px] font-black text-muted">
        Name
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full rounded-[15px] border border-line bg-bg px-[14px] py-[13px] text-ink"
        />
      </label>
      {state.errors?.name && (
        <p className="-mt-2 text-[12px] font-bold text-red-500">
          {state.errors.name}
        </p>
      )}

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <label className="grid gap-2 text-[13px] font-black text-muted">
        Email
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full rounded-[15px] border border-line bg-bg px-[14px] py-[13px] text-ink"
        />
      </label>
      {state.errors?.email && (
        <p className="-mt-2 text-[12px] font-bold text-red-500">
          {state.errors.email}
        </p>
      )}

      <label className="grid gap-2 text-[13px] font-black text-muted">
        Project type
        <input
          type="text"
          name="type"
          placeholder="Website, WordPress, frontend role..."
          className="w-full rounded-[15px] border border-line bg-bg px-[14px] py-[13px] text-ink"
        />
      </label>

      <label className="grid gap-2 text-[13px] font-black text-muted">
        Message
        <textarea
          name="message"
          placeholder="Tell me what you need"
          className="min-h-[150px] w-full resize-y rounded-[15px] border border-line bg-bg px-[14px] py-[13px] text-ink"
        />
      </label>
      {state.errors?.message && (
        <p className="-mt-2 text-[12px] font-bold text-red-500">
          {state.errors.message}
        </p>
      )}

      {state.success && (
        <p className="text-[13px] font-bold text-green-600">
          Thanks! Your message has been sent — I&apos;ll get back to you soon.
        </p>
      )}

      {state.errors?.form && (
        <p className="text-[13px] font-bold text-red-500">
          {state.errors.form}
        </p>
      )}

      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
