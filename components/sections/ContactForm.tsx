"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contactSchema";
import { useState } from "react";
import { trackLeadEvent } from "@/lib/analytics";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source: "contact-form" }),
      });
      if (res.ok) {
        trackLeadEvent({
          form_location: "contact_page",
          service_type: values.serviceType,
          suburb: values.suburb,
        });
        setSubmitted(true);
      } else {
        setServerError("Something went wrong. Please try again.");
      }
    } catch {
      setServerError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-border rounded-xl p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-4">
          <span className="text-orange text-2xl">&#10003;</span>
        </div>
        <h3 className="text-xl font-bold text-white">Quote Request Received</h3>
        <p className="text-muted mt-2">
          Thanks for contacting NuLook Floors Geelong. We&apos;ll be in touch
          within 24 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-orange transition-colors";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-surface border border-border rounded-xl p-6 md:p-8 space-y-4"
    >
      <h3 className="text-xl font-bold text-white mb-2">
        Request a Free Quote
      </h3>

      {serverError && (
        <p className="text-red-400 text-sm">{serverError}</p>
      )}

      <div>
        <input
          {...register("name")}
          placeholder="Full name"
          className={inputClasses}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          placeholder="Phone number"
          className={inputClasses}
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="Email address"
          className={inputClasses}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("suburb")}
          placeholder="Suburb"
          className={inputClasses}
        />
        {errors.suburb && (
          <p className="text-red-400 text-xs mt-1">{errors.suburb.message}</p>
        )}
      </div>

      <div>
        <select
          {...register("serviceType")}
          className={inputClasses}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service type
          </option>
          <option value="residential-garage">Residential Garage Flooring</option>
          <option value="commercial-industrial">
            Commercial &amp; Industrial Flooring
          </option>
          <option value="workshop">Workshop / Shed</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <textarea
          {...register("message")}
          placeholder="Tell us about your project (optional)"
          rows={4}
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-orange text-white font-semibold rounded-lg px-6 py-3 hover:bg-orange-hover transition-colors disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Quote Request"}
      </button>
    </form>
  );
}
