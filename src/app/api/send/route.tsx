import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL

// export async function POST( req, res ) {
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ['delivered@resend.dev'],
//       subject: 'Hello world',
//       react: EmailTemplate({ firstName: 'John' }),
//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }