import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NavigationTeaser = ({ onNavigate }) => {
  const navigationPreviews = [
    {
      route: '/about',
      title: 'My Story',
      description: 'Journey from curious developer to technical leader',
      icon: 'User',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      preview: 'Learn about my passion for solving complex problems...'
    },
    {
      route: '/skills',
      title: 'Tech Arsenal',
      description: '15+ technologies mastered across full-stack development',
      icon: 'Code',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      preview: 'React • Node.js • AWS • Docker • MongoDB...'
    },
    {
      route: '/projects',
      title: 'Featured Work',
      description: '50+ projects delivered with measurable business impact',
      icon: 'FolderOpen',
      color: 'text-brand-purple',
      bgColor: 'bg-brand-purple/10',
      preview: 'E-commerce platforms, SaaS applications, mobile apps...'
    },
    {
      route: '/experience',
      title: 'Career Path',
      description: '8+ years building scalable solutions at top companies',
      icon: 'Briefcase',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      preview: 'Senior Engineer → Tech Lead → Solution Architect...'
    }
  ];

  return (
    <div className="bg-surface/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Explore My Professional Journey
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Dive deeper into my experience, skills, and the projects that define my career as a software engineer
          </p>
        </div>

        {/* Navigation Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {navigationPreviews?.map((item, index) => (
            <div
              key={item?.route}
              className="group cursor-pointer"
              onClick={() => onNavigate(item?.route)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 hover:shadow-lg transition-all duration-250 group-hover:-translate-y-1">
                {/* Icon */}
                <div className={`w-12 h-12 ${item?.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-250`}>
                  <Icon 
                    name={item?.icon} 
                    size={24} 
                    className={item?.color}
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-250">
                    {item?.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item?.description}
                  </p>
                  
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs text-text-secondary font-mono opacity-70 group-hover:opacity-100 transition-opacity duration-250">
                      {item?.preview}
                    </p>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="flex items-center justify-between mt-4 pt-4">
                  <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    Explore
                  </span>
                  <Icon 
                    name="ArrowRight" 
                    size={16} 
                    className="text-primary transform translate-x-0 group-hover:translate-x-1 transition-transform duration-250 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={() => window.open('/resume.pdf', '_blank')}
            iconName="Download"
            iconPosition="left"
            iconSize={20}
          >
            Download Resume
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate('/contact')}
            iconName="Calendar"
            iconPosition="left"
            iconSize={20}
          >
            Schedule a Call
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mt-8 pt-8 border-t border-border">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-250 group"
          >
            <Icon name="Github" size={20} className="group-hover:scale-110 transition-transform duration-250" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-250 group"
          >
            <Icon name="Linkedin" size={20} className="group-hover:scale-110 transition-transform duration-250" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          
          <a
            href="mailto:example.com"
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-250 group"
          >
            <Icon name="Mail" size={20} className="group-hover:scale-110 transition-transform duration-250" />
            <span className="text-sm font-medium">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationTeaser;