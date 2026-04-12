declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLeadEvent(params: {
  form_location: "homepage_hero" | "contact_page" | "landing_survey";
  service_type?: string;
  suburb?: string;
  step_completed?: number;
}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "generate_lead", {
    event_category: "Lead Form",
    form_location: params.form_location,
    service_type: params.service_type ?? "unknown",
    suburb: params.suburb ?? "unknown",
    step_completed: params.step_completed ?? null,
  });
}

export function trackFormStep(step: number, form: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "form_step_complete", {
    event_category: "Lead Form",
    form_name: form,
    step_number: step,
  });
}
