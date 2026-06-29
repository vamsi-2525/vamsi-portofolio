import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name too long'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100),
  projectType: z.enum(['web', 'ai', 'erp', 'automation', 'consulting', 'other'], {
    message: 'Please select a project type',
  }),
  budget: z.string().optional(),
  message: z.string().min(20, 'Message must be at least 20 characters').max(2000, 'Message too long'),
  timeline: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
