import React from 'react';

const LanguageSwitcher = ({ language, setLanguage }) => {
  return (
    <select
      className="bg-blue-500 text-white px-2 py-1 rounded"
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
    >
      <option value="en">EN</option>
      <option value="kor">KOR</option>
    </select>
  );
};

export default LanguageSwitcher;

