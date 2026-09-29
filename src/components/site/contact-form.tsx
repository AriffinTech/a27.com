"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { isProjectType, pricingInterestLabels, projectTypeOptions, type PricingInterest, type ProjectType } from "@/config/project-enquiries";

type ProjectEnquiry = {
  company: string;
  email: string;
  projectType: ProjectType | "";
  message: string;
  officeLocation: string;
  interest?: PricingInterest;
};

type FieldName = keyof ProjectEnquiry;
type Errors = Partial<Record<FieldName | "form", string>>;

const initialEnquiry: ProjectEnquiry = {
  company: "",
  email: "",
  projectType: "",
  message: "",
  officeLocation: "",
};

function validate(enquiry: ProjectEnquiry): Errors {
  const errors: Errors = {};
  if (!enquiry.company.trim()) errors.company = "Enter your company name.";
  if (!/^\S+@\S+\.\S+$/.test(enquiry.email)) errors.email = "Enter a valid email address.";
  if (!isProjectType(enquiry.projectType)) errors.projectType = "Choose what you need help with.";
  if (!enquiry.message.trim()) errors.message = "Tell us a little about what you need.";
  return errors;
}

export function ProjectBriefForm({ initialInterest }: { initialInterest?: PricingInterest }) {
  const initialProjectType = initialInterest === "custom-tools" ? "custom-system" : initialInterest ? "website" : "";
  const [enquiry, setEnquiry] = useState<ProjectEnquiry>({ ...initialEnquiry, projectType: initialProjectType, interest: initialInterest });
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
      setEnquiry({ ...initialEnquiry, projectType: initialProjectType, interest: initialInterest });
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
      {initialInterest ? <p className="mb-6 text-sm text-[var(--color-muted)]">Asking about: <strong className="text-[var(--color-ink-2)]">{pricingInterestLabels[initialInterest]}</strong></p> : null}
      <div className="form-grid">
        <Field label="Company Name" error={errors.company} htmlFor="company">
          <input
            aria-describedby={errors.company ? "company-error" : undefined}
            aria-invalid={Boolean(errors.company)}
            autoComplete="organization"
            id="company"
            onBlur={() => validateField("company")}
            onChange={(event) => update("company", event.target.value)}
            placeholder="Your company name"
            required
            value={enquiry.company}
          />
        </Field>
        <Field label="Work Email" error={errors.email} htmlFor="email">
          <input
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            id="email"
            onBlur={() => validateField("email")}
            onChange={(event) => update("email", event.target.value)}
            placeholder="you@company.com"
            required
            type="email"
            value={enquiry.email}
          />
        </Field>
        <Field label="Project type" error={errors.projectType} htmlFor="project-type">
          <select
            aria-describedby={errors.projectType ? "project-type-error" : undefined}
            aria-invalid={Boolean(errors.projectType)}
            id="project-type"
            onBlur={() => validateField("projectType")}
            onChange={(event) => update("projectType", event.target.value)}
            required
            value={enquiry.projectType}
          >
            <option value="">Select project type</option>
            {projectTypeOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Tell us about your project" error={errors.message} htmlFor="message">
        <textarea
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={Boolean(errors.message)}
          id="message"
          onBlur={() => validateField("message")}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Describe your vision, timeline, must-have features..."
          required
          rows={6}
          value={enquiry.message}
        />
      </Field>
      
      <div aria-hidden="true" className="hidden">
        <label htmlFor="office-location">Office location</label>
        <input autoComplete="off" id="office-location" name="office-location" onChange={(event) => update("officeLocation", event.target.value)} tabIndex={-1} value={enquiry.officeLocation} />
      </div>
      {errors.form ? <p className="form-message form-message--error" role="alert">{errors.form}</p> : null}
      <div className="contact-form__footer">
        <p>We’ll review your message and reply by email with the next step.</p>
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
