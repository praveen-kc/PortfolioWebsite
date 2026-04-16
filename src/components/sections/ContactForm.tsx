"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { trackContactSubmit } from "@/lib/analytics";

const subjectOptions = [
  "Job Opportunity",
  "Freelance Project",
  "General Inquiry",
  "Other",
] as const;

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.enum(subjectOptions, {
    message: "Please select a subject",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      trackContactSubmit();
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email directly.");
    }
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-6 md:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-xr-green/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-xr-green" />
            </div>
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-t1 text-xl mb-2">
              Message sent!
            </h3>
            <p className="text-t2 mb-6">
              Thanks for reaching out. I&apos;ll get back to you within 24 hours.
            </p>
            <Button
              variant="ghost"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-t2 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={cn(
                  "w-full bg-elevated border rounded-lg px-4 py-3",
                  "text-t1 placeholder:text-t3 font-[family-name:var(--font-body)]",
                  "transition-colors focus:outline-none focus:border-primary",
                  errors.name ? "border-alert" : "border-border"
                )}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-alert text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-t2 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={cn(
                  "w-full bg-elevated border rounded-lg px-4 py-3",
                  "text-t1 placeholder:text-t3 font-[family-name:var(--font-body)]",
                  "transition-colors focus:outline-none focus:border-primary",
                  errors.email ? "border-alert" : "border-border"
                )}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-alert text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-t2 mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                {...register("subject")}
                className={cn(
                  "w-full bg-elevated border rounded-lg px-4 py-3",
                  "text-t1 font-[family-name:var(--font-body)]",
                  "transition-colors focus:outline-none focus:border-primary",
                  "appearance-none cursor-pointer",
                  errors.subject ? "border-alert" : "border-border"
                )}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p className="text-alert text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-t2 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                className={cn(
                  "w-full bg-elevated border rounded-lg px-4 py-3 min-h-[120px] resize-y",
                  "text-t1 placeholder:text-t3 font-[family-name:var(--font-body)]",
                  "transition-colors focus:outline-none focus:border-primary",
                  errors.message ? "border-alert" : "border-border"
                )}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-alert text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {status === "error" && (
              <div className="flex items-start gap-2 text-alert text-sm bg-alert/10 border border-alert/20 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={status === "loading"}
              className="w-full"
            >
              Send Message
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
