import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      id: 1,
      icon: 'Mail',
      label: 'Email',
      value: 'prabath.developer@email.com',
      description: 'Best for detailed inquiries',
      action: () => window.open('mailto:prabath.developer@email.com', '_blank'),
      primary: true
    },
    {
      id: 2,
      icon: 'Phone',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Available Mon-Fri, 9 AM - 6 PM EST',
      action: () => window.open('tel:+15551234567', '_blank'),
      primary: false
    },
    {
      id: 3,
      icon: 'Linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/prabathdeveloper',
      description: 'Professional networking',
      action: () => window.open('https://linkedin.com/in/prabathdeveloper', '_blank'),
      primary: false
    },
    {
      id: 4,
      icon: 'Github',
      label: 'GitHub',
      value: 'github.com/prabathdeveloper',
      description: 'View my code and projects',
      action: () => window.open('https://github.com/prabathdeveloper', '_blank'),
      primary: false
    }
  ];

  const quickActions = [
    {
      id: 1,
      icon: 'Download',
      label: 'Download Resume',
      description: 'Get my latest CV (PDF)',
      variant: 'default',
      action: () => {
        // Create a mock download
        const link = document.createElement('a');
        link.href = '/assets/resume/prabath_Developer_Resume.pdf';
        link.download = 'prabath_Developer_Resume.pdf';
        link?.click();
      }
    },
    {
      id: 2,
      icon: 'Calendar',
      label: 'Schedule Meeting',
      description: 'Book a 30-minute call',
      variant: 'outline',
      action: () => window.open('https://calendly.com/prabathdeveloper/30min', '_blank')
    },
    {
      id: 3,
      icon: 'MessageCircle',
      label: 'WhatsApp',
      description: 'Quick chat on WhatsApp',
      variant: 'outline',
      action: () => window.open('https://wa.me/15551234567', '_blank')
    }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: 'Twitter',
      label: 'Twitter',
      url: 'https://twitter.com/prabathdeveloper',
      color: '#1DA1F2'
    },
    {
      id: 2,
      icon: 'Instagram',
      label: 'Instagram',
      url: 'https://instagram.com/prabathdeveloper',
      color: '#E4405F'
    },
    {
      id: 3,
      icon: 'Youtube',
      label: 'YouTube',
      url: 'https://youtube.com/@prabathdeveloper',
      color: '#FF0000'
    },
    {
      id: 4,
      icon: 'Globe',
      label: 'Portfolio',
      url: 'https://prabathdeveloper.dev',
      color: '#6366F1'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h3>
          <p className="text-text-secondary">
            Choose your preferred way to connect. I'm always excited to discuss new opportunities.
          </p>
        </div>

        <div className="space-y-4">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              onClick={method?.action}
              className={`p-4 rounded-xl border transition-all duration-250 cursor-pointer group hover:shadow-md ${
                method?.primary 
                  ? 'border-primary bg-primary/5 hover:bg-primary/10' :'border-border bg-background hover:bg-muted'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    method?.primary 
                      ? 'bg-primary text-white' :'bg-muted text-text-secondary group-hover:text-primary'
                  }`}>
                    <Icon name={method?.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{method?.label}</h4>
                    <p className="text-sm text-primary font-medium">{method?.value}</p>
                    <p className="text-xs text-text-secondary mt-1">{method?.description}</p>
                  </div>
                </div>
                <Icon 
                  name="ExternalLink" 
                  size={16} 
                  className="text-text-secondary group-hover:text-primary transition-colors" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Quick Actions</h3>
          <p className="text-text-secondary">
            Fast-track your inquiry with these direct actions.
          </p>
        </div>

        <div className="space-y-3">
          {quickActions?.map((action) => (
            <Button
              key={action?.id}
              variant={action?.variant}
              fullWidth
              onClick={action?.action}
              iconName={action?.icon}
              iconPosition="left"
              className="justify-start h-auto py-4"
            >
              <div className="text-left">
                <div className="font-semibold">{action?.label}</div>
                <div className="text-xs opacity-80">{action?.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </div>
      {/* Social Links */}
      <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-foreground mb-2">Follow Me</h3>
          <p className="text-text-secondary">
            Stay updated with my latest projects and insights.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {socialLinks?.map((social) => (
            <button
              key={social?.id}
              onClick={() => window.open(social?.url, '_blank')}
              className="p-4 rounded-xl border border-border bg-background hover:bg-muted transition-all duration-250 group"
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: social?.color }}
                >
                  <Icon name={social?.icon} size={18} />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {social?.label}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Availability Status */}
      <div className="bg-gradient-to-r from-success/10 to-accent/10 rounded-2xl p-6 border border-success/20">
        <div className="flex items-center space-x-4">
          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <div>
            <h4 className="font-semibold text-foreground">Currently Available</h4>
            <p className="text-sm text-text-secondary">
              Open to new opportunities and collaborations. Response time: &lt; 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;