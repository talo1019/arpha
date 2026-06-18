import LocaleLink from "@/components/LocaleLink";
import { getDictionary } from "@/lib/i18n";

export function generateMetadata() {
  return { title: "Privacy Notice – Arpha", description: "Arpha Privacy Notice explaining how we collect, use, and protect your personal information." };
}

export default function PrivacyPage({ params }) {
  const t = getDictionary(params.lang);
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="breadcrumb">
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span><span>Privacy Notice</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "18px" }}>Legal</span>
          <h1>Privacy Notice</h1>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginTop: "8px" }}>Effective Date: July 2024</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="legal-body">

            <p>This Privacy Notice ("Notice") explains the types of personal information and other non-personal information Arpha LLC and its affiliates and subsidiaries (collectively, "Arpha") obtain about Arpha customers and other individuals, how Arpha uses that information and with whom it may be shared, and the choices available to you regarding how Arpha collects, stores, and uses that information.</p>
            <p>This Notice applies to Arpha's external-facing operations, including our website, mobile applications, and any other of our products, hardware, and services that link to this Notice (collectively, "Services"). This policy does not apply to employees, for whom we maintain a separate employee privacy notice.</p>
            <p>We may provide different or additional privacy notices in connection with certain activities, products, or services to supplement or clarify our privacy practices.</p>

            <h2>Notice at Collection — Information We Collect</h2>
            <p>Depending on the nature of our relationship with you, how you choose to use Arpha's Services, and the Services available in your region, we may collect the following information:</p>
            <ul>
              <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and password.</li>
              <li><strong>Emergency-Related Information:</strong> If you use Emergency Response, you may provide family member data such as birth year, sex, language, and notes (e.g., medical conditions).</li>
              <li><strong>Billing Information:</strong> When you buy a product or subscribe, we collect billing address and payment details.</li>
              <li><strong>Third-Party Links:</strong> If you connect your Arpha account to other services, we may receive related information.</li>
              <li><strong>Location Data:</strong> We may collect zip code, state, and IP-derived location. Features like geofencing may require precise location access.</li>
              <li><strong>Driving Data:</strong> With automatic crash detection, we may collect gyroscope, accelerometer, compass, and Bluetooth data from your phone.</li>
              <li><strong>User Content:</strong> Includes uploaded/captured photos, audio, video, reviews, suggestions, surveys, and customer support chats.</li>
              <li><strong>Device Info:</strong> Includes advertising IDs, OS, hardware, battery life, Wi-Fi connections, and carrier info.</li>
              <li><strong>Usage Data:</strong> Involves usage trends, error logs, internet speeds, motion/temperature/light/sound data, serial numbers, and browser/device behavior.</li>
              <li><strong>Facial Recognition:</strong> If enabled, we collect face images and prints for Person Recognition. In some areas, consent may be required for individuals appearing in video.</li>
              <li><strong>Job Applicants:</strong> If applying to Arpha, we collect resumes, skills, work history, and qualifications.</li>
            </ul>
            <p>Under California law, we may share categories such as account info, device info, usage data, billing, and third-party account connections for cross-contextual behavioral advertising. See the Your Rights and Choices section for opt-out options.</p>

            <h2>How Long We Keep Information</h2>
            <p>We retain your information while your account remains active and for as long as necessary for the purposes in this Notice, or as legally required.</p>

            <h2>Why We Use Information</h2>
            <p>Depending on how you interact with Arpha, we use information to:</p>
            <ul>
              <li><strong>Communicate with You:</strong> Respond to questions, send feature updates, service notices, and job applicant follow-ups.</li>
              <li><strong>Provide Services:</strong> For device setup, emergency response, or geofencing features. We may use AI to process video data for alerts and feature customization.</li>
              <li><strong>Improve Services:</strong> Analyze usage, customize preferences, and improve accuracy. Donated video content may be used for research and AI training (with your permission).</li>
              <li><strong>Marketing:</strong> Send updates about new products, services, and third-party offers via email, app, or social media. You can opt out at any time.</li>
              <li><strong>Security and Fraud Prevention:</strong> Detect fraud, unauthorized access, or policy violations.</li>
            </ul>
            <p>Our legal basis for processing includes contract performance, consent, and legitimate interests such as service improvement and fraud detection.</p>

            <h2>Your Use of Information You Collect Through Our Devices</h2>
            <p>Our Services may allow you to use facial recognition features such as "Person Recognition," which use AI to identify familiar individuals. You can control whether this feature is on or off in your settings.</p>
            <p>If you enable facial recognition, you may be legally required to notify and obtain consent from individuals — especially minors — viewed by your camera. It is your responsibility to comply with all applicable laws.</p>

            <h2>Sensitive Information</h2>
            <p>We do not use or disclose sensitive personal information, as defined by California law, for inferring characteristics or for any purposes not permitted by law.</p>

            <h2>Disclosure of Information</h2>
            <p>We may disclose information in the following ways:</p>
            <ul>
              <li><strong>Within Our Family of Companies:</strong> This includes current and future affiliates and subsidiaries.</li>
              <li><strong>To Family, Friends, and Emergency Contacts:</strong> With Arpha, you can share device access and location. In emergencies, we share data with designated contacts.</li>
              <li><strong>To Service Providers and Contractors:</strong> Including customer support, payment processors, chat systems, crash detection services, and emergency dispatchers.</li>
              <li><strong>To Advertising &amp; Analytics Partners:</strong> We use first- and third-party tools (cookies, SDKs, pixels) for marketing, personalization, and measurement.</li>
              <li><strong>To Connected Products/Services:</strong> You may grant third-party platforms access to specific device and account data.</li>
              <li><strong>To Comply With Law or Protect Rights:</strong> We may respond to court orders, subpoenas, or valid government/legal requests. We may also share data to detect fraud, secure systems, and prevent illegal activity.</li>
              <li><strong>To a Successor Business:</strong> In cases of merger, acquisition, or sale of the business, data may be transferred as part of the transaction.</li>
            </ul>

            <h2>How We Collect Information</h2>
            <p>We collect data in three main ways:</p>
            <ul>
              <li><strong>Directly From You:</strong> When you create an account, buy a product, adjust settings, interact with support, or post on social media.</li>
              <li><strong>Passively Using Tracking Tools:</strong> Such as cookies, SDKs, pixels, log files, and embedded scripts, depending on your settings and consents.</li>
              <li><strong>From Third Parties:</strong> This includes usage data from integrated products, information shared by other users, analytics partners, or public/government databases.</li>
            </ul>
            <p>Arpha may merge data collected from multiple devices, accounts, and third-party sources to improve service integration and personalization.</p>

            <h2>Your Rights and Choices</h2>
            <p>You have certain privacy rights, which vary by region. These include:</p>
            <h3>Mobile and Account Settings</h3>
            <p>You can manage preferences like push notifications, video/audio capture settings, and data deletion through your account dashboard. Deleting data may not fully erase it if retention is required by law.</p>
            <h3>Marketing and Behavioral Advertising</h3>
            <p>You may opt out of promotional emails using the unsubscribe link. Non-marketing communications (e.g., service updates) will still be sent. You can opt out of interest-based ads via the Privacy Center or by emailing <a href="mailto:privacy@arpha.com">privacy@arpha.com</a>.</p>
            <h3>Cookies and Tracking</h3>
            <p>Our website supports common browser signals like Do Not Track and Global Privacy Control. Preferences can be set via the "Your Privacy Choices" link in the footer.</p>
            <h3>Rights in Certain States</h3>
            <p>For residents of California, Colorado, Connecticut, Florida, Montana, Oregon, Texas, Utah, Virginia, and others, rights include:</p>
            <ul>
              <li>Right to Know/Access</li>
              <li>Right to Delete</li>
              <li>Right to Correct</li>
              <li>Right to Limit Use of Sensitive Data</li>
              <li>Right to Object or Withdraw Consent</li>
            </ul>
            <p>You can exercise rights through your Arpha account or by contacting <a href="mailto:privacy@arpha.com">privacy@arpha.com</a>. We verify your identity to process requests. You may also designate an Authorized Agent by submitting valid written authorization or power of attorney.</p>

            <h2>Notice of Right to Opt-Out of Sale/Sharing</h2>
            <p>Arpha allows consumers to opt out of targeted or cross-contextual advertising, sale of personal data, and automated profiling for legal or similar impacts. See the previous sections for opt-out instructions.</p>

            <h2>Nevada Residents</h2>
            <p>You may request to opt out of future data sales by contacting <a href="mailto:privacy@arpha.com">privacy@arpha.com</a>.</p>

            <h2>Notice of Financial Incentives</h2>
            <p>From time to time, Arpha may offer financial incentives (e.g., coupons, access to premium features) in exchange for personal data like email or advertising ID. We estimate the value of your data based on the costs of collecting, storing, and providing incentives. Participation is voluntary and can be withdrawn at any time via your account or by emailing <a href="mailto:privacy@arpha.com">privacy@arpha.com</a>.</p>

            <h2>Transfers and Storage of Information</h2>
            <p>Arpha is based in the United States. Your data may be processed or stored in the U.S. or other countries. Where required (e.g., for data from Europe), we apply legal safeguards such as Standard Contractual Clauses.</p>

            <h2>Children's Privacy</h2>
            <p>Our Services are not intended for children under 13. If we learn that we collected information from a child without parental consent, we will delete it. Contact <a href="mailto:privacy@arpha.com">privacy@arpha.com</a> with subject line: "Parental Information Request".</p>

            <h2>How We Protect Information</h2>
            <p>We use technical and organizational safeguards but cannot guarantee 100% security over the Internet. Please use strong, unique passwords and limit sharing.</p>

            <h2>Third-Party Services and Sites</h2>
            <p>Our Services may link to or integrate with third-party products or platforms. This Notice does not govern those parties. Please review their privacy policies separately.</p>

            <h2>How to Contact Us</h2>
            <p>Questions about this Notice? Email us at <a href="mailto:privacy@arpha.com">privacy@arpha.com</a>.</p>

          </div>
        </div>
      </section>
    </>
  );
}
