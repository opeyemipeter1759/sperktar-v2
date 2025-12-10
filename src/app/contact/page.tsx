
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Contact Us
        </h1>
        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-400">
          Have a project in mind? We&apos;d love to hear from you. Fill out the
          form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
