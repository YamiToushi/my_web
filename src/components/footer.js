import React from 'react';

const Footer = ({ language }) => {
  const content = {
    en: {
      about: 'About Us',
      description: 'A brief description of your company or website.',
      quickLinks: 'Quick Links',
      links: ['Home', 'About', 'Contact'],
      contact: 'Contact Us',
      email: 'Email: info@example.com',
      phone: 'Phone: (123) 456-7890',
      copyright: '© 2024 Your Company Name. All rights reserved.',
    },
    kor: {
      about: '회사 소개',
      description: '회사 또는 웹사이트에 대한 간단한 설명.',
      quickLinks: '빠른 링크',
      links: ['홈', '소개', '연락처'],
      contact: '연락처',
      email: '이메일: info@example.com',
      phone: '전화: (123) 456-7890',
      copyright: '© 2024 귀하의 회사 이름. 모든 권리 보유.',
    },
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{content[language].about}</h3>
            <p className="text-gray-400">{content[language].description}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{content[language].quickLinks}</h3>
            <ul className="text-gray-400">
              {content[language].links.map((link, index) => (
                <li key={index}><a href="#some" className="hover:text-white">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">{content[language].contact}</h3>
            <p className="text-gray-400">{content[language].email}</p>
            <p className="text-gray-400">{content[language].phone}</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>{content[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

