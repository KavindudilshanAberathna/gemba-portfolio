import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SpeakingEngagements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const engagements = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    event: "React Conference 2023",
    date: "Oct 15, 2023",
    location: "San Francisco, CA",
    type: "conference",
    audience: 1200,
    duration: "45 minutes",
    image: "https://images.unsplash.com/flagged/photo-1572349854775-e5768e1afb74",
    imageAlt: "Large conference hall filled with developers watching presentation on stage with React logo",
    description: "Deep dive into advanced React patterns, performance optimization, and scalable architecture design for enterprise applications.",
    topics: ["React Patterns", "Performance", "Architecture", "Best Practices"],
    videoUrl: "https://youtube.com/watch?v=example1",
    slidesUrl: "https://slides.com/example1",
    feedback: {
      rating: 4.8,
      comments: 156,
      highlights: ["Excellent practical examples", "Clear explanations", "Actionable insights"]
    }
  },
  {
    id: 2,
    title: "Microservices with Node.js and Docker",
    event: "DevOps Summit 2023",
    date: "Sep 8, 2023",
    location: "Austin, TX",
    type: "conference",
    audience: 800,
    duration: "60 minutes",
    image: "https://images.unsplash.com/photo-1733397315165-dca1ba4927ae",
    imageAlt: "Modern conference room with speaker presenting Docker containers architecture on large screen",
    description: "Comprehensive guide to building and deploying microservices using Node.js, Docker, and Kubernetes in production environments.",
    topics: ["Microservices", "Node.js", "Docker", "Kubernetes", "DevOps"],
    videoUrl: "https://youtube.com/watch?v=example2",
    slidesUrl: "https://slides.com/example2",
    feedback: {
      rating: 4.9,
      comments: 203,
      highlights: ["Real-world examples", "Comprehensive coverage", "Expert knowledge"]
    }
  },
  {
    id: 3,
    title: "Modern Frontend Development Practices",
    event: "Tech Meetup Silicon Valley",
    date: "Aug 22, 2023",
    location: "Palo Alto, CA",
    type: "meetup",
    audience: 150,
    duration: "30 minutes",
    image: "https://images.unsplash.com/photo-1597378611316-e62e042e11f2",
    imageAlt: "Intimate meetup setting with developer presenting modern web development tools to small audience",
    description: "Exploring the latest trends in frontend development including TypeScript, testing strategies, and modern tooling.",
    topics: ["TypeScript", "Testing", "Modern Tooling", "Best Practices"],
    slidesUrl: "https://slides.com/example3",
    feedback: {
      rating: 4.7,
      comments: 42,
      highlights: ["Practical tips", "Up-to-date content", "Interactive session"]
    }
  },
  {
    id: 4,
    title: "Cloud Architecture Patterns",
    event: "AWS Community Day",
    date: "Jul 10, 2023",
    location: "Seattle, WA",
    type: "workshop",
    audience: 80,
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1728364154694-0d6146e824cb",
    imageAlt: "Workshop environment with participants working on laptops while instructor explains cloud architecture diagrams",
    description: "Hands-on workshop covering cloud architecture patterns, serverless computing, and AWS best practices for scalable applications.",
    topics: ["Cloud Architecture", "AWS", "Serverless", "Scalability"],
    materialsUrl: "https://github.com/example/workshop-materials",
    feedback: {
      rating: 4.9,
      comments: 67,
      highlights: ["Hands-on approach", "Expert guidance", "Valuable resources"]
    }
  },
  {
    id: 5,
    title: "The Future of Web Development",
    event: "TechTalk Podcast",
    date: "Jun 5, 2023",
    location: "Remote",
    type: "podcast",
    audience: 5000,
    duration: "90 minutes",
    image: "https://images.unsplash.com/photo-1615458317303-4bb49df432cc",
    imageAlt: "Professional podcast recording setup with microphones and headphones in modern studio",
    description: "Discussion about emerging technologies, industry trends, and the evolution of web development practices.",
    topics: ["Web3", "AI/ML", "Industry Trends", "Career Growth"],
    podcastUrl: "https://podcast.com/example",
    feedback: {
      rating: 4.6,
      comments: 89,
      highlights: ["Insightful discussion", "Future-focused", "Inspiring content"]
    }
  },
  {
    id: 6,
    title: "API Design and Documentation",
    event: "API World Conference",
    date: "May 18, 2023",
    location: "San Jose, CA",
    type: "conference",
    audience: 600,
    duration: "45 minutes",
    image: "https://images.unsplash.com/photo-1575029644286-efb9039cac46",
    imageAlt: "Conference presentation showing API documentation examples on large screen with engaged audience",
    description: "Best practices for designing RESTful APIs, comprehensive documentation strategies, and developer experience optimization.",
    topics: ["API Design", "Documentation", "REST", "Developer Experience"],
    videoUrl: "https://youtube.com/watch?v=example6",
    slidesUrl: "https://slides.com/example6",
    feedback: {
      rating: 4.8,
      comments: 134,
      highlights: ["Practical examples", "Clear methodology", "Actionable advice"]
    }
  }];


  const categories = [
  { id: 'all', label: 'All Events', count: engagements?.length },
  { id: 'conference', label: 'Conferences', count: engagements?.filter((e) => e?.type === 'conference')?.length },
  { id: 'meetup', label: 'Meetups', count: engagements?.filter((e) => e?.type === 'meetup')?.length },
  { id: 'workshop', label: 'Workshops', count: engagements?.filter((e) => e?.type === 'workshop')?.length },
  { id: 'podcast', label: 'Podcasts', count: engagements?.filter((e) => e?.type === 'podcast')?.length }];


  const filteredEngagements = selectedCategory === 'all' ?
  engagements :
  engagements?.filter((e) => e?.type === selectedCategory);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'conference':return 'Users';
      case 'meetup':return 'Coffee';
      case 'workshop':return 'Wrench';
      case 'podcast':return 'Mic';
      default:return 'Calendar';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'conference':return 'text-primary bg-primary/10 border-primary/20';
      case 'meetup':return 'text-accent bg-accent/10 border-accent/20';
      case 'workshop':return 'text-warning bg-warning/10 border-warning/20';
      case 'podcast':return 'text-brand-purple bg-brand-purple/10 border-brand-purple/20';
      default:return 'text-text-secondary bg-muted border-border';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Icon name="Mic" size={28} className="mr-3 text-primary" />
          <h3 className="text-3xl font-bold text-foreground">Speaking Engagements</h3>
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Sharing knowledge and insights with the developer community through conferences, meetups, and workshops
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories?.map((category) =>
        <button
          key={category?.id}
          onClick={() => setSelectedCategory(category?.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          selectedCategory === category?.id ?
          'bg-primary text-white shadow-md' :
          'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'}`
          }>

            {category?.label} ({category?.count})
          </button>
        )}
      </div>
      {/* Engagements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredEngagements?.map((engagement) =>
        <div key={engagement?.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
              src={engagement?.image}
              alt={engagement?.imageAlt}
              className="w-full h-full object-cover" />

              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getTypeColor(engagement?.type)}`}>
                  <Icon name={getTypeIcon(engagement?.type)} size={12} className="mr-1 inline" />
                  {engagement?.type?.charAt(0)?.toUpperCase() + engagement?.type?.slice(1)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-foreground mb-2">{engagement?.title}</h4>
                <p className="text-lg text-primary font-medium mb-1">{engagement?.event}</p>
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <span className="flex items-center">
                    <Icon name="Calendar" size={14} className="mr-1" />
                    {engagement?.date}
                  </span>
                  <span className="flex items-center">
                    <Icon name="MapPin" size={14} className="mr-1" />
                    {engagement?.location}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Users" size={14} className="mr-1" />
                    {engagement?.audience?.toLocaleString()} attendees
                  </span>
                </div>
              </div>

              <p className="text-text-secondary mb-4">{engagement?.description}</p>

              {/* Topics */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {engagement?.topics?.map((topic, idx) =>
                <span
                  key={idx}
                  className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">

                      {topic}
                    </span>
                )}
                </div>
              </div>

              {/* Feedback */}
              <div className="mb-4 p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Icon name="Star" size={16} className="text-warning mr-1" />
                    <span className="font-medium text-foreground">{engagement?.feedback?.rating}/5.0</span>
                  </div>
                  <span className="text-sm text-text-secondary">
                    {engagement?.feedback?.comments} reviews
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {engagement?.feedback?.highlights?.map((highlight, idx) =>
                <span key={idx} className="text-xs text-success">
                      "#{highlight}"
                    </span>
                )}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {engagement?.videoUrl &&
              <a
                href={engagement?.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200">

                    <Icon name="Play" size={14} className="mr-1" />
                    Watch Video
                  </a>
              }
                {engagement?.slidesUrl &&
              <a
                href={engagement?.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200">

                    <Icon name="FileText" size={14} className="mr-1" />
                    View Slides
                  </a>
              }
                {engagement?.podcastUrl &&
              <a
                href={engagement?.podcastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200">

                    <Icon name="Headphones" size={14} className="mr-1" />
                    Listen
                  </a>
              }
                {engagement?.materialsUrl &&
              <a
                href={engagement?.materialsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200">

                    <Icon name="Download" size={14} className="mr-1" />
                    Materials
                  </a>
              }
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10">
        <Icon name="MessageCircle" size={32} className="mx-auto mb-4 text-primary" />
        <h4 className="text-2xl font-semibold text-foreground mb-2">Interested in Having Me Speak?</h4>
        <p className="text-text-secondary mb-6 max-w-md mx-auto">
          I'm always excited to share knowledge and connect with the developer community. Let's discuss your event!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">

            <Icon name="Mail" size={18} className="mr-2" />
            Contact Me
          </a>
          <a
            href="/speaker-kit.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200">

            <Icon name="Download" size={18} className="mr-2" />
            Speaker Kit
          </a>
        </div>
      </div>
    </div>);

};

export default SpeakingEngagements;