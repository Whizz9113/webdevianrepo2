import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { gender, firstName, lastName, email, company, phone, callbackTime, message } = body;

    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['asulschani@gmail.com'],
        subject: 'Neue Kontaktanfrage von WebDevian',
        html: `
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Anrede:</strong> ${gender}</p>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Unternehmen:</strong> ${company || 'Nicht angegeben'}</p>
          <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
          <p><strong>Bevorzugte Rückrufzeit:</strong> ${callbackTime || 'Nicht angegeben'}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message}</p>
        `,
        reply_To: email,
      });

      if (error) {
        console.error('Resend Error:', error);
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({ success: true, data });
    } catch (resendError) {
      console.error('Resend Fehler:', resendError);
      return NextResponse.json(
        { error: 'Fehler beim E-Mail-Versand über Resend' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    );
  }
} 
