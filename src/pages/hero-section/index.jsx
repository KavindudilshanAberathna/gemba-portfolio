import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroContent from './components/HeroContent';
import InteractiveElements from './components/InteractiveElements';
import NavigationTeaser from './components/NavigationTeaser';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <Header />
      {/* Interactive Background Elements */}
      <InteractiveElements />
      {/* Main Hero Content */}
      <main>
        <HeroContent onNavigate={handleNavigation} />
        
        {/* Navigation Teaser Section */}
        <NavigationTeaser onNavigate={handleNavigation} />
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm opacity-80">
                © {new Date()?.getFullYear()} Prabath Nugekotuwa. Crafted with passion and precision.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;