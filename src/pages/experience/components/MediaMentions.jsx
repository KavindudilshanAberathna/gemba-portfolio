import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MediaMentions = () => {
  const [selectedType, setSelectedType] = useState('all');

  const mentions = [
  {
    id: 1,
    type: "article",
    title: "Rising Stars in Tech: 10 Developers to Watch in 2023",
    publication: "TechCrunch",
    date: "Nov 2023",
    excerpt: "Featured as one of the most promising full-stack developers making significant contributions to open-source projects and enterprise solutions.",
    url: "https://techcrunch.com/example-article",
    image: "https://images.unsplash.com/photo-1570929057588-6952f7dd2305",
    imageAlt: "TechCrunch article header with modern tech publication design and developer spotlight graphics",
    category: "Recognition",
    readTime: "5 min read"
  },
  {
    id: 2,
    type: "interview",
    title: "Building the Future: A Conversation with Emerging Tech Leaders",
    publication: "Developer Weekly",
    date: "Oct 2023",
    excerpt: "In-depth interview discussing modern development practices, team leadership, and the evolution of web technologies.",
    url: "https://developerweekly.com/interview",
    image: "https://images.unsplash.com/photo-1613413561312-e329d024ed65",
    imageAlt: "Professional interview setup with modern office background and Developer Weekly branding",
    category: "Interview",
    readTime: "12 min read"
  },
  {
    id: 3,
    type: "podcast",
    title: "The Code Chronicles: Scaling React Applications",
    publication: "DevTalk Podcast",
    date: "Sep 2023",
    excerpt: "Guest appearance discussing React performance optimization, architectural decisions, and lessons learned from building large-scale applications.",
    url: "https://devtalk.com/episode-142",
    image: "https://images.unsplash.com/photo-1693904325960-ffd88fd9d35c",
    imageAlt: "Podcast recording studio with professional microphones and DevTalk Podcast branding",
    category: "Podcast",
    duration: "45 minutes"
  },
  {
    id: 4,
    type: "article",
    title: "Open Source Contributions That Made a Difference",
    publication: "GitHub Blog",
    date: "Aug 2023",
    excerpt: "Highlighted for significant contributions to popular React libraries and maintaining high-quality open-source projects.",
    url: "https://github.blog/open-source-spotlight",
    image: "https://images.unsplash.com/photo-1650235165518-c3501821f775",
    imageAlt: "GitHub blog article featuring open source contribution graphs and code collaboration imagery",
    category: "Open Source",
    readTime: "7 min read"
  },
  {
    id: 5,
    type: "video",
    title: "Tech Talks: Modern Frontend Architecture",
    publication: "YouTube - TechConf",
    date: "Jul 2023",
    excerpt: "Conference talk about building scalable frontend architectures, featured on TechConf's official channel with 50K+ views.",
    url: "https://youtube.com/watch?v=example",
    image: "https://images.unsplash.com/photo-1590674680695-8b9efe9b764d",
    imageAlt: "Conference stage with speaker presenting frontend architecture diagrams to large tech audience",
    category: "Speaking",
    views: "52,000 views"
  },
  {
    id: 6,
    type: "article",
    title: "The New Wave of Full-Stack Developers",
    publication: "Stack Overflow Blog",
    date: "Jun 2023",
    excerpt: "Case study featuring development approach and problem-solving methodology in modern web application development.",
    url: "https://stackoverflow.blog/full-stack-developers",
    image: "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f",
    imageAlt: "Stack Overflow blog header with developer workspace and modern coding environment imagery",
    category: "Case Study",
    readTime: "8 min read"
  },
  {
    id: 7,
    type: "interview",
    title: "Career Paths in Tech: From Junior to Senior Developer",
    publication: "Hacker News",
    date: "May 2023",
    excerpt: "Featured interview about career growth, mentoring junior developers, and navigating the tech industry landscape.",
    url: "https://news.ycombinator.com/career-paths",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a3c3ae07-1762248973488.png",
    imageAlt: "Professional headshot interview setup with Hacker News orange branding and tech industry backdrop",
    category: "Career",
    readTime: "10 min read"
  },
  {
    id: 8,
    type: "article",
    title: "Innovation in Enterprise Software Development",
    publication: "InfoWorld",
    date: "Apr 2023",
    excerpt: "Quoted as expert on enterprise software architecture and implementation of modern development practices in large organizations.",
    url: "https://infoworld.com/enterprise-innovation",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1861642c0-1762273818821.png",
    imageAlt: "InfoWorld publication header with enterprise software development graphics and business technology imagery",
    category: "Expert Opinion",
    readTime: "6 min read"
  }];


  const types = [
  { id: 'all', label: 'All Media', count: mentions?.length },
  { id: 'article', label: 'Articles', count: mentions?.filter((m) => m?.type === 'article')?.length },
  { id: 'interview', label: 'Interviews', count: mentions?.filter((m) => m?.type === 'interview')?.length },
  { id: 'podcast', label: 'Podcasts', count: mentions?.filter((m) => m?.type === 'podcast')?.length },
  { id: 'video', label: 'Videos', count: mentions?.filter((m) => m?.type === 'video')?.length }];


  const filteredMentions = selectedType === 'all' ?
  mentions :
  mentions?.filter((m) => m?.type === selectedType);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article':return 'FileText';
      case 'interview':return 'MessageSquare';
      case 'podcast':return 'Headphones';
      case 'video':return 'Play';
      default:return 'Globe';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'article':return 'text-primary bg-primary/10 border-primary/20';
      case 'interview':return 'text-accent bg-accent/10 border-accent/20';
      case 'podcast':return 'text-brand-purple bg-brand-purple/10 border-brand-purple/20';
      case 'video':return 'text-warning bg-warning/10 border-warning/20';
      default:return 'text-text-secondary bg-muted border-border';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Recognition': 'text-success bg-success/10',
      'Interview': 'text-primary bg-primary/10',
      'Podcast': 'text-brand-purple bg-brand-purple/10',
      'Open Source': 'text-accent bg-accent/10',
      'Speaking': 'text-warning bg-warning/10',
      'Case Study': 'text-secondary bg-secondary/10',
      'Career': 'text-primary bg-primary/10',
      'Expert Opinion': 'text-success bg-success/10'
    };
    return colors?.[category] || 'text-text-secondary bg-muted';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Icon name="Newspaper" size={28} className="mr-3 text-primary" />
          <h3 className="text-3xl font-bold text-foreground">Media Mentions & Publications</h3>
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Featured articles, interviews, and media coverage highlighting technical expertise and industry contributions
        </p>
      </div>
      {/* Type Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {types?.map((type) =>
        <button
          key={type?.id}
          onClick={() => setSelectedType(type?.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          selectedType === type?.id ?
          'bg-primary text-white shadow-md' :
          'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'}`
          }>

            {type?.label} ({type?.count})
          </button>
        )}
      </div>
      {/* Mentions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMentions?.map((mention) =>
        <div key={mention?.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
              src={mention?.image}
              alt={mention?.imageAlt}
              className="w-full h-full object-cover" />

              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getTypeColor(mention?.type)}`}>
                  <Icon name={getTypeIcon(mention?.type)} size={12} className="mr-1 inline" />
                  {mention?.type?.charAt(0)?.toUpperCase() + mention?.type?.slice(1)}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(mention?.category)}`}>
                  {mention?.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
                  {mention?.title}
                </h4>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-lg text-primary font-medium">{mention?.publication}</p>
                  <span className="text-sm text-text-secondary">{mention?.date}</span>
                </div>
              </div>

              <p className="text-text-secondary mb-4 line-clamp-3">{mention?.excerpt}</p>

              {/* Metadata */}
              <div className="flex items-center justify-between mb-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-4">
                  {mention?.readTime &&
                <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {mention?.readTime}
                    </span>
                }
                  {mention?.duration &&
                <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {mention?.duration}
                    </span>
                }
                  {mention?.views &&
                <span className="flex items-center">
                      <Icon name="Eye" size={14} className="mr-1" />
                      {mention?.views}
                    </span>
                }
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center justify-between">
                <a
                href={mention?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium">

                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Read Full {mention?.type === 'podcast' ? 'Episode' : mention?.type === 'video' ? 'Video' : 'Article'}
                </a>
                <button className="p-2 text-text-secondary hover:text-primary hover:bg-muted rounded-lg transition-all duration-200">
                  <Icon name="Share2" size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-semibold text-foreground mb-2">Media Impact</h4>
          <p className="text-text-secondary">Recognition and reach across various publications and platforms</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name="FileText" size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">8</div>
            <div className="text-sm text-text-secondary">Publications</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name="Eye" size={24} className="text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">150K+</div>
            <div className="text-sm text-text-secondary">Total Reach</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-brand-purple/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name="MessageSquare" size={24} className="text-brand-purple" />
            </div>
            <div className="text-2xl font-bold text-foreground">3</div>
            <div className="text-sm text-text-secondary">Interviews</div>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Icon name="Award" size={24} className="text-warning" />
            </div>
            <div className="text-2xl font-bold text-foreground">5</div>
            <div className="text-sm text-text-secondary">Features</div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center">
        <h4 className="text-xl font-semibold text-foreground mb-2">Media Inquiries</h4>
        <p className="text-text-secondary mb-4">
          Interested in featuring my work or conducting an interview?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">

          <Icon name="Mail" size={18} className="mr-2" />
          Get in Touch
        </a>
      </div>
    </div>);

};

export default MediaMentions;