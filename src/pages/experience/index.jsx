import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ExperienceTimeline from './components/ExperienceTimeline';
import CredentialGallery from './components/CredentialGallery';
import SpeakingEngagements from './components/SpeakingEngagements';
import MediaMentions from './components/MediaMentions';
import InteractiveElements from '../hero-section/components/InteractiveElements';

const Experience = () => {
  const [activeSection, setActiveSection] = useState('timeline');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      id: 'timeline',
      label: 'Experience Timeline',
      icon: 'Briefcase',
      description: 'Professional journey and career milestones'
    },
    {
      id: 'credentials',
      label: 'Credentials',
      icon: 'Award',
      description: 'Certifications and educational achievements'
    },
    {
      id: 'speaking',
      label: 'Speaking',
      icon: 'Mic',
      description: 'Conference talks and community engagement'
    },
    {
      id: 'media',
      label: 'Media',
      icon: 'Newspaper',
      description: 'Publications and media coverage'
    }
  ];

  const experienceStats = [
    {
      icon: 'Calendar',
      value: '5+',
      label: 'Years Experience',
      color: 'text-primary'
    },
    {
      icon: 'Building',
      value: '3',
      label: 'Companies',
      color: 'text-accent'
    },
    {
      icon: 'Users',
      value: '15+',
      label: 'Team Members Led',
      color: 'text-brand-purple'
    },
    {
      icon: 'Rocket',
      value: '50+',
      label: 'Projects Delivered',
      color: 'text-warning'
    }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'timeline':
        return <ExperienceTimeline />;
      case 'credentials':
        return <CredentialGallery />;
      case 'speaking':
        return <SpeakingEngagements />;
      case 'media':
        return <MediaMentions />;
      default:
        return <ExperienceTimeline />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Experience - DevPortfolio Pro</title>
        <meta name="description" content="Professional experience, career journey, certifications, and industry recognition. Explore my growth from junior developer to senior full-stack engineer." />
        <meta name="keywords" content="software engineer experience, career timeline, certifications, speaking engagements, media mentions" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
      {/* Add Interactive Background Elements */}
      <InteractiveElements />
      
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-brand-purple rounded-2xl mb-6 shadow-lg">
                <Icon name="TrendingUp" size={32} color="white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Professional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-brand-purple">
                  Experience
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
                A comprehensive journey through my professional growth, achievements, and contributions to the tech industry. 
                From junior developer to technical leader, explore the milestones that define my career.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {experienceStats?.map((stat, index) => (
                  <div 
                    key={index}
                    className={`bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-3 ${stat?.color}`}>
                      <Icon name={stat?.icon} size={24} />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
                    <div className="text-sm text-text-secondary">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-2 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {sections?.map((section) => (
                  <button
                    key={section?.id}
                    onClick={() => setActiveSection(section?.id)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 ${
                      activeSection === section?.id
                        ? 'bg-primary text-white shadow-md'
                        : 'text-text-secondary hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-center mb-2">
                      <Icon 
                        name={section?.icon} 
                        size={20} 
                        className={`mr-2 ${activeSection === section?.id ? 'text-white' : 'text-primary'}`} 
                      />
                      <span className="font-medium">{section?.label}</span>
                    </div>
                    <p className={`text-sm ${
                      activeSection === section?.id ? 'text-white/80' : 'text-text-secondary'
                    }`}>
                      {section?.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {renderActiveSection()}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-brand-purple/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Handshake" size={32} color="white" />
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Let's Build Something Amazing Together
              </h2>
              
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Ready to bring your next project to life? With my experience and passion for innovation, 
                I'm excited to help you achieve your technical goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Start a Conversation
                </a>
                
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon name="FolderOpen" size={20} className="mr-2" />
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-purple rounded-lg flex items-center justify-center mr-3">
                  <Icon name="Code2" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">DevPortfolio Pro</h3>
                  <p className="text-sm text-text-secondary">Professional Experience</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="/hero-section" className="text-text-secondary hover:text-primary transition-colors duration-200">
                  Home
                </a>
                <a href="/about" className="text-text-secondary hover:text-primary transition-colors duration-200">
                  About
                </a>
                <a href="/skills" className="text-text-secondary hover:text-primary transition-colors duration-200">
                  Skills
                </a>
                <a href="/projects" className="text-text-secondary hover:text-primary transition-colors duration-200">
                  Projects
                </a>
                <a href="/contact" className="text-text-secondary hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </div>
            </div>
            
            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-text-secondary">
                © {new Date()?.getFullYear()} DevPortfolio Pro. Crafted with passion for excellence.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Experience;