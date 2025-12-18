import { contactEmail, contactDescription } from "@/src/app/data/contact";

export default function ContactDescription() {
  return (
    <>
      <p className="text-sm md:text-lg leading-relaxed mb-8 text-muted-foreground text-center max-w-2xl mx-auto">
        {contactDescription[0]}{" "}
        <a
          href={`https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${contactEmail}`}
          className="text-primary underline hover:text-primary/80 transition-colors"
        >
          {contactEmail}
        </a>.
      </p>

      <p className="text-sm md:text-lg leading-relaxed mb-8 text-muted-foreground text-center max-w-2xl mx-auto">
        {contactDescription[1]}
      </p>
    </>
  );
}
