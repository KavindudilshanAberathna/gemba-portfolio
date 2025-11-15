import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import InteractiveElements from '../hero-section/components/InteractiveElements';

const Contact = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Contact - DevPortfolio Pro';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}

      {/* Add Interactive Background Elements */}
      <InteractiveElements />

      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-primary/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Let's Connect
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Amazing Together?
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello,
              I'd love to hear from you. Let's turn your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleScrollToForm}
                iconName="Send"
                iconPosition="right"
              >
                Send Message
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://calendly.com/prabathdeveloper/30min', '_blank')}
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Call
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt; 24h</div>
                <div className="text-sm text-text-secondary">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm text-text-secondary">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">98%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns on large screens */}
            <div className="lg:col-span-2" id="contact-form">
              <ContactForm />
            </div>
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      {/* Location & Map Section */}
      <section className="py-16 bg-muted/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Location &amp; Availability
                </h2>
                <p className="text-lg text-text-secondary">
                  Based in San Francisco but working globally. I'm available for both remote 
                  collaboration and in-person meetings in the Bay Area.
                </p>
              </div>
              
              {/* Availability Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Mon-Fri: 9 AM - 6 PM PST
                    <br />
                    Weekends: Available for urgent matters
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Globe" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Global Reach</h3>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">
                    Remote collaboration worldwide
                    <br />
                    Flexible timezone accommodation
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <LocationMap />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Rocket" size={32} className="text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-lg text-text-secondary mb-8">
              Let's discuss how we can bring your vision to life. I'm excited to learn about 
              your project and explore how we can work together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                onClick={handleScrollToForm}
                iconName="MessageCircle"
                iconPosition="left"
              >
                Start Conversation
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/assets/resume/prabath_Developer_Resume.pdf';
                  link.download = 'prabath_Developer_Resume.pdf';
                  link?.click();
                }}
                iconName="Download"
                iconPosition="left"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">DevPortfolio Pro</h3>
                  <p className="text-sm text-text-secondary">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4">
                Crafting digital solutions that matter. Specializing in React, Node.js, 
                and cloud architecture for modern web applications.
              </p>
              <div className="flex space-x-4">
                {['Github', 'Linkedin', 'Twitter', 'Mail']?.map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-all duration-250"
                  >
                    <Icon name={social} size={18} />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { name: 'About', href: '/about' },
                  { name: 'Skills', href: '/skills' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Experience', href: '/experience' }
                ]?.map((link) => (
                  <button
                    key={link?.name}
                    onClick={() => window.location.href = link?.href}
                    className="block text-text-secondary hover:text-primary transition-colors duration-250"
                  >
                    {link?.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-text-secondary">
                <p>Prabath.developer@email.com</p>
                <p>+94 (76) 123-4567</p>
                <p>Sri lanka</p>
                <button
                  onClick={handleScrollToTop}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-250 mt-2"
                >
                  <Icon name="ArrowUp" size={16} className="mr-1" />
                  Back to Top
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-text-secondary">
            <p>&copy; {new Date()?.getFullYear()} DevPortfolio Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Floating Action Button */}
      <button
        onClick={handleScrollToForm}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-250 flex items-center justify-center z-40 animate-pulse-glow relative z-10"
        title="Send Message"
      >
        <Icon name="MessageCircle" size={24} />
      </button>
    </div>
  );
};

export default Contact;