import { whatsappNumber, whatsappText } from "@/src/app/data/contact";

export default function WhatsAppButton() {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto w-fit flex items-center justify-center px-5 py-2 rounded-full 
                 border border-primary text-primary text-sm font-medium
                 hover:bg-primary hover:text-background 
                 transition-all duration-300 hover:scale-[1.03]"
    >
      Let’s talk on WhatsApp 💌
    </a>
  );
}
