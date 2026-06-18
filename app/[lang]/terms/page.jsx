import LocaleLink from "@/components/LocaleLink";
import { getDictionary } from "@/lib/i18n";

export function generateMetadata() {
  return { title: "Terms of Service – Arpha", description: "Arpha Terms of Service governing use of Arpha products and services." };
}

export default function TermsPage({ params }) {
  const t = getDictionary(params.lang);
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="breadcrumb">
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span><span>Terms of Service</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "18px" }}>Legal</span>
          <h1>Terms of Service</h1>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginTop: "8px" }}>Updated September 2, 2024</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="legal-body">

            <p>Welcome to Arpha. Arpha is operated by Arpha LLC ("we," "our," "us," or "the Company"). We encourage you to read these Arpha Terms of Service ("Arpha Terms" or "Terms") below. By accessing or using the Arpha Services, you indicate your consent to these Terms.</p>

            <p>These Terms apply to your use of any of our products or services including:</p>
            <ol type="a">
              <li>the Arpha hardware products, including without limitation, smart locks, cameras, floodlights, video doorbells, base station devices, security systems, and sensors (referred to herein as the "Arpha System"); and/or</li>
              <li>the Arpha websites and any associated subscriptions, content services, accounts, mobile apps, streaming video sites, technical support and services accessible via Arpha websites, Arpha Total Security financing plans, all other web services, and software associated with the Arpha System (collectively referred to as the "Arpha Websites and Apps").</li>
              <li>(a) and (b) above being collectively referred to herein as the "Arpha Services."</li>
            </ol>

            <div className="legal-notice">
              <p>PLEASE NOTE THAT SECTION 6 CONTAINS A MANDATORY ARBITRATION PROVISION AND CLASS ACTION WAIVER, WHICH REQUIRES YOU TO ARBITRATE CERTAIN DISPUTES AND CLAIMS WITH US. EXCEPT AS SPECIFIED IN SECTION 6, THIS PROVISION REQUIRES THAT DISPUTES BE RESOLVED SOLELY THROUGH INDIVIDUAL ARBITRATION AND NOT AS A CLASS ARBITRATION OR CLASS ACTION.</p>
              <p>The arbitration provisions in these Terms do NOT apply retroactively or to latent claims that have accrued prior to the introduction of these arbitration provisions (August 26, 2020) but not raised or filed yet.</p>
              <p>IF YOU SIGN UP FOR ANY ARPHA SUBSCRIPTION SERVICES, YOU FURTHER AGREE, AS DESCRIBED IN SECTION 11, THAT YOUR SUBSCRIPTION MAY AUTOMATICALLY RENEW FOR THE SAME APPLICABLE TERM AND PRICE, UNTIL YOU CANCEL YOUR SUBSCRIPTION, INCLUDING IN ACCORDANCE WITH SECTION 11.2.</p>
            </div>

            <p><strong>Age:</strong> You must be at least 13 years of age to use the Arpha Services. If you are at least 13 years old and under the age of 18 ("Minor") you may use the Arpha Services only with the consent and under the supervision of a parent or legal guardian who agrees to be bound by these Terms. If you are a parent or legal guardian of a Minor, you consent to these Terms on their behalf and are fully responsible for their acts in relation to the Arpha Services. If you are under 13, do not attempt to register for the Arpha Services or send any information about yourself to us.</p>

            <h2>1. General</h2>
            <p>Your registration of the Arpha System through the Arpha Websites and Apps as well as use of the Arpha Services is subject to the provisions of these Terms. Arpha may at its discretion make changes to its website, policies, and terms and conditions, including these Terms. Arpha may provide you with notices regarding the Arpha Services, including changes to these Terms, by email to your email address on file with Arpha, by in-app messaging, by SMS, by regular mail, by postings on our website and/or the Arpha Service, or by other reasonable means now known or hereinafter developed. If you are dissatisfied with any changes to these Terms, you may cancel your Arpha Services in accordance with Section 14 of these Terms. Your use of the Arpha Services on or after the effective date of the change to the Terms constitutes your acceptance of the Terms, as modified. Any software component embodied in the Arpha Services is licensed to you, and not sold. Arpha Services cannot be used in the comprehensively sanctioned countries of Cuba, Iran, North Korea, Sudan, and Syria, and the Arpha System should not be sold in these countries.</p>
            <p>You agree that you will only use the Arpha Services for your personal and business purposes, and that you are not immediately reselling the Arpha Services or sub-licensing use of the Arpha Services to others as part of a trade, business, craft, or profession.</p>

            <h2>2. Registration Information</h2>
            <p>Registration of your Arpha System is required. To register, you must provide and maintain accurate and complete information, which may include: (i) your name (ii) your system serial number and (iii) an e-mail address. Arpha may terminate your account if you provide Arpha with inaccurate or incomplete user information. You also certify that you are legally permitted to use and access the Arpha Services. These Terms are void where prohibited by law, and the right to access the Arpha Services is revoked where prohibited by law.</p>
            <p>Arpha may collect, process, and store your videos and other information. Please review our Privacy Notice for details about how we collect, use, disclose, and retain information about you and your Arpha account. We encourage you to review the Privacy Notice frequently. You have the right to update your user information at any time. You may also be able to manage privacy settings related to collection, storage, and use of your user information and other types of information captured by the Arpha Services. Any such changes can be made by logging into your Arpha account. However, certain features of the Arpha Services may not be available if you restrict the collection, storage, or use of your information.</p>

            <h2>3. Member Account, Password, and Security</h2>
            <p>You are fully responsible for maintaining the confidentiality of the information required to access or make modifications to your account (e.g., passwords, PINs, verification codes), as well as for all activities that occur under your password or account. You agree to properly protect your account by, for example, exiting from or logging out of your account at the end of each session, by implementing two or multi-factor authentication if requested by Arpha, and by not sharing your password or two or multi-factor verification code. You further undertake to immediately notify us of unauthorized use of your password or account. In the event Arpha suspects fraudulent activity, we may suspend access to your account and Arpha Services or reset your passwords, pursuant to our security policies to prevent unauthorized access. We will not be liable for any loss or damage arising from your failure to comply with this Section 3.</p>
            <p>We may close your Arpha account if there is a justified reason to do so, such reason including if you are in breach of applicable laws, these Terms, applicable contractual provisions, or our guidelines or policies. We may also close your account if you demonstrate abusive behavior, your account is inactive for an extended period, or we are required to under a court order or governmental decree. You generally will have access to content and Arpha Services purchased by you up to the point of account closure.</p>

            <h2>4. Third-Party Content</h2>
            <p>The Arpha Services may give you the ability to access, use or integrate directly with third-party websites, apps, products, content, or other media controlled by third parties ("Third-Party Content"). You confirm to understand the following:</p>
            <ol type="a">
              <li>Third-Party Content providers may restrict or revoke access to their content at any time;</li>
              <li>We do not operate, control or endorse any Third-Party Content and are not responsible for and have no editorial or programming control over any Third-Party Content. Further, we do not guarantee the safety, accuracy, legality, and effectiveness of the Third-Party Content, and will have no responsibility for any Third-Party Content including material that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable; and</li>
              <li>We have no control over the distribution of Third-Party Content.</li>
            </ol>
            <p>You agree that we will have no liability to you or anyone else who uses your Arpha Services with regard to any Third-Party Content. You also agree and declare that Third-Party Content accessed or transferred using the Arpha Services is for your own personal or business use, and that the Arpha Services will not be used to illegally copy, illegally display, commercialize, or otherwise make illegal use of Third-Party Content. Unauthorized copying or distribution of copyrighted works may constitute an infringement of the copyright holders' rights. You agree to assume all risks in connection with your interaction or use of any Third-Party Content. You are responsible for reading and understanding the terms and conditions and privacy notice or privacy policy that applies to your use of Third-Party Content.</p>
            <p>We may close the accounts of users of any Arpha Services that infringe the copyrights, trademarks, or intellectual property rights of others. In addition, steps intended to defeat or bypass security measures designed to prevent intellectual property infringement may be illegal under U.S. law or comparable foreign laws. We may close the Arpha accounts of users who develop or use methods to defeat or bypass such security measures and may take any other necessary or appropriate action to prevent infringement of intellectual property holders' rights.</p>

            <h2>5. Changes to Your Arpha Service</h2>
            <p>We may change any part of the Arpha Services at any time, including without limitation for the following reasons: for legal or regulatory reasons; for security reasons; for privacy reasons; to enhance existing features; to add additional features or functionality; to remove features or functionality; to prevent misuse or abuse; to reflect changes or advancements in technology; to make business model adjustments; to make subscription fee changes; and to ensure the ongoing operability of the Arpha Services. If you reject these changes, you may cancel your subscription to the Arpha Services at any time, in accordance with Section 11.2. Regardless of any changes to the Arpha Services, any increase in the applicable subscription fee will not apply before the end of your current subscription period.</p>
            <p>We are under no obligation to provide any or all features and functionality to your Arpha Services and may, at our discretion, discontinue the provision of software updates to certain Arpha Services. Because different Arpha Systems may support different features and functionality, the level of service we provide may not be the same for each Arpha System.</p>

            <h2>6. Dispute Resolution by Binding Arbitration; Class Action Waiver</h2>
            <div className="legal-notice"><p>PLEASE READ THIS PROVISION CAREFULLY. IT AFFECTS YOUR RIGHTS.</p></div>
            <p>You understand and agree that by entering into these Terms, you and Arpha LLC are each agreeing to resolve disputes through final and binding arbitration, and are waiving the right to a trial by jury or to participate in a class action.</p>
            <h3>Binding Arbitration</h3>
            <p>To the extent permitted under applicable law, you and Arpha agree that any and all disputes or claims relating to these Terms, the Arpha Services, or your relationship with Arpha will be resolved exclusively through final and binding arbitration. This includes disputes about the interpretation, applicability, enforceability, or formation of this agreement to arbitrate.</p>
            <p>The arbitration shall be conducted by a neutral arbitrator in accordance with the Taiwan Arbitration Act or equivalent applicable arbitration rules in Taiwan, R.O.C. The arbitration shall be held in Taipei, Taiwan, in Chinese or English, depending on mutual agreement.</p>
            <p>Judgment upon the award rendered by the arbitrator may be entered in any court having jurisdiction thereof in Taiwan, R.O.C. The arbitration shall not involve any class or representative claims. You and Arpha agree to arbitrate only on an individual basis.</p>
            <p>The right to arbitration under this agreement is governed by Taiwan's legal framework and arbitration procedures. The arbitrator shall have the power to award all remedies available under applicable law, but may not award relief on a class or group basis.</p>
            <h3>Exceptions to Arbitration</h3>
            <p>Each party retains the right to:</p>
            <ul>
              <li>Seek injunctive or other equitable relief in a court of competent jurisdiction in Taiwan, R.O.C., for matters related to intellectual property rights, unauthorized use or access to the Arpha Services, or breach of confidentiality obligations.</li>
              <li>Bring claims in small claims court, if available and applicable under local Taiwan jurisdiction.</li>
            </ul>
            <h3>Class Action Waiver</h3>
            <p>You and Arpha agree that any arbitration will be conducted solely on an individual basis, and not as a class arbitration, class action, or other representative proceeding. The arbitrator shall have no authority to consolidate or join claims of other persons or parties who may be similarly situated, or to otherwise preside over any form of a class or representative proceeding.</p>
            <h3>Opt-Out</h3>
            <p>This arbitration provision and class action waiver are optional. You may opt out of this provision by sending a written, signed notice of your decision to <a href="mailto:legal@arpha.com">legal@arpha.com</a> within thirty (30) calendar days of your initial acceptance of these Terms.</p>

            <h2>7. Service Eligibility</h2>
            <p>Use of the Arpha Services requires that your Arpha System has access to an always-on, broadband internet connection, as outlined in Section 12. To enable the Arpha Services, all Arpha Systems must be registered at my.arpha.com or via the Arpha mobile applications for iOS or Android.</p>
            <h3>System Requirements</h3>
            <p>The Arpha Services will not function properly without the following:</p>
            <ul>
              <li>A Wi-Fi or other communication network that reliably connects to the Arpha System;</li>
              <li>An active Arpha account;</li>
              <li>For certain features, a compatible wireless device such as a smartphone or tablet;</li>
              <li>Always-on broadband internet access with sufficient bandwidth to support your Arpha System;</li>
              <li>Any additional system elements specified by Arpha.</li>
            </ul>
            <p>You are solely responsible for ensuring that all required system elements are available, compatible, and properly configured.</p>
            <p>Arpha is not obligated to continue supporting all versions of its systems, operating systems, or devices. Arpha may stop providing updates to devices it designates as end-of-life and does not guarantee long-term support for all hardware or software.</p>

            <h2>8. Member Conduct</h2>
            <p>You are entirely responsible for all content, data, audio, video, images, and other materials ("Content") that you capture, upload, save, transmit, or otherwise make available using the Arpha Services.</p>
            <p>You agree not to use the Arpha Services to:</p>
            <ul>
              <li>Post or transmit unlawful, harassing, defamatory, obscene, or otherwise offensive content;</li>
              <li>Infringe upon the rights of others, including intellectual property, privacy, or publicity rights;</li>
              <li>Collect or store personal data about other users without proper authorization;</li>
              <li>Introduce malware, viruses, or any harmful or destructive content;</li>
              <li>Interfere with or disrupt the Arpha Services or connected networks;</li>
              <li>Stalk, harass, impersonate, or misrepresent your identity;</li>
              <li>Access or use the Arpha Services through automated means not authorized by Arpha;</li>
              <li>Circumvent geofencing, access controls, or other protective features;</li>
              <li>Use unauthorized third-party hardware with the Arpha Services unless officially approved.</li>
            </ul>
            <p>Arpha personnel do not view your private content (photos, video, audio) without your explicit consent, unless legally required. Arpha reserves the right to remove any content that violates these Terms or applicable law.</p>
            <p>You are responsible for compliance with all applicable laws and regulations, including those related to: surveillance notice and consent (e.g., for facial recognition or audio recording); installation of monitoring equipment; data protection, consent for biometric data, and user privacy.</p>

            <h2>9. Content Submitted or Made Available for Inclusion on the Arpha Services</h2>
            <p>Arpha does not claim ownership of your Content. However, by submitting or uploading Content to the Arpha Services, you grant Arpha a worldwide, royalty-free, non-exclusive, perpetual, irrevocable, sublicensable, and transferable license to:</p>
            <ul>
              <li>Use, store, reproduce, display, adapt, and modify the Content;</li>
              <li>Make derivative works from the Content;</li>
              <li>Publicly display or distribute the Content for the purpose of operating, improving, and promoting the Arpha Services.</li>
            </ul>
            <p>This includes the right to use Content on third-party platforms as necessary to deliver the Arpha Services. You also grant each authorized user of the Arpha Services a limited license to access your Content as directed by you and solely within the functionality of the Arpha Services. When you authorize a third-party app or platform to access your Arpha Content, your relationship with that third-party will govern the handling of your data. These Terms do not restrict your ownership rights in your Content.</p>

            <h2>10. Subscription Services Fees</h2>
            <h3>10.1 Activation</h3>
            <p>To activate Arpha subscription services, you must complete an activation process that may include creating or signing in to your Arpha account. Activation does not occur automatically.</p>
            <h3>10.2 Ongoing Subscription</h3>
            <p>Some Arpha Services require an ongoing paid subscription. Your selected plan will determine the features and services available. Subscription fees are billed in advance and renew automatically unless canceled in accordance with Section 11.2. You may update your payment options through your Arpha account. Reactivation of a terminated subscription may incur a reactivation fee, which will be disclosed beforehand.</p>
            <h3>10.3 Free Trials and Promo Codes</h3>
            <p>Your subscription may begin with a free trial or promotional offer, which will convert to a paid subscription at the regular rate after the trial period unless canceled before expiration. Unless canceled before the end of the free trial or promotion, your payment method will be charged the full subscription fee plus applicable taxes. You may not receive a separate notice of the end of the trial. Eligibility for free trials and promotional pricing is determined by Arpha at its sole discretion.</p>

            <h2>11. Subscription Payment, Automatic Renewal, Cancellation, Price Changes and Refund Policy</h2>
            <h3>11.1 Subscription Payment</h3>
            <p>To subscribe, you must complete registration and choose a payment method. A separate subscription is required for each physical address where an Arpha System is used. If you select a recurring payment plan (monthly or annually), you authorize Arpha to charge your payment method automatically at the beginning of each billing period unless and until you cancel. Promotional rates will revert to the standard price upon renewal unless otherwise specified. Your subscription will not begin until Arpha or its payment processor verifies that your payment method is valid and in good standing.</p>
            <p>If you use a hardware + service financing plan (e.g., "Arpha Total Security Plan"), the service portion may automatically renew after the initial term unless canceled. You acknowledge that the billed amount may vary due to promotions, plan changes, or taxes.</p>
            <h3>11.2 Automatic Renewal and Cancellation</h3>
            <p>Subscriptions renew automatically unless canceled before the next billing cycle. Cancellation takes effect at the end of your current subscription term. You can cancel by:</p>
            <ul>
              <li>Logging into your account at my.arpha.com</li>
              <li>Using the Arpha mobile app (if available)</li>
              <li>Contacting Arpha Support at <a href="mailto:support@arpha.com">support@arpha.com</a></li>
            </ul>
            <p>If you purchased your plan through a third party (e.g., app store, reseller), cancellation must be done through that party. If your Arpha plan includes financed hardware, canceling the service may not relieve your financial obligation. Refer to your financing terms.</p>
            <h3>11.3 Price Changes</h3>
            <p>Arpha may change the price of subscription services. You will be notified at least 30 days before a price increase takes effect. Changes will apply to the next billing cycle. You may cancel if you do not accept the new price.</p>
            <h3>11.4 Refund Policy</h3>
            <p>Unless otherwise stated, subscription fees are nonrefundable, and no credit is given for partial usage. Upon cancellation, access will continue until the end of the current billing period. Arpha may issue credits, refunds, or discounts at its sole discretion. One-time credits do not entitle you to future credits in similar cases.</p>
            <h3>11.5 Returned Payment</h3>
            <p>If your payment fails or is disputed, Arpha may suspend or terminate your access. Arpha may charge interest at the lower of 1% per month or the maximum allowed by law on unpaid balances over 30 days. Accounts in default may be referred to a third-party collections agency.</p>

            <h2>12. Internet Service Provider and Mobile Phone Charges</h2>
            <p>The Arpha Services require broadband internet access. You are responsible for all costs related to internet service, mobile data usage, and any related overage or service fees from your provider. Arpha is not responsible for your ISP or mobile provider's network performance, speed, or availability. You are solely responsible for resolving any service-related issues with them.</p>

            <h2>13. Using the Arpha Services</h2>
            <p>You may only access the Arpha Services using compatible Arpha Systems. Unauthorized modification of your Arpha device is prohibited. The Arpha Services are intended for personal or business use only and may not be resold or sublicensed.</p>
            <p>By using the Services, you consent to receiving software updates and upgrades automatically. Some features may not work if automatic updates are disabled. Arpha may implement essential updates even if automatic updates are turned off. Use of the Services, even without a paid subscription, constitutes agreement to these Terms.</p>

            <h2>14. Termination of Service</h2>
            <p>You may cancel your account and terminate the Arpha Services at any time by request. Services will end approximately 5 business days after your cancellation is confirmed. Subscription fees are nonrefundable unless otherwise stated. Arpha may retain certain data (e.g., logs, diagnostics, legal hold content) after cancellation as required by law or policy.</p>
            <p>Arpha reserves the right to terminate your account immediately for: payment failure; breach of these Terms; unauthorized or illegal use of the Services; tampering with the Arpha System; or infringement of intellectual property rights. In such cases, Arpha may issue a pro-rated refund of unused subscription fees at its discretion. Upon termination, your account and all related data may be deleted. All sections that should reasonably survive termination will continue to apply after cancellation.</p>

            <h2>15. Title to Software and Intellectual Property</h2>
            <p>To access the full functionality of the Arpha Services, you may need to use Arpha software. This software is licensed—not sold—to you by Arpha LLC and/or its affiliates or licensors. Arpha and its licensors retain all title, ownership, and intellectual property rights in and to the software, Services, and content, including copyrights, patents, and trademarks. Any attempt to reverse engineer, decompile, disassemble, sublicense, modify, or distribute the software—except as expressly allowed by applicable law—is prohibited.</p>

            <h2>16. Procedure for Making Claims of Copyright or Intellectual Property Infringement</h2>
            <p>Arpha respects intellectual property rights and will respond to properly submitted notices of alleged infringement. To report a violation, send a written notice that includes: your signature (physical or electronic); a description of the copyrighted work; the location of the allegedly infringing material; your contact details; a statement of good faith belief that the use is unauthorized; and a statement under penalty of perjury that your notice is accurate.</p>
            <p>Please send notices to:<br />Copyright Agent – Legal Department<br />Arpha LLC<br />5770 Fleet Street<br />Carlsbad, California 92008<br /><a href="mailto:copyright@arpha.com">copyright@arpha.com</a></p>

            <h2>17. Open Source Software</h2>
            <p>Some parts of the Arpha software may include open source components governed by separate licenses, including the GNU General Public License (GPL). Open source licenses may allow you to use, copy, modify, and distribute the relevant software according to their terms. These Terms do not override any rights granted under those licenses.</p>

            <h2>18. Links</h2>
            <p>The Arpha Services may contain links to third-party sites or resources. Arpha is not responsible for the content, services, or availability of those sites. You agree that Arpha shall not be liable for any loss or damage arising from your use of such third-party content or links.</p>

            <h2>19. Special Admonitions for International Use</h2>
            <p>You agree to comply with all local rules and laws regarding online conduct and acceptable content. This includes compliance with export and re-export laws and regulations. You confirm that you are not located in a country under U.S. embargo or designated as "terrorist supporting," and that you are not listed on any U.S. government list of prohibited or restricted parties.</p>

            <h2>20. No Resale of Arpha Services</h2>
            <p>You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Arpha Services (including your Arpha ID), unless you have written authorization from Arpha LLC.</p>

            <h2>21. Indemnity</h2>
            <p>You agree to defend, indemnify, and hold harmless Arpha LLC and its affiliates from all claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) related to: your use of the Arpha Services; your breach of these Terms; any modification or misuse of the Arpha System or software; any violation of law, including privacy and intellectual property laws.</p>

            <h2>22. Warranty and Warranty Disclaimer</h2>
            <p>The Limited Hardware Warranty provided by Arpha applies only to Arpha devices and is published at www.arpha.com/warranty.</p>
            <p>All Arpha Services are otherwise provided "as is" and "as available." Arpha makes no additional warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Arpha is not an insurer. You are responsible for acquiring any insurance coverage to protect your property or person. Arpha does not guarantee the prevention or mitigation of loss, damage, injury, or any specific outcome through its Services. Some jurisdictions do not allow limitations on implied warranties, so these exclusions may not apply to you.</p>

            <h2>23. No Third-Party Beneficiaries</h2>
            <p>These Terms do not create any third-party beneficiary rights, unless explicitly stated.</p>

            <h2>24. Limitations of Liability</h2>
            <p>Arpha's liability for damages shall not exceed the amount paid by you to Arpha for the Arpha Services in the 12 months prior to the incident giving rise to the claim. Arpha is not liable for: loss of content or data; loss of use or access; indirect, incidental, or consequential damages; or harm caused by force majeure events. This limitation does not apply to personal injury, death, or damages caused by Arpha's willful misconduct, gross negligence, or fraud.</p>

            <h2>25. General Information</h2>
            <dl className="legal-dl">
              <dt>Entire Agreement</dt><dd>These Terms, along with the Privacy Notice and any applicable EULA, form the complete agreement between you and Arpha and supersede all previous agreements.</dd>
              <dt>Waiver</dt><dd>Failure to enforce any part of these Terms does not waive our right to do so later.</dd>
              <dt>Severability</dt><dd>If any provision is found unenforceable, the rest will remain valid.</dd>
              <dt>Non-Transferability</dt><dd>Your Arpha account is non-transferable and terminates upon your death.</dd>
              <dt>Force Majeure</dt><dd>Arpha's obligations may be suspended in the event of natural disasters, war, terrorism, legal restrictions, or similar force majeure events.</dd>
              <dt>Section Titles</dt><dd>Section titles in this document are for convenience only and do not affect the meaning of the terms.</dd>
            </dl>

          </div>
        </div>
      </section>
    </>
  );
}
