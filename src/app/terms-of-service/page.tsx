
import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="bg-background text-white min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-lg text-secondary-text/80">Last Updated: January 15, 2026</p>
          </div>

          <div className="space-y-10 text-secondary-text/80">
            <p>
              Welcome to Sperktar. These Terms of Service (“Terms”) govern your access to and use of our website, products, and services (collectively, the “Services”). By accessing or using Sperktar’s Services, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree to these Terms, please do not use our Services.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-white">1. About Sperktar</h2>
              <p>Sperktar is a software studio providing services including but not limited to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Software development</li>
                <li>Product prototyping and MVP builds</li>
                <li>Technical consulting</li>
                <li>Data, analytics, and AI-enabled solutions</li>
              </ul>
              <p>Services may be delivered on a project, retainer, or other agreed basis.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-white">2. Eligibility</h2>
              <p>By using our Services, you represent that:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>You are at least 18 years old</li>
                <li>You have the legal authority to enter into binding agreements</li>
                <li>Any information you provide is accurate and complete</li>
              </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">3. Scope of Services</h2>
                <p>The specific scope, timelines, deliverables, pricing, and responsibilities for client engagements will be defined in:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Written proposals</li>
                    <li>Statements of Work (SOWs)</li>
                    <li>Contracts or engagement letters</li>
                </ul>
                <p>In the event of a conflict, those documents shall prevail over these Terms.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">4. Client Responsibilities</h2>
                <p>Clients agree to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide accurate, complete, and timely information</li>
                    <li>Assign a point of contact for decisions and approvals</li>
                    <li>Review deliverables promptly and provide feedback</li>
                    <li>Ensure they have the right to share any data, content, or materials provided to Sperktar</li>
                </ul>
                <p>Delays caused by the client may affect delivery timelines and fees.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">5. Fees & Payments</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Fees are outlined in agreed proposals or contracts</li>
                    <li>Invoices must be paid within the agreed payment period</li>
                    <li>Late payments may result in suspension of Services</li>
                    <li>All fees are non-refundable unless expressly stated otherwise</li>
                </ul>
                <p>Sperktar reserves the right to revise pricing for future engagements with notice.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">6. Intellectual Property</h2>
                <div className="pl-6 space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold text-white">a. Client IP</h3>
                        <p>Unless otherwise agreed in writing:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Upon full payment, clients own the final deliverables created specifically for them</li>
                            <li>Pre-existing tools, frameworks, templates, or libraries used by Sperktar remain Sperktar’s intellectual property</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-white">b. Sperktar IP</h3>
                        <p>Sperktar retains all rights to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>Internal methodologies</li>
                            <li>Code libraries</li>
                            <li>Know-how, processes, and reusable components</li>
                        </ul>
                        <p>Clients are granted a limited license to use these solely as embedded in delivered work.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">7. Confidentiality</h2>
                <p>Both parties agree to keep confidential any non-public information shared during the engagement, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Business information</li>
                    <li>Technical details</li>
                    <li>Financial or strategic data</li>
                </ul>
                <p>Confidentiality obligations survive termination of Services.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">8. Data Protection & Privacy</h2>
                <p>Sperktar processes personal data in accordance with its Privacy Policy.</p>
                <p>Clients are responsible for ensuring they have lawful rights to share any data provided to Sperktar.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">9. Third-Party Tools & Services</h2>
                <p>Sperktar may use third-party platforms, APIs, or tools to deliver Services. Sperktar is not responsible for outages, changes, or failures caused by third-party providers.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">10. Warranties & Disclaimers</h2>
                <p>Services are provided on an “as is” and “as available” basis.</p>
                <p>To the fullest extent permitted by law:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Sperktar disclaims all warranties, express or implied</li>
                    <li>We do not guarantee uninterrupted or error-free Services</li>
                    <li>We do not guarantee specific business, financial, or commercial outcomes</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">11. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Sperktar shall not be liable for indirect, incidental, or consequential damages</li>
                    <li>Sperktar’s total liability shall not exceed the fees paid for the specific Services giving rise to the claim</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">12. Termination</h2>
                <p>Either party may terminate Services:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>As specified in the applicable agreement</li>
                    <li>For material breach not cured within a reasonable period</li>
                </ul>
                <p>Upon termination:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Outstanding fees remain payable</li>
                    <li>Confidentiality and IP provisions survive</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">13. Force Majeure</h2>
                <p>Sperktar shall not be liable for delays or failures caused by events beyond reasonable control, including but not limited to acts of God, internet outages, labor disputes, or governmental actions.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">14. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, unless otherwise stated in a specific contract.</p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">15. Changes to These Terms</h2>
                <p>Sperktar may update these Terms from time to time. Updated versions will be posted on our website with a revised “Last Updated” date.</p>
            </div>
            
            <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-white">16. Contact Information</h2>
                <p>For questions about these Terms, please contact us:</p>
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

export default TermsOfServicePage;
