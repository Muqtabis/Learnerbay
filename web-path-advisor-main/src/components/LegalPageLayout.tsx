import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const LegalPageLayout = ({ title, subtitle, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-edu-bg">
      <Header />
      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-edu-text">{title}</h1>
            <p className="text-sm text-slate-500">{subtitle}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-10 space-y-8 text-slate-600 leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
