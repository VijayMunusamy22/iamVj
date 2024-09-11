import { NextRequest } from "next/server";
import { EmailTemplate } from "../../../components/UI/EmailTemplate/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'contact_inbound@gmail.com',
      to: ['vijaymunusamy22@gmail.com'],
      subject: 'Hey, New contact enquiry [Inbound]',
      react: EmailTemplate({ firstName: 'Victory' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}