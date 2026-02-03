
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-background text-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-secondary-text/80">Last Updated: January 15, 2026</p>
          </div>

          <div className="space-y-10 text-secondary-text/80">
            <p>
              Sperktar (“we,” “our,” or “us”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
            </p>
            <p>
              By accessing or using our services, you agree to the practices described in this Privacy Policy.
            </p>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight text-white">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <div className="pl-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">a. Personal Information</h3>
                  <p>Information you voluntarily provide to us, including but not limited to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Company name</li>
                    <li>Project details or inquiries</li>
                    <li>Billing and payment information (where applicable)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">b. Technical & Usage Information</h3>
                  <p>Automatically collected information when you visit our website:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring URLs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">c. Client Project Data</h3>
                  <p>For clients, we may process data provided to us strictly for the purpose of delivering agreed services (including software development, prototyping, analytics, or consulting).</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-white">2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide and improve our services</li>
                <li>Respond to inquiries and proposals</li>
                <li>Deliver project work and client support</li>
                <li>Process payments and invoices</li>
                <li>Communicate updates, offers, or relevant information</li>
                <li>Maintain security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do not sell or rent your personal information.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">3. Legal Basis for Processing (GDPR)</h2>
                <p>Where applicable, we process personal data under the following legal bases:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Your consent</li>
                    <li>Performance of a contract</li>
                    <li>Legitimate business interests</li>
                    <li>Compliance with legal obligations</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">4. How We Share Information</h2>
                <p>We may share information only when necessary:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>With trusted service providers (e.g., hosting, payment processors, analytics tools)</li>
                    <li>With project partners strictly under confidentiality agreements</li>
                    <li>When required by law or legal process</li>
                    <li>To protect Sperktar’s rights, property, or safety</li>
                </ul>
                <p>All third parties are required to handle your data securely and responsibly.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">5. Data Security</h2>
                <p>We implement reasonable technical and organizational safeguards to protect your information, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Secure hosting environments</li>
                    <li>Access controls and confidentiality agreements</li>
                    <li>Industry-standard security practices</li>
                </ul>
                <p>However, no system is completely secure, and we cannot guarantee absolute security.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">6. Data Retention</h2>
                <p>We retain personal data only for as long as necessary to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Fulfill the purposes outlined in this policy</li>
                    <li>Meet legal, contractual, or regulatory requirements</li>
                </ul>
                <p>Client project data is retained and handled according to agreed contractual terms.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">7. Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Access your personal data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent</li>
                    <li>Object to certain processing</li>
                    <li>Request data portability</li>
                </ul>
                <p>To exercise these rights, please contact us using the details below.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">8. Cookies & Tracking Technologies</h2>
                <p>We may use cookies and similar technologies to improve website functionality and user experience. You can manage cookie preferences through your browser settings.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">9. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. Sperktar is not responsible for the privacy practices or content of those sites.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">10. International Data Transfers</h2>
                <p>Your information may be processed or stored in countries outside your country of residence. Where applicable, we ensure appropriate safeguards are in place.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">11. Children’s Privacy</h2>
                <p>Sperktar does not knowingly collect personal information from individuals under the age of 13. If such information is identified, it will be promptly deleted.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">12. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last Updated” date.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">13. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                <p>Sperktar</p>
                <p>Website: https://www.sperktar.com</p>
                <p>Email: admin@spertar.com</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
