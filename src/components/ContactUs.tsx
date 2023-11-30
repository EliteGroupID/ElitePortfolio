import WA from "../assets/wa.png";
import IG from "../assets/ig.png";
import GMAIL from "../assets/gmail.webp";

const ContactUs = () => {
  const openWhatsAppWeb = () => {
    const phoneNumber = "087748906897";
    const message = "Hello%20there!";
    const whatsappWebUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappWebUrl, "_blank");
  };

  const openGmailApp = () => {
    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=elite.tech@gmail.com";
    window.open(gmailUrl, "_blank");
  };

  const openInstagramApp = () => {
    const instagramUrl = "https://www.instagram.com/elite.tech/";
    window.open(instagramUrl, "_blank");
  };

  return (
    <div className="lg:px-32 bg-neutral-900 py-20 flex flex-col gap-y-4 items-center">
      <h1>Get in Touch</h1>
      <div className="flex flex-row w-full justify-center gap-x-10 lg:gap-x-32">
        <button onClick={openWhatsAppWeb}>
          <img src={WA} className="w-16" />
          <p>WhatsApp</p>
        </button>
        <button onClick={openInstagramApp}>
          <img src={IG} className="w-16" />
          <p>Instagram</p>
        </button>
        <button onClick={openGmailApp}>
          <img src={GMAIL} className="w-16" />
          <p>Gmail</p>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
