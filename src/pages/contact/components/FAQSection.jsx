import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What\'s your typical response time?",
      answer: `I aim to respond to all inquiries within 24 hours during business days. For urgent matters, you can reach me via phone or WhatsApp for faster response. I'm based in PST timezone and typically available 9 AM - 6 PM on weekdays.`
    },
    {
      id: 2,
      question: "What types of projects do you work on?",
      answer: `I specialize in full-stack web development, React applications, Node.js backends, and cloud architecture. I work on everything from startup MVPs to enterprise applications, e-commerce platforms, and SaaS products. I'm also available for consulting, code reviews, and technical mentorship.`
    },
    {
      id: 3,
      question: "Do you work with international clients?",
      answer: `Absolutely! I have experience working with clients across different time zones including Europe, Asia, and Australia. I'm flexible with meeting times and use collaborative tools like Slack, Zoom, and project management platforms to ensure smooth communication.`
    },
    {
      id: 4,
      question: "What\'s your availability for new projects?",
      answer: `I'm currently accepting new projects with start dates in Q1 2025. For smaller projects or consulting work, I can usually begin within 1-2 weeks. Larger projects may require 2-4 weeks lead time depending on scope and current commitments.`
    },
    {
      id: 5,
      question: "Do you provide ongoing support and maintenance?",
      answer: `Yes, I offer various support packages including bug fixes, feature updates, performance optimization, and security updates. I believe in long-term partnerships and provide flexible maintenance agreements tailored to your needs.`
    },
    {
      id: 6,
      question: "Can you help with existing codebases?",
      answer: `Definitely! I regularly work on existing projects including code refactoring, performance optimization, adding new features, migrating to newer technologies, and fixing technical debt. I can quickly assess and understand existing architectures.`
    },
    {
      id: 7,
      question: "What\'s your preferred project communication style?",
      answer: `I believe in transparent, regular communication. I typically provide daily or weekly updates depending on project scope, use project management tools for tracking progress, and schedule regular check-ins via video calls. I'm also available for quick questions via Slack or email.`
    },
    {
      id: 8,
      question: "Do you work on equity-based or revenue-sharing projects?",
      answer: `I'm open to discussing equity arrangements for the right opportunities, particularly with early-stage startups that have strong potential. I evaluate these on a case-by-case basis considering the team, market opportunity, and my level of involvement in the project.`
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h3>
        <p className="text-text-secondary">
          Quick answers to common questions. Don't see what you're looking for? Feel free to ask!
        </p>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq) => (
          <div
            key={faq?.id}
            className="border border-border rounded-xl overflow-hidden transition-all duration-250 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(faq?.id)}
              className="w-full px-6 py-4 text-left bg-background hover:bg-muted transition-colors duration-250 flex items-center justify-between"
            >
              <h4 className="font-semibold text-foreground pr-4">{faq?.question}</h4>
              <Icon
                name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                size={20}
                className={`text-text-secondary transition-transform duration-250 flex-shrink-0 ${
                  openFAQ === faq?.id ? 'text-primary' : ''
                }`}
              />
            </button>
            
            {openFAQ === faq?.id && (
              <div className="px-6 py-4 bg-muted/50 border-t border-border animate-slide-down">
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {faq?.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Still have questions CTA */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/20">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name="HelpCircle" size={24} className="text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">Still have questions?</h4>
            <p className="text-sm text-text-secondary">
              Don't hesitate to reach out. I'm here to help clarify anything about working together.
            </p>
          </div>
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-250 flex items-center space-x-2"
          >
            <Icon name="MessageCircle" size={16} />
            <span className="hidden sm:inline">Ask Question</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;