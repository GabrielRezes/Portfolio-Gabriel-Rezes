import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// eslint-disable-next-line consistent-return
export const sendContactEmail = async (form: any) => {
  try {
    return await emailjs.sendForm(
      `${SERVICE_ID}`,
      `${TEMPLATE_ID}`,
      form,
      `${PUBLIC_KEY}`
    );
  } catch (error) {
    return error;
  }
};
