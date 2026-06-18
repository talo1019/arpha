import LocaleLink from "@/components/LocaleLink";
import { getDictionary } from "@/lib/i18n";

export function generateMetadata() {
  return { title: "Limited Hardware Warranty – Arpha", description: "Arpha Limited Hardware Warranty covering defects in material and workmanship for Arpha products." };
}

export default function WarrantyPage({ params }) {
  const t = getDictionary(params.lang);
  return (
    <>
      <section className="pagehead">
        <div className="wrap">
          <div className="breadcrumb">
            <LocaleLink href="/">{t.nav.home}</LocaleLink><span className="sep">/</span><span>Limited Hardware Warranty</span>
          </div>
          <span className="eyebrow" style={{ marginTop: "18px" }}>Legal</span>
          <h1>Limited Hardware Warranty</h1>
          <p style={{ color: "var(--muted)", fontSize: ".9rem", marginTop: "8px" }}>Please retain your receipt as proof of purchase.</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="legal-body">

            <p>Thank you for selecting Arpha products. To view general product information and documentation, please visit <a href="https://www.arpha.com/" target="_blank" rel="noopener noreferrer">www.arpha.com</a>.</p>

            <h2>How Consumer Law Relates to This Warranty</h2>
            <div className="legal-notice">
              <p>THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS, AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM STATE TO STATE, PROVINCE, OR COUNTRY.</p>
              <p>OTHER THAN AS PERMITTED BY LAW, ARPHA DOES NOT EXCLUDE, LIMIT OR SUSPEND OTHER RIGHTS YOU HAVE, INCLUDING THOSE THAT MAY ARISE FROM THE NONCONFORMITY OF A SALES CONTRACT. FOR A FULL UNDERSTANDING OF YOUR RIGHTS YOU SHOULD CONSULT THE LAWS OF YOUR STATE, PROVINCE, OR COUNTRY.</p>
            </div>
            <p>For warranty inquiries related to Arpha Products, contact us at <a href="https://www.arpha.com/support/" target="_blank" rel="noopener noreferrer">www.arpha.com/support</a>.</p>

            <h2>Products Covered by This Warranty</h2>
            <p>This warranty applies to any Arpha products you have purchased from an authorized Arpha reseller or directly through <a href="https://www.arpha.com/" target="_blank" rel="noopener noreferrer">www.arpha.com</a>. Our policy is to offer product warranties and perform services only on products purchased from Arpha or an authorized reseller, accompanied by a receipt or proof of purchase.</p>
            <p>If you purchase an Arpha product from an unauthorized reseller, or if the original factory serial number has been removed, defaced or altered, this warranty will not be valid. Products sold by unauthorized dealers may be counterfeit, used, defective, or not designed for your country. Please purchase only from authorized resellers.</p>

            <h2>What This Warranty Covers</h2>
            <p>Arpha warrants its products in their original packaging against defects in material and workmanship when used normally for their intended purpose.</p>
            <p>All Arpha limited warranties begin on the date of purchase. <strong>Please retain a copy of your receipt as proof of purchase.</strong> The standard warranty length is <strong>one (1) year</strong> but may vary depending on the product. Some components such as batteries, power supplies, or mounts may have different warranty periods. See specific product pages at <a href="https://www.arpha.com/" target="_blank" rel="noopener noreferrer">www.arpha.com</a> for details.</p>
            <p>Warranties apply only to the original purchaser (defined as the first buyer from Arpha or an authorized reseller). Arpha warranties are not transferable.</p>
            <div className="legal-notice">
              <p>TO THE EXTENT PERMISSIBLE BY LAW, THIS WARRANTY AND ANY IMPLIED WARRANTIES ARE YOUR EXCLUSIVE WARRANTIES AND REPLACE ALL OTHER WARRANTIES OR CONDITIONS, EXPRESS OR IMPLIED.</p>
            </div>

            <h2>What Is Not Covered</h2>
            <p>This warranty does not apply to damage from:</p>
            <ul>
              <li>Shipping, handling, misuse, accident, or improper maintenance</li>
              <li>Unauthorized modifications or use not in accordance with instructions</li>
              <li>Removal or alteration of the product serial number</li>
              <li>Use of rechargeable or substandard/counterfeit batteries (for battery-powered products)</li>
              <li>Repair or modification by anyone other than Arpha or its authorized agents</li>
            </ul>

            <h2>Your Responsibilities</h2>
            <p>To obtain warranty service during the warranty period:</p>
            <ol>
              <li>Contact Arpha support to obtain an RMA (Return Merchandise Authorization) number.</li>
              <li>Ship the defective product (at your cost) to the address provided.</li>
              <li>Include proof of purchase.</li>
            </ol>
            <p>Arpha will not accept collect shipments. Replacement products will be returned to you at Arpha's cost. Goods may be replaced with refurbished items. If replacement is not possible, Arpha may issue a refund of the depreciated value of the product.</p>
            <p>If your Arpha product stores data or software, you should make backups prior to service. During service, data may be lost, deleted, or reformatted. Arpha is not responsible for the loss of any programs, data, or other content stored on the product.</p>

            <h2>Arpha's Responsibilities</h2>
            <p>If you meet the conditions above, Arpha will replace your product with a functionally equivalent product at no charge (except for return shipping costs).</p>

            <h2>Limitation of Liability</h2>
            <div className="legal-notice">
              <p>EXCEPT AS PROVIDED IN THIS WARRANTY AND TO THE MAXIMUM EXTENT PERMITTED BY LAW, ARPHA IS NOT LIABLE FOR:</p>
              <ul style={{ marginTop: "8px" }}>
                <li>Special, incidental, indirect or consequential damages</li>
                <li>Data loss or corruption</li>
                <li>Lost profits or revenue</li>
                <li>Cost of replacement goods or program recovery</li>
                <li>Damage from product malfunction</li>
              </ul>
            </div>
            <p>Some jurisdictions do not allow limitation of incidental or consequential damages, so this exclusion may not apply to you.</p>
            <p>This document does not affect your statutory rights under applicable U.S. or Australian consumer law. Subject to those rights, this warranty is exclusive and replaces all others, express or implied. This warranty is governed by the laws of the country where the Arpha product was purchased.</p>

          </div>
        </div>
      </section>
    </>
  );
}
