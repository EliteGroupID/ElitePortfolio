"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
    <div className="lg:px-32 bg-gray-50 dark:bg-neutral-900 py-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2 text-neutral-900 dark:text-white">Get in Touch</h1>
      <p className="text-neutral-500 dark:text-neutral-400">We&apos;d love to hear from you</p>
      <div className="flex flex-row w-full justify-center gap-x-12 lg:gap-x-24 mt-8">
        <button
          onClick={openWhatsAppWeb}
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-all duration-200 shadow-lg">
            <FaWhatsapp className="text-white text-3xl" />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">WhatsApp</p>
        </button>

        <button
          onClick={openInstagramApp}
          className="flex flex-col items-center gap-3 group"
        >
          <div
            style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-200 shadow-lg"
          >
            <FaInstagram className="text-white text-3xl" />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Instagram</p>
        </button>

        <button
          onClick={openGmailApp}
          className="flex flex-col items-center gap-3 group"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#EA4335] flex items-center justify-center group-hover:scale-110 transition-all duration-200 shadow-lg">
            <SiGmail className="text-white text-3xl" />
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Gmail</p>
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
