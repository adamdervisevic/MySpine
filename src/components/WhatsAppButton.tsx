import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/38162777566"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pošalji WhatsApp poruku"
      className="fixed bottom-5 right-5 z-[998] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-all hover:-translate-y-1 hover:bg-[#1faa53] md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}
