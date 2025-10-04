import { motion } from 'framer-motion';
import { Upload, Zap, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Upload, Zap, CheckCircle, Send];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section
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

        <div className="max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
