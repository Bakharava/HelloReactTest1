import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const LanguageDropdown = () => {
  const languages = ['English', 'Spanish', 'French'];
  const { setLanguage } = useContext(AppContext);

  const selectLang = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div>
      <select onChange={selectLang}>
        {languages.map((lang) => (
          <option key={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
