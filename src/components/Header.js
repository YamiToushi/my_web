import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ language, setLanguage }) => {

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9vmKxDAjWhzy3pDzwnsKvJNcu8sE6UJawA&s?height=40&width=40" alt="Image 1" className="h-20 w-20" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8t2AnCUbCQO80F0hK8QKwAOviNLoVwDkv8obmR5g9yAuubc33cFm4f1j4j7OWibPwPY&usqp=CAU?height=40&width=40" alt="Image 2" className="h-20 w-18" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JVtmF8eM9Qt6uG4PnRDZx-v6L4Ko2lUd4Q&s?height=40&width=40" alt="Image 3" className="h-20 w-30" />
      
        </div>
        <div className="flex items-center space-x-4">
          
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
