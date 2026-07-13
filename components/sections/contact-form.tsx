"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { sendMessage } from "@/app/contact/actions";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendMessage, {});

  return (
    <form
      action={formAction}
      className="grid gap-3 rounded-xl border border-line bg-[color-mix(in_srgb,var(--color-paper)_86%,transparent)] p-5 shadow-soft md:p-6"
    >
      <div className="mb-2">
        <p className="font-mono text-[12px] font-black uppercase tracking-[0.08em] text-brand">
          Send a message
        </p>
        <h2 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-ink">
          Tell me what you need.
        </h2>
      </div>

      <label className="grid gap-1.5 text-[13px] font-black text-muted">
        Name
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="h-11 w-full rounded-[14px] border border-line bg-bg px-3.5 text-[15px] text-ink font-normal placeholder:text-soft outline-none transition focus:border-brand"
          aria-invalid={Boolean(state.errors?.name)}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
        />
      </label>
      {state.errors?.name && (
        <p id="name-error" className="-mt-2 text-[12px] font-bold text-red-500">
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

      <label className="grid gap-1.5 text-[13px] font-black text-muted">
        Email
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="h-11 w-full rounded-[14px] border border-line bg-bg px-3.5 text-[15px] text-ink font-normal placeholder:text-soft outline-none transition focus:border-brand"
          aria-invalid={Boolean(state.errors?.email)}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
        />
      </label>
      {state.errors?.email && (
        <p id="email-error" className="-mt-2 text-[12px] font-bold text-red-500">
          {state.errors.email}
        </p>
      )}

      <label className="grid gap-1.5 text-[13px] font-black text-muted">
        Project type
        <input
          type="text"
          name="type"
          placeholder="Website, app, WordPress, role..."
          className="h-11 w-full rounded-[14px] border border-line bg-bg px-3.5 text-[15px] text-ink font-normal placeholder:text-soft outline-none transition focus:border-brand"
        />
      </label>

      <label className="grid gap-1.5 text-[13px] font-black text-muted">
        Message
        <textarea
          name="message"
          placeholder="Share the goal, link, timeline, or role details."
          className="min-h-[120px] w-full resize-y rounded-[14px] border border-line bg-bg px-3.5 py-3 text-[15px] text-ink font-normal placeholder:text-soft outline-none transition focus:border-brand"
          aria-invalid={Boolean(state.errors?.message)}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
      </label>
      {state.errors?.message && (
        <p id="message-error" className="-mt-2 text-[12px] font-bold text-red-500">
          {state.errors.message}
        </p>
      )}

      {state.success && (
        <p role="status" className="text-[13px] font-bold text-green-600">
          Thanks! Your message has been sent. I&apos;ll get back to you soon.
        </p>
      )}

      {state.errors?.form && (
        <p role="alert" className="text-[13px] font-bold text-red-500">
          {state.errors.form}
        </p>
      )}

      <Button type="submit" disabled={isPending} className="self-start">
        {isPending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
