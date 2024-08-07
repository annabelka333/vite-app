
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { LANG, LOCALE } from '../utils/constants';
import { DropDownIcon } from './icons/icons';

const LangComponent = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
    
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(LANG, lang);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const currentLanguageLabel = LOCALE[i18n.language].label;
  const currentLanguageCode = i18n.language;

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
    <div className="relative flex px-4 pt-2 justify-end" ref={dropdownRef}>
      <button
        type="button"
        className='flex justify-center items-center gap-2 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ouline-none focus:ring-2 focus:ring-offset-2 focus:indigo-500'
        onClick={toggleDropdown}
      >
        {t(currentLanguageLabel).substring(0, 3)}
        < DropDownIcon />
      </button>
      {isOpen && (
        <ul
          className="origin-top-right absolute right-4 top-full z-10 mt-2 w-56 rounded-md bg-white shadow-lf ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-labelledby="menu-button"
        >
          {Object.keys(LOCALE).map((key) => (
            <li
              className={`cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full ${
                key === currentLanguageCode ? 'bg-green-100' : ''
              }`}
              key={key}
              role="menuitem"
              onClick={() => changeLanguage(key)}
            >
              {t(LOCALE[key].label)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangComponent;