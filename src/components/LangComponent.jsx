import { useTranslation } from 'react-i18next';
import { LANG, LANGUAGES } from '../utils/constants';

const LangComponent = () => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lang) => {
    console.log({lang});

    i18n.changeLanguage(lang);
    localStorage.setItem(LANG, lang);
  };

  return (
    <>
      {
        LANGUAGES.map(({code, label}) => (
          <button 
            className={`py-1 px-2 mx-2 ${ code === i18n.language ? 'bg-green-100' : 'bg-slate-200'}`}
            key={code} 
            onClick={()=> changeLanguage(code)}>
            {t(label)}
          </button>
        ))
      }        
    </>
  );
};

export default LangComponent;