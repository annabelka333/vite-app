
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LANG, LANGUAGES } from '../utils/constants';
import { useAppContext } from '../context/app.context';

const LangComponent = () => {
  const { i18n, t } = useTranslation();
  const context = useAppContext();
  console.log('Context', context.loading);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  
  
  const changeLanguage = (lang) => {
    console.log({ lang });
    context.greeting('Roma');
    i18n.changeLanguage(lang);
    localStorage.setItem(LANG, lang);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const currentLanguageLabel = LANGUAGES.find(lang => lang.code === i18n.language)?.label || 'Language';
  const currentLanguageCode = i18n.language;
  const buttonBgColor = currentLanguageLabel === 'en' ? 'bg-green-200' : currentLanguageCode === 'es' ? 'bg-gree-200' : 'bg-green-200';

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  
 return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className = {`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ouline-nono focus:ring-2 focus:ring-offset-2 focus:indigo-500 ${buttonBgColor}`}
        onClick={toggleDropdown}
      >
  
        {t(currentLanguageLabel)}
        <svg
          className="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className = "origin-top-right absolute right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lf ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orintation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {LANGUAGES.map(({ code, label }) => (
              <button
                className={`block px-4 py-2 text-m text gray-700 hover;bg-gray-100 w-full text-left ${
                  code === i18n.language ? "bg-green-100" : ""
                }`}
                key={code}
                role="menuitem"
                onClick={() => changeLanguage(code)}
              >
                {t(label)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LangComponent;