import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Portfolio = () => {
  const { t, isRTL } = useLanguage();

  const projects = [
    {
      title: 'E-Commerce Platform',
      titleFa: 'پلتفرم فروشگاهی',
      description: 'A modern e-commerce solution with real-time inventory and payment integration.',
      descriptionFa: 'یک راه‌حل فروشگاهی مدرن با موجودی بلادرنگ و یکپارچه‌سازی پرداخت.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      titleFa: 'اپلیکیشن مدیریت وظایف',
      description: 'Collaborative task management with real-time updates and team features.',
      descriptionFa: 'مدیریت وظایف مشارکتی با به‌روزرسانی بلادرنگ و قابلیت‌های تیمی.',
      tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Analytics Dashboard',
      titleFa: 'داشبورد آنالیتیکس',
      description: 'Real-time data visualization dashboard with customizable widgets.',
      descriptionFa: 'داشبورد نمایش داده بلادرنگ با ویجت‌های قابل سفارشی‌سازی.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media App',
      titleFa: 'اپلیکیشن شبکه اجتماعی',
      description: 'A social platform with real-time messaging and content sharing.',
      descriptionFa: 'پلتفرم اجتماعی با پیام‌رسانی بلادرنگ و اشتراک‌گذاری محتوا.',
      tech: ['React Native', 'GraphQL', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Content Generator',
      titleFa: 'تولیدکننده محتوای هوشمند',
      description: 'AI-powered content creation tool with multiple language support.',
      descriptionFa: 'ابزار تولید محتوا مبتنی بر هوش مصنوعی با پشتیبانی از چندین زبان.',
      tech: ['Next.js', 'OpenAI', 'Prisma', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Booking System',
      titleFa: 'سیستم رزرواسیون',
      description: 'Complete booking solution with calendar integration and notifications.',
      descriptionFa: 'راه‌حل کامل رزرواسیون با یکپارچه‌سازی تقویم و اعلان‌ها.',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "text-center mb-16",
            isRTL ? "font-persian" : "font-sans"
          )}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('portfolio.title')}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={isRTL ? project.titleFa : project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" asChild className="glow-effect">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className={cn(
                "p-6",
                isRTL ? "font-persian text-right" : "font-sans"
              )}>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {isRTL ? project.titleFa : project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {isRTL ? project.descriptionFa : project.description}
                </p>
                
                {/* Tech Stack */}
                <div className={cn(
                  "flex flex-wrap gap-2",
                  isRTL && "justify-end"
                )}>
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
