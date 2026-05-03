"use client";
import { useState } from "react";

type FormType = "evaluation" | "dataset" | "custom";

interface IntakeFormProps {
  type: FormType;
  title: string;
  description: string;
  fields: { name: string; label: string; placeholder: string; required?: boolean }[];
}

export function IntakeForm({ type, title, description, fields }: IntakeFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `[${type}] intake — ${values.company || "(company)"}`;
    const body = fields
      .map((f) => `${f.label}:\n${values[f.name] || "(none provided)"}`)
      .join("\n\n");
    const mailto = `mailto:kaneaziz@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="paper-card" style={{ padding: "2rem 1.8rem" }}>
      <h3
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "1.25rem",
          marginBottom: "0.5rem",
          color: "#1A1A1A",
          lineHeight: "1.2",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Instrument Serif', serif",
          color: "rgba(26,26,26,0.62)",
          marginBottom: "1.25rem",
          fontSize: "0.95rem",
          lineHeight: "1.5",
        }}
      >
        {description}
      </p>
      {fields.map((f) => (
        <div key={f.name} style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "rgba(26,26,26,0.62)",
              marginBottom: "0.4rem",
            }}
          >
            {f.label}{f.required && " *"}
          </label>
          {f.name === "problem" ? (
            <textarea
              value={values[f.name] || ""}
              onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
              placeholder={f.placeholder}
              required={f.required}
              rows={4}
              style={{
                width: "100%",
                padding: "0.65rem 0.8rem",
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1rem",
                border: "1px solid rgba(26,26,26,0.12)",
                borderRadius: "4px",
                background: "white",
                color: "#1A1A1A",
                resize: "vertical",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          ) : (
            <input
              type="text"
              value={values[f.name] || ""}
              onChange={(e) => setValues({ ...values, [f.name]: e.target.value })}
              placeholder={f.placeholder}
              required={f.required}
              style={{
                width: "100%",
                padding: "0.65rem 0.8rem",
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1rem",
                border: "1px solid rgba(26,26,26,0.12)",
                borderRadius: "4px",
                background: "white",
                color: "#1A1A1A",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        style={{
          padding: "0.7rem 1.4rem",
          background: "#1D9E75",
          color: "#1A1A1A",
          border: "none",
          borderRadius: "6px",
          fontFamily: "'Instrument Serif', serif",
          fontSize: "1.05rem",
          cursor: "pointer",
          marginTop: "0.5rem",
        }}
      >
        Send via email &rarr;
      </button>
      {submitted && (
        <p
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            color: "rgba(26,26,26,0.62)",
            marginTop: "1rem",
            fontSize: "0.9rem",
            lineHeight: "1.5",
          }}
        >
          Your default email client should have opened. If not, the form contents are ready to be pasted into any email to{" "}
          <strong>kaneaziz@gmail.com</strong>.
        </p>
      )}
    </form>
  );
}
