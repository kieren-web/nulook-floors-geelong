"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { trackLeadEvent, trackFormStep } from "@/lib/analytics";

const floorTypes = [
  { label: "Garage", icon: "🚗" },
  { label: "Patio / Outdoor", icon: "☀️" },
  { label: "Shed / Workshop", icon: "🔧" },
  { label: "Commercial", icon: "🏭" },
  { label: "Other", icon: "💬" },
];

const sizeOptions = [
  { label: "Under 30m²", value: "under-30" },
  { label: "30–60m²", value: "30-60" },
  { label: "60–100m²", value: "60-100" },
  { label: "100m²+", value: "100-plus" },
];

const timelineOptions = [
  { label: "ASAP", value: "asap" },
  { label: "Within 1 Month", value: "within-1-month" },
  { label: "1–3 Months", value: "1-3-months" },
  { label: "Just Exploring", value: "just-exploring" },
];

type Step = 1 | 2 | 3 | 4;

export function MultiStepSurvey() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [floorType, setFloorType] = useState("");
  const [size, setSize] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [suburb, setSuburb] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 4;
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  function selectFloorType(label: string) {
    setFloorType(label);
    trackFormStep(1, "landing_survey");
    setStep(2);
  }

  function selectSize(value: string) {
    setSize(value);
    trackFormStep(2, "landing_survey");
    setStep(3);
  }

  function selectTimeline(value: string) {
    setTimeline(value);
    trackFormStep(3, "landing_survey");
    setStep(4);
  }

  async function submitContact() {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please enter your full name";
    if (!email.trim()) errs.email = "Please enter your email address";
    if (!phone.trim()) errs.phone = "Please enter your phone number";
    if (!suburb.trim()) errs.suburb = "Please enter your suburb";
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone, suburb,
          floorType, size, timeline,
          serviceType: "other",
          source: "landing-survey",
        }),
      });
      if (res.ok) {
        trackLeadEvent({
          form_location: "landing_survey",
          service_type: floorType,
          suburb,
          step_completed: 4,
        });
        setSubmitted(true);
      } else {
        setSubmitError("Something went wrong. Please call us on 0466 385 069.");
      }
    } catch {
      setSubmitError("Something went wrong. Please call us on 0466 385 069.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClasses =
    "w-full bg-[#111] border border-border rounded-lg px-4 py-3 text-white placeholder:text-muted focus:outline-none focus:border-orange transition-colors";

  /* ── Success state ─────────────────────────────────────────── */
  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-orange mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white">Thanks, {name.split(" ")[0]}!</h3>
        <p className="text-muted mt-2 leading-relaxed max-w-sm mx-auto">
          We&apos;ll be in touch within 24 hours to arrange your free site visit and quote.
        </p>
        <a
          href={siteConfig.phoneTel}
          className="inline-block mt-5 text-orange font-semibold text-lg hover:underline"
        >
          Or call now: {siteConfig.phoneFormatted}
        </a>
      </div>
    );
  }

  /* ── Progress bar ──────────────────────────────────────────── */
  const progressBar = (
    <div className="mb-6">
      <div className="flex justify-between text-xs text-muted mb-2">
        <span>Step {step} of {totalSteps}</span>
        <span>{Math.round(progress)}% complete</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-orange rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  const backBtn = (toStep: Step) => (
    <button
      type="button"
      onClick={() => setStep(toStep)}
      className="mt-2 w-full text-muted text-sm hover:text-white transition-colors"
    >
      ← Back
    </button>
  );

  return (
    <div>
      {progressBar}

      {/* Step 1 - Floor type */}
      {step === 1 && (
        <div>
          <p className="text-white font-medium mb-4">What type of floor are you looking to coat?</p>
          <div className="grid grid-cols-2 gap-3">
            {floorTypes.map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => selectFloorType(t.label)}
                className={`flex items-center gap-3 border rounded-lg px-4 py-3 text-left transition-all group
                  ${floorType === t.label
                    ? "bg-orange/10 border-orange"
                    : "bg-surface border-border hover:border-orange hover:bg-orange/10"
                  }`}
              >
                <span className="text-xl">{t.icon}</span>
                <span className="text-sm text-white font-medium group-hover:text-orange transition-colors">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 - Size */}
      {step === 2 && (
        <div>
          <p className="text-white font-medium mb-4">Approximately how large is the area?</p>
          <div className="grid grid-cols-2 gap-3">
            {sizeOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => selectSize(opt.value)}
                className={`border rounded-lg px-4 py-4 text-center transition-all
                  ${size === opt.value
                    ? "bg-orange/10 border-orange"
                    : "bg-surface border-border hover:border-orange hover:bg-orange/10"
                  }`}
              >
                <span className="text-white text-sm font-medium">{opt.label}</span>
              </button>
            ))}
          </div>
          {backBtn(1)}
        </div>
      )}

      {/* Step 3 - Timeline */}
      {step === 3 && (
        <div>
          <p className="text-white font-medium mb-4">When are you looking to get this done?</p>
          <div className="grid grid-cols-2 gap-3">
            {timelineOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => selectTimeline(opt.value)}
                className={`border rounded-lg px-4 py-4 text-center transition-all
                  ${timeline === opt.value
                    ? "bg-orange/10 border-orange"
                    : "bg-surface border-border hover:border-orange hover:bg-orange/10"
                  }`}
              >
                <span className="text-white text-sm font-medium">{opt.label}</span>
              </button>
            ))}
          </div>
          {backBtn(2)}
        </div>
      )}

      {/* Step 4 - Contact */}
      {step === 4 && (
        <div>
          <p className="text-white font-medium mb-4">Almost done - how do we reach you?</p>
          <div className="space-y-3">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                autoFocus
                className={inputClasses}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className={inputClasses}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className={inputClasses}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="text"
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
                placeholder="Suburb"
                className={inputClasses}
              />
              {errors.suburb && <p className="text-red-400 text-xs mt-1">{errors.suburb}</p>}
            </div>
          </div>
          {submitError && (
            <p className="text-red-400 text-sm mt-3 text-center">{submitError}</p>
          )}
          <button
            type="button"
            onClick={submitContact}
            disabled={submitting}
            className="mt-4 w-full bg-orange text-white font-semibold rounded-lg px-6 py-3 hover:bg-orange-hover transition-colors btn-glow disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Get My Free Quote →"}
          </button>
          {backBtn(3)}
          <p className="text-muted text-xs text-center mt-3">No spam, ever. We&apos;ll call to arrange a free site visit.</p>
        </div>
      )}
    </div>
  );
}
