import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations/translations';

const languages = [
  { code: 'ko' as Language, label: '한국어', flag: '🇰🇷' },
  { code: 'en' as Language, label: 'English', flag: '🇺🇸' },
  { code: 'jp' as Language, label: '日本語', flag: '🇯🇵' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="w-5 h-5 text-[#1BBE7C]" />
          <span className="text-white font-medium">{currentLang.code}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-4 h-4 text-white/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -10,
            scale: isOpen ? 1 : 0.95,
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-full mt-2 right-0 w-56 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
        >
          <div className="p-2">
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  currentLang.code === lang.code
                    ? 'bg-[#1BBE7C]/20 text-[#1BBE7C]'
                    : 'text-white/80 hover:bg-white/10'
                }`}
                whileHover={{ x: 4 }}
              >
                <span className="text-2xl">{lang.flag}</span>
                <div className="flex-1 text-left">
                  <div className="font-medium">{lang.label}</div>
                  <div className="text-xs opacity-60">{lang.code}</div>
                </div>
                {currentLang.code === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-[#1BBE7C]"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.div>
  );
}
