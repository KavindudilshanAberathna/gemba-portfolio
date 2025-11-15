import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'About', href: '/about', icon: 'User' },
    { name: 'Skills', href: '/skills', icon: 'Code' },
    { name: 'Projects', href: '/projects', icon: 'FolderOpen' },
    { name: 'Experience', href: '/experience', icon: 'Briefcase' },
    { name: 'Contact', href: '/contact', icon: 'Mail' }
  ];

  const handleNavClick = (href) => {
    window.location.href = href;
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.location.href = '/hero-section';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ease-out-custom ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={handleLogoClick}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-purple rounded-lg flex items-center justify-center shadow-md group-hover:shadow-glow transition-all duration-250">
                <Icon 
                  name="Code2" 
                  size={20} 
                  color="white" 
                  strokeWidth={2.5}
                />
              </div>
            </div>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-250">
                DevPortfolio
              </h1>
              <p className="text-xs text-text-secondary font-mono">
                Pro
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <button
                key={item?.name}
                onClick={() => handleNavClick(item?.href)}
                className="flex items-center px-4 py-2 text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted rounded-lg transition-all duration-250 group"
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className="mr-2 group-hover:scale-110 transition-transform duration-250" 
                />
                {item?.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Resume
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => handleNavClick('/contact')}
              iconName="MessageCircle"
              iconPosition="left"
              iconSize={16}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-primary hover:bg-muted rounded-lg transition-all duration-250"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-slide-down">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.name}
                  onClick={() => handleNavClick(item?.href)}
                  className="flex items-center w-full px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-muted rounded-lg transition-all duration-250 group"
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    className="mr-3 group-hover:scale-110 transition-transform duration-250" 
                  />
                  {item?.name}
                </button>
              ))}
              
              {/* Mobile CTAs */}
              <div className="pt-4 border-t border-border space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                >
                  Download Resume
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  onClick={() => handleNavClick('/contact')}
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={16}
                >
                  Let's Talk
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;