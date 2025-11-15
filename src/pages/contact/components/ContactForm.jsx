import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const inquiryTypes = [
    { value: 'job-opportunity', label: 'Job Opportunity' },
    { value: 'freelance-project', label: 'Freelance Project' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'speaking-engagement', label: 'Speaking Engagement' },
    { value: 'mentorship', label: 'Mentorship' },
    { value: 'general-inquiry', label: 'General Inquiry' }
  ];

  const timeZones = [
    { value: 'EST', label: 'Eastern Time (EST)' },
    { value: 'CST', label: 'Central Time (CST)' },
    { value: 'MST', label: 'Mountain Time (MST)' },
    { value: 'PST', label: 'Pacific Time (PST)' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
    { value: 'CET', label: 'Central European Time (CET)' },
    { value: 'JST', label: 'Japan Standard Time (JST)' },
    { value: 'AEST', label: 'Australian Eastern Time (AEST)' }
  ];

  const [selectedInquiryType, setSelectedInquiryType] = useState('');
  const [selectedTimeZone, setSelectedTimeZone] = useState('EST');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', {
      ...data,
      inquiryType: selectedInquiryType,
      timeZone: selectedTimeZone,
      agreeToTerms,
      subscribeNewsletter
    });
    
    setSubmitSuccess(true);
    setIsSubmitting(false);
    reset();
    setSelectedInquiryType('');
    setSelectedTimeZone('EST');
    setAgreeToTerms(false);
    setSubscribeNewsletter(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  if (submitSuccess) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} color="var(--color-success)" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
          <p className="text-text-secondary mb-6">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
          <Button
            variant="outline"
            onClick={() => setSubmitSuccess(false)}
            iconName="ArrowLeft"
            iconPosition="left"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Send Me a Message</h3>
        <p className="text-text-secondary">
          Let's discuss your project, opportunity, or collaboration. I'll respond within 24 hours.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            required
            error={errors?.fullName?.message}
            {...register('fullName', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
          />
          
          <Input
            label="Email Address"
            type="email"
            placeholder="john@company.com"
            required
            error={errors?.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company/Organization"
            type="text"
            placeholder="Tech Corp Inc."
            error={errors?.company?.message}
            {...register('company')}
          />
          
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            error={errors?.phone?.message}
            {...register('phone', {
              pattern: {
                value: /^[\+]?[1-9][\d]{0,15}$/,
                message: 'Invalid phone number'
              }
            })}
          />
        </div>

        {/* Inquiry Details */}
        <Select
          label="Type of Inquiry"
          placeholder="Select inquiry type"
          options={inquiryTypes}
          value={selectedInquiryType}
          onChange={setSelectedInquiryType}
          required
          error={!selectedInquiryType && errors?.inquiryType ? 'Please select an inquiry type' : ''}
        />

        <Input
          label="Subject"
          type="text"
          placeholder="Brief description of your inquiry"
          required
          error={errors?.subject?.message}
          {...register('subject', {
            required: 'Subject is required',
            minLength: { value: 5, message: 'Subject must be at least 5 characters' }
          })}
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-input text-foreground placeholder-text-secondary"
            rows={6}
            placeholder="Tell me more about your project, opportunity, or how I can help..."
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 20, message: 'Message must be at least 20 characters' }
            })}
          />
          {errors?.message && (
            <p className="mt-1 text-sm text-error">{errors?.message?.message}</p>
          )}
        </div>

        {/* Meeting Preferences */}
        <div className="bg-muted rounded-lg p-6">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Icon name="Calendar" size={20} className="mr-2" />
            Meeting Preferences (Optional)
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Preferred Time Zone"
              options={timeZones}
              value={selectedTimeZone}
              onChange={setSelectedTimeZone}
              description="Select your local time zone for scheduling"
            />
            
            <Input
              label="Preferred Meeting Time"
              type="text"
              placeholder="e.g., Weekdays 9 AM - 5 PM"
              {...register('preferredTime')}
              description="When are you typically available?"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <Checkbox
            label="I agree to the terms and conditions"
            description="By submitting this form, you agree to our privacy policy and terms of service."
            required
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e?.target?.checked)}
            error={!agreeToTerms && errors?.terms ? 'You must agree to the terms' : ''}
          />
          
          <Checkbox
            label="Subscribe to newsletter"
            description="Get updates on new projects, blog posts, and industry insights."
            checked={subscribeNewsletter}
            onChange={(e) => setSubscribeNewsletter(e?.target?.checked)}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            disabled={!agreeToTerms}
            iconName="Send"
            iconPosition="right"
          >
            {isSubmitting ? 'Sending Message...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;