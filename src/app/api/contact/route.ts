import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, projectType, budget, message, timeline } = parsed.data;

    // Log to console in development
    console.log('📩 New contact inquiry:', { name, email, subject, projectType });

    // TODO: When Supabase is connected, store in DB:
    // await supabase.from('contact_inquiries').insert({ name, email, subject, project_type: projectType, budget, message, timeline });

    // TODO: When Resend is connected, send email:
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@vamsikrishna.dev>',
    //   to: [process.env.CONTACT_EMAIL_TO!],
    //   subject: `[Portfolio] New Inquiry: ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // });

    return NextResponse.json({ success: true, message: 'Message received! I\'ll reply within 24 hours.' });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
