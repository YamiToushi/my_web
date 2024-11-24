import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import kor from '../assets/image_2024-11-25_01-47-09.png';
import man from '../assets/manpower.png';
import lang from '../assets/9616562.png';

const Header = ({ language, setLanguage }) => {

  return (
    <header className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-20">
          <div className='flex'>
          <img src={kor} alt="Image 1" className="h-20 w-20" />
          <text className='text-3xl font-bold w-20 text-center mx-2'>General Consuate</text>
          </div>
          
          <div className='flex'>
          <img src={man} alt="Image 2" className="h-20 w-32" />
          <text className='text-3xl font-bold w-80 text-center mr-8'>Millitiary Manpower Administration</text>
          </div>
          
          <div className='flex'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JVtmF8eM9Qt6uG4PnRDZx-v6L4Ko2lUd4Q&s?height=40&width=40" alt="Image 3" className="h-20 w-30" />
          <text className='text-3xl font-bold w-40 text-center mr-8'>KOICA Philippines</text>
          </div>
          
          
      
        </div>

        <div className="flex items-center space-x-4">
        <img src={lang} alt="Image 2" className="h-10 w-10" />
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;
