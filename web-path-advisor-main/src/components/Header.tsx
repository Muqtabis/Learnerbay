
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-edu-purple">
        Learners B.A.Y
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="test/index.html" className="text-edu-text hover:text-edu-purple transition-colors">
           
          </Link>
          <Link to="/recommendation" className="text-edu-text hover:text-edu-purple transition-colors">
           
          </Link>
          <Link to="/about" className="text-edu-text hover:text-edu-purple transition-colors">
           
          </Link>
        </nav>
        
        <Button className="md:hidden" variant="ghost" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
