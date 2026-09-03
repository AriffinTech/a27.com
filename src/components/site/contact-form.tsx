"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";

type ProjectEnquiry = {
  name: string;
  email: string;
  company: string;
  companyWebsite: string;
  projectType: string;
  timeline: string;
  message: string;
  officeLocation: string;
};

type FieldName = keyof ProjectEnquiry;
type Errors = Partial<Record<FieldName | "form", string>>;

const initialEnquiry: ProjectEnquiry = {
  name: "",
  email: "",
  company: "",
  companyWebsite: "",
  projectType: "",
  timeline: "",
  message: "",
  officeLocation: "",
};

function validate(enquiry: ProjectEnquiry): Errors {
  const errors: Errors = {};
  if (!enquiry.projectType) errors.projectType = "Please select an area.";
  if (!enquiry.message.trim()) errors.message = "Please provide some project details.";
  if (!enquiry.name.trim()) errors.name = "Add your name so we know how to address you.";
  if (!/^\S+@\S+\.\S+$/.test(enquiry.email)) errors.email = "Enter a valid work email address.";
  if (enquiry.companyWebsite && !/^https?:\/\/.+/i.test(enquiry.companyWebsite)) {
    errors.companyWebsite = "Use a full link starting with https://.";
  }
  return errors;
}

export function ProjectBriefForm() {
  const [enquiry, setEnquiry] = useState<ProjectEnquiry>(initialEnquiry);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const update = (field: FieldName, value: string) => {
    setEnquiry((current) => ({ ...current, [field]: value }));
    if (errors[field] || errors.form) {
      setErrors((current) => ({ ...current, [field]: undefined, form: undefined }));
    }
  };

  const validateField = (field: FieldName) => {
    const nextErrors = validate(enquiry);
    setErrors((current) => ({ ...current, [field]: nextErrors[field] }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(enquiry);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/project-enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
      const result = await response.json().catch(() => null) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "Your message could not be sent. Please try again.");
      }

      setIsSubmitted(true);
      setEnquiry(initialEnquiry);
    } catch (error) {
      setErrors({ form: error instanceof Error ? error.message : "Your message could not be sent. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="contact-form" aria-live="polite">
        <div className="rounded-[var(--radius-md)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-8">
          <CheckCircle2 aria-hidden="true" className="mb-5 text-[var(--color-accent)]" size={28} />
          <h2 className="font-display text-[var(--text-2xl)] font-bold tracking-tight text-[var(--color-ink)]">We received your message.</h2>
          <p className="mt-3 max-w-[48ch] text-[var(--color-muted)]">Thank you. A27 will review it and reply using the email you provided.</p>
          <Button className="mt-6" onClick={() => setIsSubmitted(false)} type="button" variant="secondary">
            Send another message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-grid">
        <Field label="What can we help you with?" error={errors.projectType} htmlFor="project-type">
          <select
            aria-describedby={errors.projectType ? "project-type-error" : undefined}
            aria-invalid={Boolean(errors.projectType)}
            id="project-type"
            onBlur={() => validateField("projectType")}
            onChange={(event) => update("projectType", event.target.value)}
            required
            value={enquiry.projectType}
          >
            <option value="">Select an area...</option>
            <option value="New website or redesign">New website or redesign</option>
            <option value="Automating WhatsApp & customer enquiries">Automating WhatsApp & customer enquiries</option>
            <option value="Connecting tools & business workflows">Connecting tools & business workflows</option>
            <option value="Building a custom dashboard or system">Building a custom dashboard or system</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </Field>
        <Field label="When do you want to start?" hint="Optional" htmlFor="timeline">
          <select id="timeline" onChange={(event) => update("timeline", event.target.value)} value={enquiry.timeline}>
            <option value="">Select one...</option>
            <option value="Just exploring options">Just exploring options</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="In the next few months">In the next few months</option>
            <option value="No fixed timeline">No fixed timeline</option>
          </select>
        </Field>
      </div>
      <Field label="Tell us about the project" error={errors.message} htmlFor="message">
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          id="message"
          onBlur={() => validateField("message")}
          onChange={(event) => update("message", event.target.value)}
          placeholder="What are the main challenges you're facing, or what goals are you trying to hit? (e.g., enquiries are getting missed, tracking orders is too manual, or you need a better website)."
          required
          rows={6}
          value={enquiry.message}
        />
      </Field>
      <div className="form-grid">
        <Field label="Your name" error={errors.name} htmlFor="name">
          <input
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            id="name"
            onBlur={() => validateField("name")}
            onChange={(event) => update("name", event.target.value)}
            required
            value={enquiry.name}
          />
        </Field>
        <Field label="Work email" error={errors.email} htmlFor="email">
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            id="email"
            onBlur={() => validateField("email")}
            onChange={(event) => update("email", event.target.value)}
            required
            type="email"
            value={enquiry.email}
          />
        </Field>
        <Field label="Business name" hint="Optional" htmlFor="company">
          <input
            autoComplete="organization"
            id="company"
            onChange={(event) => update("company", event.target.value)}
            value={enquiry.company}
          />
        </Field>
        <Field label="Website or social link" hint="Optional" error={errors.companyWebsite} htmlFor="company-website">
          <input
            aria-describedby={errors.companyWebsite ? "company-website-error" : undefined}
            aria-invalid={Boolean(errors.companyWebsite)}
            id="company-website"
            inputMode="url"
            onBlur={() => validateField("companyWebsite")}
            onChange={(event) => update("companyWebsite", event.target.value)}
            placeholder="https://"
            type="url"
            value={enquiry.companyWebsite}
          />
        </Field>
      </div>
      <div aria-hidden="true" className="hidden">
        <label htmlFor="office-location">Office location</label>
        <input autoComplete="off" id="office-location" name="office-location" onChange={(event) => update("officeLocation", event.target.value)} tabIndex={-1} value={enquiry.officeLocation} />
      </div>
      {errors.form ? <p className="form-message form-message--error" role="alert">{errors.form}</p> : null}
      <div className="contact-form__footer">
        <p>We respect your privacy. Your information is securely sent directly to our team.</p>
        <Button disabled={isSubmitting} size="lg" type="submit" variant="primary">
          {isSubmitting ? <LoaderCircle aria-hidden="true" className="spin" size={17} /> : <Send aria-hidden="true" size={17} />}
          {isSubmitting ? "Sending message" : "Send your message"}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  children: React.ReactNode;
  error?: string;
  hint?: string;
  htmlFor: string;
  label: string;
};

function Field({ children, error, hint, htmlFor, label }: FieldProps) {
  return (
    <div className="field">
      <label htmlFor={htmlFor}>{label}{hint ? <span>{hint}</span> : null}</label>
      {children}
      <p className={error ? "field__message field__message--error" : "field__message"} id={error ? `${htmlFor}-error` : undefined}>
        {error ?? " "}
      </p>
    </div>
  );
}
