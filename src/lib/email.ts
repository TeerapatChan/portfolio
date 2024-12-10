import emailjs from "@emailjs/browser";

export interface EmailParams {
  topic: string;
  name: string;
  email: string;
  detail: string;
  phone: string;
}

export const sendEmail = async (params: EmailParams) => {
  const templateParams = {
    topic: params.topic,
    name: params.name,
    email: params.email,
    detail: params.detail,
    phone: params.phone,
  };

  const response = await emailjs.send(
    "contact-service",
    "contact-email",
    templateParams,
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
  );

  return response;
};
