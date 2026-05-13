import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Linkedin, MapPin, Download, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { profile, opportunityTypes } from "@/data/portfolio";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(200),
  email: z.string().trim().email("Please enter a valid email").max(320),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  opportunity_type: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please share a few sentences").max(5000),
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      opportunity_type: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: values.name,
        email: values.email,
        company: values.company || null,
        opportunity_type: values.opportunity_type || null,
        message: values.message,
      });
      if (error) throw error;
      toast({
        title: "Message received",
        description:
          "Thank you - your message has been recorded and will reach Sadman shortly.",
      });
      reset();
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong",
        description:
          "Please try again, or email sadman.mohiuddin@gmail.com directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact | Sadman Ishraq Mohiuddin - Senior Business Analyst"
        description="Discuss Senior Business Analyst, Operations Strategy, or Consulting opportunities. Based in Montreal, Quebec, Canada. Email sadman.mohiuddin@gmail.com or use the contact form."
        path="/contact"
      />

      <section className="bg-navy text-navy-foreground">
        <div className="container-prose py-24 sm:py-28">
          <p className="eyebrow text-white/70">Contact</p>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl tracking-tight text-balance">
            Let's discuss the opportunity.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-white/75 leading-relaxed text-balance">
            Interested in discussing a Senior Business Analyst, Operations Strategy, or Consulting
            opportunity? Send a message and I'll respond promptly.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-prose grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4 space-y-8">
            <div>
              <p className="eyebrow mb-4">Direct</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-1 text-primary shrink-0" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm hover:text-primary"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="h-4 w-4 mt-1 text-primary shrink-0" />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm hover:text-primary"
                  >
                    linkedin.com/in/sadmanishraqmohiuddin
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
                  <span className="text-sm">{profile.location}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-8 space-y-6"
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input
                  type="text"
                  autoComplete="name"
                  {...register("name")}
                  className={inputClass}
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  autoComplete="email"
                  {...register("email")}
                  className={inputClass}
                />
              </Field>
              <Field label="Company" error={errors.company?.message} optional>
                <input
                  type="text"
                  autoComplete="organization"
                  {...register("company")}
                  className={inputClass}
                />
              </Field>
              <Field
                label="Role / Opportunity type"
                error={errors.opportunity_type?.message}
                optional
              >
                <select
                  {...register("opportunity_type")}
                  className={cn(inputClass, "appearance-none bg-background")}
                  defaultValue=""
                >
                  <option value="">Select an option…</option>
                  {opportunityTypes.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" error={errors.message?.message}>
              <textarea
                rows={7}
                {...register("message")}
                className={cn(inputClass, "resize-y")}
                placeholder="Share a few sentences about the role, project, or engagement."
              />
            </Field>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send message"}
                {!submitting && <ArrowRight className="h-4 w-4" />}
              </button>
              <p className="text-xs text-muted-foreground">
                Your details are kept private and used only to respond to your enquiry.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full px-4 py-3 text-sm bg-background border border-input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

function Field({
  label,
  error,
  optional,
  children,
}: {
  label: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.16em] font-medium text-foreground/80">
        {label}
        {optional && <span className="ml-2 text-muted-foreground normal-case tracking-normal">(optional)</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </label>
  );
}