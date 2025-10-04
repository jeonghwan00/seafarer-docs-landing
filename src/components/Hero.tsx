import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220]/80 via-[#0B1220]/90 to-[#0B1220]" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="w-2 h-2 rounded-full bg-[#1BBE7C] animate-pulse" />
            <span className="text-sm text-white/80">{t.hero.badge}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-[1.15] px-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block mb-2 drop-shadow-lg">{t.hero.title}</span>
          <span className="bg-gradient-to-r from-[#1BBE7C] to-[#15a068] bg-clip-text text-transparent drop-shadow-lg">
            {t.hero.highlight}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-[1.05rem] md:text-xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t.hero.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-12 md:mb-16 px-4 w-full max-w-md sm:max-w-none mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1BBE7C] text-white rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">{t.hero.cta.primary}</span>
            <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#1BBE7C] to-[#15a068]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-2xl font-semibold text-base sm:text-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>{t.hero.cta.demo}</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 sm:flex sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/60 px-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-[#1BBE7C]/20 flex items-center justify-center shrink-0">
              <span className="text-[#1BBE7C] font-bold text-base sm:text-base">85%</span>
            </div>
            <span className="text-xs sm:text-sm leading-tight">{t.hero.stats.savings}</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-[#1BBE7C]/20 flex items-center justify-center shrink-0">
              <span className="text-[#1BBE7C] font-bold text-xs sm:text-xs">99.9%</span>
            </div>
            <span className="text-xs sm:text-sm leading-tight">{t.hero.stats.accuracy}</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <div className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-[#1BBE7C]/20 flex items-center justify-center shrink-0">
              <span className="text-[#1BBE7C] font-bold text-base sm:text-base">5min</span>
            </div>
            <span className="text-xs sm:text-sm leading-tight">{t.hero.stats.setup}</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1220] to-transparent z-10" />
    </section>
  );
}
