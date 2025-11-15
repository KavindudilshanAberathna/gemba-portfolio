import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredentialGallery = () => {
  const credentials = [
  {
    id: 1,
    type: "certification",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Nov 2023",
    status: "Active",
    credentialId: "AWS-CSA-2023-1147",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1be35455c-1763121086714.png",
    logoAlt: "AWS certification badge with orange and blue cloud design",
    verificationUrl: "https://aws.amazon.com/verification",
    skills: ["Cloud Architecture", "AWS Services", "System Design"]
  },
  {
    id: 2,
    type: "certification",
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "Aug 2023",
    status: "Active",
    credentialId: "GCP-PD-2023-0892",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_15929e93d-1763121088426.png",
    logoAlt: "Google Cloud certification badge with multicolored geometric design",
    verificationUrl: "https://cloud.google.com/certification",
    skills: ["GCP Services", "Kubernetes", "DevOps"]
  },
  {
    id: 3,
    type: "education",
    title: "Master of Science in Computer Science",
    issuer: "Stanford University",
    date: "Jun 2018",
    status: "Completed",
    gpa: "3.8/4.0",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_136e97a72-1763121088409.png",
    logoAlt: "Stanford University seal with cardinal red background and academic symbols",
    specialization: "Machine Learning & Distributed Systems",
    thesis: "Optimizing Distributed Database Performance in Cloud Environments"
  },
  {
    id: 4,
    type: "education",
    title: "Bachelor of Science in Software Engineering",
    issuer: "University of California, Berkeley",
    date: "May 2016",
    status: "Completed",
    gpa: "3.7/4.0",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d25a98e4-1763121088662.png",
    logoAlt: "UC Berkeley seal with blue and gold colors and California bear emblem",
    honors: "Magna Cum Laude",
    activities: ["Computer Science Honor Society", "Hackathon Winner 2015"]
  },
  {
    id: 5,
    type: "certification",
    title: "React Developer Certification",
    issuer: "Meta (Facebook)",
    date: "Mar 2023",
    status: "Active",
    credentialId: "META-RD-2023-0445",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1343591d1-1763121088416.png",
    logoAlt: "Meta React certification badge with blue React logo and Meta branding",
    verificationUrl: "https://developers.facebook.com/certification",
    skills: ["React", "JavaScript", "Frontend Development"]
  },
  {
    id: 6,
    type: "certification",
    title: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "Jan 2023",
    status: "Active",
    credentialId: "CNCF-CKA-2023-0234",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10bec1c02-1763121086708.png",
    logoAlt: "Kubernetes certification badge with blue wheel logo and CNCF branding",
    verificationUrl: "https://cncf.io/certification/verify",
    skills: ["Kubernetes", "Container Orchestration", "DevOps"]
  }];


  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-success bg-success/10 border-success/20';
      case 'Completed':
        return 'text-primary bg-primary/10 border-primary/20';
      default:
        return 'text-text-secondary bg-muted border-border';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'certification':
        return 'Award';
      case 'education':
        return 'GraduationCap';
      default:
        return 'Certificate';
    }
  };

  const certifications = credentials?.filter((cred) => cred?.type === 'certification');
  const education = credentials?.filter((cred) => cred?.type === 'education');

  return (
    <div className="space-y-8">
      {/* Certifications Section */}
      <div>
        <div className="flex items-center mb-6">
          <Icon name="Award" size={24} className="mr-3 text-accent" />
          <h3 className="text-2xl font-semibold text-foreground">Professional Certifications</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications?.map((cert) =>
          <div key={cert?.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                    src={cert?.logo}
                    alt={cert?.logoAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{cert?.title}</h4>
                    <p className="text-text-secondary">{cert?.issuer}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(cert?.status)}`}>
                  {cert?.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary">Issued:</span>
                  <span className="font-medium text-foreground">{cert?.date}</span>
                </div>
                
                {cert?.credentialId &&
              <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Credential ID:</span>
                    <span className="font-mono text-xs text-foreground bg-muted px-2 py-1 rounded">
                      {cert?.credentialId}
                    </span>
                  </div>
              }

                {cert?.skills &&
              <div>
                    <p className="text-sm text-text-secondary mb-2">Skills Validated:</p>
                    <div className="flex flex-wrap gap-1">
                      {cert?.skills?.map((skill, idx) =>
                  <span
                    key={idx}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">

                          {skill}
                        </span>
                  )}
                    </div>
                  </div>
              }

                {cert?.verificationUrl &&
              <div className="pt-3 border-t border-border">
                    <a
                  href={cert?.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200">

                      <Icon name="ExternalLink" size={14} className="mr-1" />
                      Verify Credential
                    </a>
                  </div>
              }
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Education Section */}
      <div>
        <div className="flex items-center mb-6">
          <Icon name="GraduationCap" size={24} className="mr-3 text-brand-purple" />
          <h3 className="text-2xl font-semibold text-foreground">Education</h3>
        </div>
        
        <div className="space-y-6">
          {education?.map((edu) =>
          <div key={edu?.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                  src={edu?.logo}
                  alt={edu?.logoAlt}
                  className="w-full h-full object-cover" />

                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-1">{edu?.title}</h4>
                      <p className="text-lg text-primary font-medium">{edu?.issuer}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-text-secondary">Graduated</p>
                      <p className="font-medium text-foreground">{edu?.date}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {edu?.gpa &&
                  <div>
                        <span className="text-text-secondary">GPA: </span>
                        <span className="font-medium text-foreground">{edu?.gpa}</span>
                      </div>
                  }
                    
                    {edu?.honors &&
                  <div>
                        <span className="text-text-secondary">Honors: </span>
                        <span className="font-medium text-success">{edu?.honors}</span>
                      </div>
                  }
                    
                    {edu?.specialization &&
                  <div className="md:col-span-2">
                        <span className="text-text-secondary">Specialization: </span>
                        <span className="font-medium text-foreground">{edu?.specialization}</span>
                      </div>
                  }
                    
                    {edu?.thesis &&
                  <div className="md:col-span-2">
                        <span className="text-text-secondary">Thesis: </span>
                        <span className="font-medium text-foreground italic">"{edu?.thesis}"</span>
                      </div>
                  }
                    
                    {edu?.activities &&
                  <div className="md:col-span-2">
                        <span className="text-text-secondary">Activities: </span>
                        <span className="font-medium text-foreground">{edu?.activities?.join(', ')}</span>
                      </div>
                  }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default CredentialGallery;