import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

import { useState, useEffect } from 'react';

const TypingText = ({ texts, typingSpeed = 120, pause = 1500 }) => {
  const [index, setIndex] = useState(0);       // Current text index
  const [subIndex, setSubIndex] = useState(0); // Current character index
  const [reverse, setReverse] = useState(false); // Deleting state
  const [blink, setBlink] = useState(true);     // Cursor blink

  // Typing / deleting effect
  useEffect(() => {
    if (reverse) return;

    if (subIndex === texts[index].length + 1) {
      const timeout = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => setSubIndex((prev) => prev + 1), typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, typingSpeed, pause]);

  useEffect(() => {
    if (!reverse) return;

    if (subIndex === 0) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => setSubIndex((prev) => prev - 1), typingSpeed / 2);
    return () => clearTimeout(timeout);
  }, [subIndex, reverse, texts.length, typingSpeed]);

  // Cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="font-mono border-r-2 border-primary pr-1">
      {texts[index].substring(0, subIndex)}
    </span>
  );
};

export { TypingText };

const HeroContent = ({ onNavigate }) => {
  const specializations = [
  { name: "Full-Stack Development", icon: "Code2" },
  { name: "Cloud Architecture", icon: "Cloud" },
  { name: "DevOps & CI/CD", icon: "GitBranch" },
  { name: "System Design", icon: "Network" }];


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-muted to-surface flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent rounded-lg rotate-45 animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-brand-purple rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-secondary rounded-lg rotate-12 animate-float"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              Available for new opportunities
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Crafting Digital
                <span className="block text-transparent bg-gradient-to-r from-primary to-brand-purple bg-clip-text">
                  Solutions That Matter
                </span>
              </h1>
              
              {/* Typing Animation Effect */}
              <div className="h-8 flex items-center">
  <TypingText 
    texts={[
      "Senior Full-Stack Engineer",
      "Technical Architect",
      "Cloud & DevOps Specialist",
      "Enterprise Software Expert"
    ]}
  />
</div>

            </div>

            {/* Description */}
            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
              Transforming complex business challenges into elegant, scalable software solutions. 
              With 8+ years of experience building enterprise applications that serve millions of users, 
              I bridge the gap between innovative technology and real-world impact.
            </p>

            {/* Specializations */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                Core Specializations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {specializations?.map((spec, index) =>
                <div
                  key={spec?.name}
                  className="flex items-center p-3 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-250 group"
                  style={{ animationDelay: `${index * 100}ms` }}>

                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors duration-250">
                      <Icon
                      name={spec?.icon}
                      size={16}
                      className="text-primary group-hover:scale-110 transition-transform duration-250" />

                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-250">
                      {spec?.name}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => onNavigate('/projects')}
                iconName="FolderOpen"
                iconPosition="left"
                iconSize={20}
                className="group">

                View My Work
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('/contact')}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}>

                Let's Connect
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">8+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-purple">15+</div>
                <div className="text-sm text-text-secondary">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl rotate-12 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-purple/20 to-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Main Image Container */}
              <div className="relative w-96 h-96 lg:w-[300px] lg:h-[300px] xl:w-[500px] xl:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-brand-purple rounded-3xl rotate-3 animate-pulse-glow"></div>
                <div className="relative w-full h-full bg-card rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
                  <Image
                    src="src\assets\img\herosection.png"
                    alt="Professional headshot of confident software engineer in navy blazer with warm smile in modern office setting"
                    className="w-full h-full object-cover" />

                  
                  {/* Overlay with Tech Icons */}
                </div>
              </div>

              

              {/* Floating Tech Badges */}
              <div className="absolute top-8 -right-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg animate-float">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} className="text-warning" />
                  <span className="text-sm font-medium text-foreground">React Expert</span>
                </div>
              </div>
              
              <div className="absolute bottom-16 -left-8 bg-card border border-border rounded-lg px-3 py-2 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">AWS Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-text-secondary">
          <span className="text-sm font-medium">Explore More</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </div>);

};

export default HeroContent;