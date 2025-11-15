import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import PersonalStory from './components/PersonalStory';
import TechnicalPhilosophy from './components/TechnicalPhilosophy';
import CareerHighlights from './components/CareerHighlights';
import PersonalInterests from './components/PersonalInterests';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import InteractiveElements from '../hero-section/components/InteractiveElements';

const About = () => {
  useEffect(() => {
    document.title = 'About - DevPortfolio Pro';
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  const handleResumeDownload = () => {
    // Mock resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alex_Chen_Resume.pdf';
    link?.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}

      {/* Add Interactive Background Elements */}
      <InteractiveElements />

      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Icon name="User" size={16} className="mr-2" />
              About Me
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Story Behind
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                The Code
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover the journey, philosophy, and passion that drives my approach to 
              software engineering and technical leadership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleContactClick}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}
              >
                Let's Connect
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleResumeDownload}
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Personal Story Section */}
      <PersonalStory />
      {/* Technical Philosophy Section */}
      <TechnicalPhilosophy />
      {/* Career Highlights Section */}
      <CareerHighlights />
      {/* Personal Interests Section */}
      <PersonalInterests />
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, 
              or simply chat about technology and software engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleContactClick}
                iconName="Mail"
                iconPosition="left"
                iconSize={20}
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/projects'}
                iconName="FolderOpen"
                iconPosition="left"
                iconSize={20}
              >
                View My Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                <Icon name="Code2" size={16} color="white" />
              </div>
              <span className="font-semibold text-foreground">DevPortfolio Pro</span>
            </div>
            <p className="text-sm text-text-secondary">
              © {new Date()?.getFullYear()} Prabath Nugekotuwa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;