"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { cookies } from "next/headers";

export type FormState = {
  errors?: Record<string, string>;
  success?: boolean;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMessage(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const cookieStore = await cookies();

  if (cookieStore.get("last_sent")) {
    return {
      errors: {
        form: "You've already sent a message recently. Please try again later.",
      },
    };
  }

  const data = Object.fromEntries(formData);

  if (data.company) {
    return { success: true };
  }

  const result = contactSchema.safeParse(data);

  if (!result.success) {
    const errors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as string;
      if (!errors[field]) errors[field] = issue.message;
    }
    return { errors };
  }

  const { name, email, type, message } = result.data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "umairhaider360@gmail.com",
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${type || "—"}\n\n${message}`,
    });
  } catch (err) {
    console.error("Resend error:", err);
    return { errors: { form: "Something went wrong. Please try again." } };
  }

  cookieStore.set("last_sent", "1", {
    maxAge: 60 * 60 * 2,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return { success: true };
}
