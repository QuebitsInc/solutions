"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend("re_VjyYgEFy_MnZr2Pvpg9BaLRgSpavVeUpB");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const senderPhone = formData.get("phone");
  const senderName = formData.get("name");

  const senderDetails = formData.get("description");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(senderPhone, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(senderDetails, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(senderName, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: "service@solutionsbroker.ca",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        senderPhone: senderPhone,
        senderEmail: senderEmail,
        senderDetails: senderDetails,
        senderName: senderName,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
