import { Link } from "react-router-dom";
import LegalPageLayout from "@/components/LegalPageLayout";

const TermsPage = () => {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="Last updated: November 11, 2026"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Learners B.A.Y, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue using the site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">2. Educational Purpose</h2>
        <p>
          All career roadmaps, course summaries, match scores, and study recommendations on Learners B.A.Y are provided solely for informational and educational planning purposes. We do not guarantee specific employment, certification, or academic outcomes.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">3. Third-Party Courses &amp; Links</h2>
        <p>
          Learners B.A.Y links to external tutorials, official documentation, and course providers. We do not own or control third-party platforms and are not responsible for changes in their course pricing, availability, curriculum content, or privacy practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">4. Acceptable Use</h2>
        <p>
          You agree to use this website lawfully and not attempt to disrupt hosting infrastructure, scrape aggressively, or misuse interactive forms and external links.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">5. Intellectual Property</h2>
        <p>
          The Learners B.A.Y interface, roadmap organization, and original editorial content are maintained by the project authors. Third-party trademarks, platform names, and official documentation remain the property of their respective owners.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-edu-text">6. Limitation of Liability &amp; Contact</h2>
        <p>
          Learners B.A.Y is provided on an &ldquo;as is&rdquo; basis without warranties of any kind. Questions or correction requests can be submitted on our{" "}
          <Link to="/contact" className="text-edu-purple underline hover:text-edu-darkblue">
            Contact &amp; Feedback page
          </Link>
          .
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default TermsPage;
