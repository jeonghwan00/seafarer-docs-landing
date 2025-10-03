import { motion, useScroll, useTransform } from 'framer-motion';
import { Upload, Zap, CheckCircle, Send } from 'lucide-react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Upload, Zap, CheckCircle, Send];

export default function HowItWorks() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-32 px-6"
      aria-labelledby="how-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-widest uppercase text-white/50 mb-3">
            {t.howItWorks.subtitle}
          </p>
          <h2
            id="how-heading"
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            {t.howItWorks.title}
            <br className="md:hidden" />
            <span className="md:ml-2 bg-gradient-to-r from-[#1BBE7C] to-[#15a068] bg-clip-text text-transparent">
              {t.howItWorks.highlight}
            </span>
          </h2>
          <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t.howItWorks.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Steps */}
          <ol className="space-y-6 md:space-y-8">
            {t.howItWorks.steps.map((step, index) => {
              const Icon = icons[index];
              return (
              <motion.li
                key={step.title}
                aria-label={`${index + 1}단계 ${step.title}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative"
              >
                <div className="flex items-start gap-5 md:gap-6 p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#1BBE7C] to-[#15a068] flex items-center justify-center">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5 md:mb-2">
                      <span className="text-[11px] md:text-xs font-mono text-[#1BBE7C]">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <span className="ml-auto hidden sm:inline text-[10px] md:text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/60">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-sm md:text-lg text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Vertical connector */}
                {index < t.howItWorks.steps.length - 1 && (
                  <div
                    className="absolute left-[1.75rem] md:left-[2rem] top-full h-8 w-px bg-gradient-to-b from-[#1BBE7C]/50 to-transparent"
                    aria-hidden="true"
                  />
                )}
              </motion.li>
              );
            })}
          </ol>

          {/* Sticky preview */}
          <motion.div className="sticky top-24 md:top-32" style={{ scale, opacity }}>
            <div className="relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1BBE7C]/10 to-transparent" />
              <div className="relative z-10">
                {/* Window mock */}
                <div className="bg-[#0B1220] rounded-2xl p-5 md:p-6 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-8 bg-white/5 rounded-lg animate-pulse" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 bg-white/5 rounded-lg" />
                      <div className="h-24 bg-white/5 rounded-lg" />
                    </div>
                    <div className="h-12 bg-gradient-to-r from-[#1BBE7C]/20 to-transparent rounded-lg" />
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-white/40 text-xs md:text-sm">SeaDocs Dashboard</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
