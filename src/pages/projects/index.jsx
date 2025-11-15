import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import ProjectFilters from './components/ProjectFilters';
import ProjectStats from './components/ProjectStats';
import InteractiveElements from '../hero-section/components/InteractiveElements';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [sortBy, setSortBy] = useState('recent');

  // Mock project data
  const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "A comprehensive e-commerce solution with advanced features including real-time inventory management, payment processing, and analytics dashboard.",
    fullDescription: `A modern e-commerce platform built with React and Node.js, featuring a microservices architecture for scalability. The platform handles high-traffic loads with optimized database queries and caching strategies. Integrated with multiple payment gateways and shipping providers for seamless customer experience.\n\nThe admin dashboard provides real-time analytics, inventory management, and customer insights. The platform supports multi-vendor functionality with automated commission calculations and payout systems.`,
    image: "https://images.unsplash.com/photo-1649424221016-58857288854e",
    imageAlt: "Modern e-commerce website interface showing product listings and shopping cart on desktop and mobile devices",
    additionalImages: [
    {
      url: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
      alt: "E-commerce dashboard showing sales analytics and inventory management interface"
    }],

    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS", "Redis", "Docker"],
    status: "Live",
    rating: 4.9,
    duration: "6 months",
    teamSize: "5 developers",
    role: "Lead Full Stack Developer",
    liveUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    caseStudyUrl: "https://blog.example.com/ecommerce-case-study",
    metrics: {
      performance: "98%",
      impact: "40% ↑"
    },
    keyFeatures: [
    "Real-time inventory management with automated restocking alerts",
    "Multi-payment gateway integration (Stripe, PayPal, Apple Pay)",
    "Advanced search and filtering with Elasticsearch",
    "Responsive design optimized for mobile commerce",
    "Admin dashboard with comprehensive analytics and reporting",
    "Multi-vendor marketplace functionality with commission tracking"],

    challenges: [
    {
      title: "High Traffic Scalability",
      solution: "Implemented Redis caching and database optimization, reducing response times by 60% and supporting 10x traffic increase."
    },
    {
      title: "Payment Security",
      solution: "Integrated PCI-compliant payment processing with tokenization and fraud detection, achieving 99.9% transaction security."
    }],

    impactMetrics: [
    { value: "250K+", label: "Monthly Users" },
    { value: "$2.5M", label: "Revenue Generated" },
    { value: "99.9%", label: "Uptime" }]

  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile App",
    description: "Cross-platform mobile application for team collaboration and project management with real-time synchronization and offline capabilities.",
    fullDescription: `A comprehensive task management application built with React Native, designed for teams of all sizes. Features include real-time collaboration, file sharing, time tracking, and advanced project analytics.\n\nThe app supports offline functionality with automatic synchronization when connectivity is restored. Integration with popular tools like Slack, Google Drive, and Jira enhances workflow efficiency.`,
    image: "https://images.unsplash.com/photo-1609188343737-366b8dc25152",
    imageAlt: "Mobile task management app interface showing project boards, task lists, and team collaboration features on smartphone screen",
    additionalImages: [
    {
      url: "https://images.unsplash.com/photo-1588511986632-592db3d6c81f",
      alt: "Team collaboration dashboard showing project timeline, task assignments, and progress tracking"
    }],

    technologies: ["React Native", "Firebase", "Redux", "TypeScript", "Expo", "Node.js"],
    status: "Live",
    rating: 4.7,
    duration: "4 months",
    teamSize: "3 developers",
    role: "Mobile App Developer",
    liveUrl: "https://apps.apple.com/app/taskmanager",
    githubUrl: "https://github.com/username/task-manager-app",
    metrics: {
      performance: "95%",
      impact: "60% ↑"
    },
    keyFeatures: [
    "Real-time task synchronization across all devices",
    "Offline mode with automatic sync when online",
    "Team collaboration with comments and file sharing",
    "Time tracking and productivity analytics",
    "Integration with Slack, Google Drive, and Jira",
    "Customizable project templates and workflows"],

    challenges: [
    {
      title: "Offline Synchronization",
      solution: "Implemented conflict resolution algorithms and local storage optimization, ensuring seamless offline-to-online data sync."
    },
    {
      title: "Cross-Platform Performance",
      solution: "Optimized React Native components and implemented lazy loading, achieving native-like performance on both iOS and Android."
    }],

    impactMetrics: [
    { value: "50K+", label: "Active Users" },
    { value: "4.8★", label: "App Store Rating" },
    { value: "85%", label: "User Retention" }]

  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    category: "Data Science",
    description: "Machine learning powered analytics platform providing predictive insights and automated reporting for business intelligence.",
    fullDescription: `An advanced analytics platform leveraging machine learning algorithms to provide predictive insights and automated business intelligence. Built with Python and React, the platform processes large datasets and generates actionable insights.\n\nFeatures include automated anomaly detection, predictive modeling, and customizable reporting dashboards. The system integrates with various data sources and provides real-time analytics with interactive visualizations.`,
    image: "https://images.unsplash.com/photo-1722503585597-548c99b0320c",
    imageAlt: "AI analytics dashboard displaying data visualizations, charts, graphs, and machine learning insights on multiple monitor setup",
    additionalImages: [
    {
      url: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
      alt: "Business intelligence dashboard showing predictive analytics, trend analysis, and automated reporting interface"
    }],

    technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "D3.js", "FastAPI", "Docker", "Kubernetes"],
    status: "In Progress",
    rating: 4.8,
    duration: "8 months",
    teamSize: "4 developers",
    role: "Data Science Lead",
    githubUrl: "https://github.com/username/ai-analytics-dashboard",
    metrics: {
      performance: "92%",
      impact: "75% ↑"
    },
    keyFeatures: [
    "Machine learning powered predictive analytics",
    "Automated anomaly detection and alerting",
    "Interactive data visualizations with D3.js",
    "Real-time data processing and streaming",
    "Customizable reporting and dashboard builder",
    "Integration with multiple data sources and APIs"],

    challenges: [
    {
      title: "Large Dataset Processing",
      solution: "Implemented distributed computing with Apache Spark and optimized ML pipelines, reducing processing time by 70%."
    },
    {
      title: "Real-time Analytics",
      solution: "Built streaming data pipeline with Apache Kafka and Redis, enabling real-time insights with sub-second latency."
    }],

    impactMetrics: [
    { value: "10TB+", label: "Data Processed" },
    { value: "95%", label: "Prediction Accuracy" },
    { value: "3x", label: "Faster Insights" }]

  },
  {
    id: 4,
    title: "Healthcare Management System",
    category: "Web Application",
    description: "Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine capabilities.",
    fullDescription: `A complete healthcare management system designed for hospitals and clinics. The platform manages patient records, appointment scheduling, billing, and includes telemedicine functionality for remote consultations.\n\nBuilt with security and compliance in mind, the system adheres to HIPAA regulations and includes advanced encryption for patient data protection. Features include electronic health records (EHR), prescription management, and integration with medical devices.`,
    image: "https://images.unsplash.com/photo-1723269489159-2258b7386e67",
    imageAlt: "Healthcare management system interface showing patient records, appointment scheduling, and medical dashboard on computer screen",
    additionalImages: [
    {
      url: "https://images.unsplash.com/photo-1666214280577-5f90bc36be92",
      alt: "Telemedicine consultation interface showing video call between doctor and patient with medical records sidebar"
    }],

    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "Socket.io", "AWS", "Docker"],
    status: "Live",
    rating: 4.9,
    duration: "10 months",
    teamSize: "6 developers",
    role: "Senior Frontend Developer",
    liveUrl: "https://healthcaremanagement.example.com",
    githubUrl: "https://github.com/username/healthcare-management",
    caseStudyUrl: "https://blog.example.com/healthcare-case-study",
    metrics: {
      performance: "99%",
      impact: "50% ↑"
    },
    keyFeatures: [
    "Electronic Health Records (EHR) management",
    "Appointment scheduling and calendar integration",
    "Telemedicine with video consultations",
    "Prescription management and e-prescribing",
    "Billing and insurance claim processing",
    "HIPAA compliant security and data encryption"],

    challenges: [
    {
      title: "HIPAA Compliance",
      solution: "Implemented end-to-end encryption, audit logging, and access controls, achieving full HIPAA compliance certification."
    },
    {
      title: "Real-time Communication",
      solution: "Built WebRTC-based telemedicine platform with fallback options, ensuring reliable video consultations with 99.5% uptime."
    }],

    impactMetrics: [
    { value: "15K+", label: "Patients Served" },
    { value: "500+", label: "Healthcare Providers" },
    { value: "99.5%", label: "System Uptime" }]

  },
  {
    id: 5,
    title: "Blockchain Voting System",
    category: "Blockchain",
    description: "Secure and transparent voting platform built on blockchain technology ensuring immutable and verifiable election results.",
    fullDescription: `A revolutionary voting system leveraging blockchain technology to ensure transparency, security, and immutability in electoral processes. Built on Ethereum with smart contracts handling vote recording and tallying.\n\nThe system provides end-to-end verifiability while maintaining voter privacy through zero-knowledge proofs. Features include real-time vote counting, audit trails, and multi-factor authentication for enhanced security.`,
    image: "https://images.unsplash.com/photo-1585417239901-f3a4085218b7",
    imageAlt: "Blockchain voting system interface showing secure voting dashboard with cryptographic verification and transparent vote counting",
    additionalImages: [
    {
      url: "https://images.unsplash.com/photo-1631864032976-cef7f00fea43",
      alt: "Blockchain network visualization showing distributed voting nodes and cryptographic security measures"
    }],

    technologies: ["Solidity", "React", "Web3.js", "Ethereum", "IPFS", "Node.js", "MetaMask"],
    status: "Completed",
    rating: 4.6,
    duration: "5 months",
    teamSize: "3 developers",
    role: "Blockchain Developer",
    githubUrl: "https://github.com/username/blockchain-voting",
    caseStudyUrl: "https://blog.example.com/blockchain-voting-study",
    metrics: {
      performance: "100%",
      impact: "90% ↑"
    },
    keyFeatures: [
    "Immutable vote recording on blockchain",
    "Zero-knowledge proofs for voter privacy",
    "Real-time vote counting and results",
    "Multi-factor authentication system",
    "Audit trails and transparency features",
    "Smart contract automated tallying"],

    challenges: [
    {
      title: "Scalability Issues",
      solution: "Implemented layer-2 scaling solutions and optimized smart contracts, reducing gas costs by 80% and improving throughput."
    },
    {
      title: "User Experience",
      solution: "Created intuitive Web3 interface with MetaMask integration and comprehensive user guides, achieving 95% user satisfaction."
    }],

    impactMetrics: [
    { value: "25K+", label: "Votes Cast" },
    { value: "100%", label: "Transparency" },
    { value: "0", label: "Security Breaches" }]

  },
  {
    id: 6,
    title: "Social Media Analytics Tool",
    category: "SaaS",
    description: "Comprehensive social media analytics platform providing insights, competitor analysis, and automated reporting for brands.",
    fullDescription: `A powerful social media analytics platform that helps brands and marketers track performance across multiple social platforms. Features include sentiment analysis, competitor benchmarking, and automated reporting.\n\nThe platform uses machine learning for content optimization suggestions and provides predictive analytics for campaign performance. Integration with major social platforms enables comprehensive cross-platform analytics.`,
    image: "https://images.unsplash.com/photo-1660732421009-469aba1c2e81",
    imageAlt: "Social media analytics dashboard showing engagement metrics, audience insights, and performance charts across multiple platforms",
    additionalImages: [
    {
      url: "https://images.unsplash.com/photo-1676276374782-39159bc5e7b4",
      alt: "Social media content calendar and scheduling interface with analytics overlay and performance predictions"
    }],

    technologies: ["Angular", "Python", "Django", "PostgreSQL", "Celery", "Redis", "Chart.js"],
    status: "Live",
    rating: 4.5,
    duration: "7 months",
    teamSize: "5 developers",
    role: "Frontend Lead",
    liveUrl: "https://socialanalytics.example.com",
    githubUrl: "https://github.com/username/social-analytics",
    metrics: {
      performance: "94%",
      impact: "65% ↑"
    },
    keyFeatures: [
    "Multi-platform social media monitoring",
    "Sentiment analysis and brand mention tracking",
    "Competitor analysis and benchmarking",
    "Automated reporting and insights",
    "Content optimization recommendations",
    "Real-time engagement tracking"],

    challenges: [
    {
      title: "API Rate Limits",
      solution: "Implemented intelligent API management and caching strategies, optimizing data collection while respecting platform limits."
    },
    {
      title: "Data Processing Scale",
      solution: "Built distributed processing pipeline with Celery and Redis, handling millions of social media posts daily."
    }],

    impactMetrics: [
    { value: "1M+", label: "Posts Analyzed" },
    { value: "500+", label: "Brands Served" },
    { value: "40%", label: "Engagement Increase" }]

  }];


  // Mock stats data
  const projectStats = {
    completed: 25,
    clients: 18,
    awards: 5,
    rating: 4.8
  };

  // Get unique categories and technologies for filters
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const technologies = ['All', ...new Set(projects.flatMap((p) => p.technologies))];

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects?.filter((project) => {
      const categoryMatch = selectedCategory === 'All' || project?.category === selectedCategory;
      const technologyMatch = selectedTechnology === 'All' || project?.technologies?.includes(selectedTechnology);
      return categoryMatch && technologyMatch;
    });

    // Sort projects
    switch (sortBy) {
      case 'rating':
        return filtered?.sort((a, b) => b?.rating - a?.rating);
      case 'alphabetical':
        return filtered?.sort((a, b) => a?.title?.localeCompare(b?.title));
      case 'recent':
      default:
        return filtered?.sort((a, b) => b?.id - a?.id);
    }
  }, [selectedCategory, selectedTechnology, sortBy]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedTechnology('All');
  };

  const handleContactClick = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}

      {/* Add Interactive Background Elements */}
      <InteractiveElements />

      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-purple rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="FolderOpen" size={32} color="white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Project Showcase
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative solutions, from full-stack applications to AI-powered platforms. 
              Each project represents a unique challenge solved with cutting-edge technology and creative problem-solving.
            </p>
          </div>

          {/* Project Statistics */}
          <ProjectStats stats={projectStats} />

          {/* Filters and Sorting */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <ProjectFilters
                categories={categories}
                technologies={technologies}
                selectedCategory={selectedCategory}
                selectedTechnology={selectedTechnology}
                onCategoryChange={setSelectedCategory}
                onTechnologyChange={setSelectedTechnology}
                onClearFilters={handleClearFilters} />

            </div>
            
            {/* Sort Options */}
            <div className="lg:w-64">
              <div className="bg-card border border-border rounded-xl p-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Sort By
                </label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e?.target?.value)}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer">

                    <option value="recent">Most Recent</option>
                    <option value="rating">Highest Rated</option>
                    <option value="alphabetical">Alphabetical</option>
                  </select>
                  <Icon
                    name="ChevronDown"
                    size={16}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary pointer-events-none" />

                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-text-secondary">
              Showing {filteredProjects?.length} of {projects?.length} projects
            </p>
            <div className="flex items-center space-x-2">
              <Icon name="Grid3X3" size={16} className="text-text-secondary" />
              <span className="text-sm text-text-secondary">Grid View</span>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects?.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredProjects?.map((project) =>
            <ProjectCard
              key={project?.id}
              project={project}
              onViewDetails={handleViewDetails} />

            )}
            </div> :

          <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} className="text-text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
              <p className="text-text-secondary mb-6">
                Try adjusting your filters to see more projects.
              </p>
              <Button
              variant="outline"
              onClick={handleClearFilters}
              iconName="RotateCcw"
              iconPosition="left"
              iconSize={16}>

                Clear All Filters
              </Button>
            </div>
          }

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-brand-purple rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life. I'm always excited to work on innovative projects 
              that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleContactClick}
                iconName="MessageCircle"
                iconPosition="left"
                iconSize={20}>

                Let's Discuss Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
                iconName="Download"
                iconPosition="left"
                iconSize={20}
                className="border-white text-white hover:bg-white hover:text-primary">

                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal} />

    </div>);

};

export default Projects;