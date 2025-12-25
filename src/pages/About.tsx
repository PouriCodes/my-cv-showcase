import { motion } from 'framer-motion';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const About = () => {
  const { t, isRTL } = useLanguage();

  const stats = [
    { value: '5+', label: t('about.experience') },
    { value: '50+', label: t('about.projects') },
    { value: '30+', label: t('about.clients') },
  ];

  const skills = [
    { icon: Code2, name: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Next.js'] },
    { icon: Server, name: 'Backend', items: ['Node.js', 'Python', 'PHP', 'Laravel'] },
    { icon: Database, name: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
    { icon: Globe, name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Linux'] },
    { icon: Smartphone, name: 'Mobile', items: ['React Native', 'Flutter', 'PWA'] },
    { icon: Palette, name: 'Design', items: ['Figma', 'Tailwind', 'Sass', 'UI/UX'] },
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
            <span className="gradient-text">{t('about.title')}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "space-y-6",
              isRTL ? "font-persian text-right" : "font-sans"
            )}
          >
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.intro')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className={cn(
                  "glass-card rounded-xl p-6 text-center",
                  isRTL ? "font-persian" : "font-sans"
                )}
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn(
            "text-center mb-12",
            isRTL ? "font-persian" : "font-sans"
          )}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('about.skills')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
