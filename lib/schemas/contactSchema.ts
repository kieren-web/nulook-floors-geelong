import { z } from "zod";

const auPhoneRegex = /^(\+?61|0)[2-478](\s?\d){8}$/;

export const heroFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(auPhoneRegex, "Please enter a valid Australian phone number"),
  suburb: z.string().min(2, "Please enter your suburb"),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().regex(auPhoneRegex, "Please enter a valid Australian phone number"),
  email: z.string().email("Please enter a valid email address"),
  suburb: z.string().min(2, "Please enter your suburb"),
  serviceType: z.enum(["residential-garage", "commercial-industrial", "workshop", "other"]).optional(),
  message: z.string().max(1000).optional(),
});

export const surveyContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().regex(auPhoneRegex, "Enter a valid Australian phone number"),
  email: z.string().email("Enter a valid email address"),
  suburb: z.string().min(2, "Suburb is required"),
});

export type HeroFormValues = z.infer<typeof heroFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type SurveyContactValues = z.infer<typeof surveyContactSchema>;
