import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="container max-w-2xl px-4 py-16 pt-32 mx-auto space-y-7 ">
      <div className="text-center ">
        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg font-light leading-relaxed text-gray-400">
          Have a project in mind? We&apos;d love to hear from you. You can reach
          us by clicking the floating contact button or the &quot;Get a
          Quote&quot; button in the header.
        </p>
      </div>
      <div>
        <ContactForm />
      </div>
    </main>
  );
}
