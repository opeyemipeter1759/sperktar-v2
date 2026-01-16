
export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
          Contact Us
        </h1>
        <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-400">
          Have a project in mind? We&apos;d love to hear from you. Fill out the form below to get in touch.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl">
        <div className="glassmorphic-card rounded-lg p-8">
          <div id="leadoo-inpage-container"></div>
        </div>
      </div>
    </main>
  );
}
