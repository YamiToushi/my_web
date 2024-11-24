import React, { useEffect } from 'react';
import main from'../assets/sections2.JPG';

const Section2 = ({ language }) => {
  const content = {
    en: {
     
      countries: ['Korea', 'Manila'],
    },
    kor: {
  
      countries: ['노르웨이', '미국'],
    },
  };

  const timezones = ['Asia/Seoul', 'Asia/Manila'];

  useEffect(() => {
    function updateClocks() {
      document.querySelectorAll('.clock').forEach((clock, index) => {
        const time = new Date().toLocaleTimeString('en-US', { timeZone: timezones[index], hour: '2-digit', minute: '2-digit' });
        clock.textContent = time;
      });
    }

    const interval = setInterval(updateClocks, 1000);
    updateClocks(); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-4">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold mb-8 text-center ">{content[language].title}</h2>
        <div className="relative">
          <img src={main} alt="Large Photo" className="w-full h-full rounded-lg shadow-lg" />
          <div className="absolute top-40 left-0 w-full h-full flex justify-around items-start ">
            {content[language].countries.map((country, index) => (
              <div key={index} className="text-center">
              
                <p className="text-white font-bold">{country}</p>
                <div className="clock text-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

