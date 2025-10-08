import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #2563EB, #1D4ED8)',
      }}
      aria-labelledby="cta-heading"
    >
      {/* Soft animated glow */}
      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          backgroundImage:
            'radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, transparent 50%)',
          backgroundSize: '50% 50%',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-8 rounded-full bg-white/20 backdrop-blur-xl border border-white/30">
            <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
            <span className="text-xs md:text-sm text-white">
              {t.cta.badge}
            </span>
          </div>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight"
          >
            {t.cta.title}
            <br />
            <span className="text-white/95">
              {t.cta.highlight}
            </span>
          </h2>

          {/* Subcopy */}
          <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.cta.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#request-access"
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-blue-600 rounded-2xl font-semibold text-lg md:text-xl flex items-center gap-2 md:gap-3 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:bg-white/95 transition-colors"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">{t.cta.buttons.primary}</span>
              <ArrowRight
                className="relative z-10 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </motion.a>

            <a
              href="#book-demo"
              className="px-8 md:px-10 py-4 md:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-2xl font-semibold text-lg md:text-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {t.cta.buttons.demo}
            </a>
          </div>

          {/* Availability badge */}
          <motion.div
            className="mt-6 md:mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(255,255,255,0)',
                '0 0 0 8px rgba(255,255,255,0.15)',
                '0 0 0 0 rgba(255,255,255,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-live="polite"
          >
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
            <span className="text-xs md:text-sm text-white">
              {t.cta.limited}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Peripheral glows */}
      <div className="absolute -bottom-40 -left-40 w-80 md:w-96 h-80 md:h-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 w-80 md:w-96 h-80 md:h-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
    </section>
  );
}
