import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-12 mt-auto border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Learners B.A.Y</h3>
            <p className="text-slate-300 leading-relaxed">
              Our mission is to deliver the best roadmaps without compromise, helping developers learn faster and smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recommendation" className="text-slate-300 hover:text-blue-500 transition-colors">
                  Get Recommendations
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Connect With Us</h3>
            <div className="flex items-center gap-2 text-slate-300 mb-4">
              <i className="ri-mail-line text-xl"></i>
              <span>support@learnersbay.com</span>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <i className="ri-github-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <i className="ri-twitter-x-line text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Learners B.A.Y. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;