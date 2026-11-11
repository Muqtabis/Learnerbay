import { Link } from "react-router-dom";
import LegalPageLayout from "@/components/LegalPageLayout";

const PrivacyPage = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Last updated: November 11, 2026"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">1. Overview</h2>
        <p>
          Learners B.A.Y (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides developer career roadmaps, curated learning resources, and browser-based course recommendations. We respect your privacy and collect as little personal data as possible.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">2. Information Stored in Your Browser</h2>
        <p>
          When you use the Course Finder questionnaire, your selected track, experience level, weekly study hours, and learning goals are saved locally in your browser via <code>localStorage</code> so the Results page can rank courses for you. This preference data stays on your device and is not sold or transmitted to private user databases.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">3. Cookies &amp; Google AdSense</h2>
        <p>
          This site may display advertisements served by Google AdSense and its third-party advertising partners. Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites on the Internet.
        </p>
        <p>
          Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites across the web. You may opt out of personalized advertising by visiting{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-edu-purple underline hover:text-edu-darkblue"
          >
            Google Ads Settings
          </a>{" "}
          or review how Google uses information from sites that use its services at{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-edu-purple underline hover:text-edu-darkblue"
          >
            Google Privacy &amp; Terms
          </a>
          . You can also manage or disable cookies through your browser settings.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">4. Server Logs &amp; External Links</h2>
        <p>
          Our static hosting infrastructure may automatically record standard technical request logs (such as IP address, browser user agent, and request timestamps) to maintain security and uptime.
        </p>
        <p>
          Learners B.A.Y links to external educational platforms (such as MDN, freeCodeCamp, Coursera, Kotlin, and official documentation). Those third-party websites operate under their own privacy policies and terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">5. Children&apos;s Privacy</h2>
        <p>
          This educational resource is not directed to children under 13, and we do not knowingly collect personally identifiable information from children.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">6. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or data practices, please reach out via our{" "}
          <Link to="/contact" className="text-edu-purple underline hover:text-edu-darkblue">
            Contact &amp; Feedback page
          </Link>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default PrivacyPage;
