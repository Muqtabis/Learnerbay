import { Link } from "react-router-dom";
import { Github, Globe, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 mt-auto border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Learners B.A.Y</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Structured career roadmaps, vetted documentation, and personalized course paths built to help aspiring developers learn faster and smarter.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Learning Hub</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/roadmaps" className="text-slate-300 hover:text-cyan-300 transition-colors">
                  Developer Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-300 hover:text-cyan-300 transition-colors">
                  Curated Resources
                </Link>
              </li>
              <li>
                <Link to="/recommendation" className="text-slate-300 hover:text-cyan-300 transition-colors">
                  Course Path Finder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Trust &amp; Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-cyan-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-cyan-300 transition-colors">
                  Contact &amp; Feedback
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-300 hover:text-cyan-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-300 hover:text-cyan-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Project Channels</h3>
            <div className="space-y-2 text-sm text-slate-300 mb-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Send Feedback / Inquiries</span>
              </Link>
              <a
                href="https://github.com/Muqtabis/Learnerbay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <Github className="h-4 w-4 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
              <a
                href="https://muqtabis.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <Globe className="h-4 w-4 text-cyan-400" />
                <span>Maintainer Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm space-y-1">
          <p>&copy; {new Date().getFullYear()} Learners B.A.Y. All rights reserved.</p>
          <p className="text-xs text-slate-500">
            Educational guidance and third-party resource links are provided for learning reference.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
