import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-0">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 hover:border-blue-300 transition-colors">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm text-blue-700 font-medium">{t.hero.badge}</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 md:mb-6 leading-[1.15] tracking-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.title}
            <br />
            <span className="text-blue-600">
              {t.hero.highlight}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg text-neutral-600 mb-8 md:mb-10 max-w-2xl leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-12 md:mb-16 lg:mb-20 w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              className="group relative w-full sm:w-auto px-7 py-3.5 bg-blue-600 text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2 overflow-hidden hover:bg-blue-700 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t.hero.cta.primary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="group w-full sm:w-auto px-7 py-3.5 bg-white border border-neutral-300 text-neutral-700 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:border-neutral-400 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-5 h-5" />
              <span>{t.hero.cta.demo}</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-base">85%</span>
              </div>
              <span className="text-sm text-neutral-600">{t.hero.stats.savings}</span>
            </motion.div>

            <div className="hidden sm:block w-px h-8 bg-neutral-200" />

            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xs">99.9%</span>
              </div>
              <span className="text-sm text-neutral-600">{t.hero.stats.accuracy}</span>
            </motion.div>

            <div className="hidden sm:block w-px h-8 bg-neutral-200" />

            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-base">5min</span>
              </div>
              <span className="text-sm text-neutral-600">{t.hero.stats.setup}</span>
            </motion.div>
          </motion.div>

          {/* Preview Image - Agero Style with Scroll Scale Up */}
          <motion.div
            className="mt-12 md:mt-16 lg:mt-20 w-full max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative rounded-t-3xl overflow-hidden shadow-2xl border border-neutral-200 bg-white">
              <img
                src="https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="SeaDocs Preview"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
