import emailjs from "@emailjs/browser";

export const sendEmail = async ({ from, body, subject }) => {
  try {
    const message = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        to: "Justin G",
        message: body,
        from,
        subject,
      },
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    );
    console.log(message);
  } catch (err) {
    console.error("ERROR YOU PUTZ", err);
  }
};
