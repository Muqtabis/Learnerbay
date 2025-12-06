
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-edu-bg">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4 text-edu-purple">404</h1>
        <p className="text-2xl text-edu-text mb-8">Oops! Page not found</p>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. Let's get you back to our course recommendations.
        </p>
        <Button asChild className="bg-edu-purple hover:bg-edu-darkblue">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
