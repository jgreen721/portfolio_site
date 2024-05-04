import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_rozru8a";
const TEMPLATE_ID = "template_20wrm3t";
const PUBLIC_KEY = "tcrTKSXuJg0Ubk8Ql";

export const sendEmail = async () => {
  try {
    const message = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        text: "i hope this works",
        from: "Brats Pack Site",
        to: "justngreen721@gmail.com",
        subject: "testing emailjs",
      },
      {
        publicKey: PUBLIC_KEY,
      }
    );
    console.log(message);
  } catch (err) {
    console.error("ERROR YOU PUTZ", err);
  }
};
