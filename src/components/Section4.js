import React, { useState, useEffect } from 'react';
import image1 from'../assets/1.jpeg';
import image2 from'../assets/2.jpeg';
import image3 from'../assets/3.jpeg';
import image4 from'../assets/4.jpg';
import image5 from'../assets/5.jpg';
import image6 from'../assets/6.jpg';
const Section4 = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3); 
  };
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const images = [
    "https://ik.imagekit.io/tvlk/blog/2020/02/Seoul-1.jpg",
    "https://overseas.mofa.go.kr/upload/se2/ca5e002f-d885-40ea-a665-490e13d069fa.jpg",
    "https://www.lowyinstitute.org/sites/default/files/styles/interpreter_article_image/public/GettyImages-1134201090.jpeg",
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];
  const content = {
    en: {
     
      dropdowns: [
        { title: 'Privacy Guidlines'},
        { title: 'ROK Mission Overseas', content: 'Content for Dropdown 2' },
        { title: 'Foreign Mission in ROK', content: 'Content for Dropdown 3' },
      ],
    },
    kor: {
   
      dropdowns: [
        { title: '고정 콘텐츠', content: '이 섹션은 항상 표시되며 접을 수 없습니다.' },
        { title: '드롭다운 2', content: '드롭다운 2의 내용' },
        { title: '드롭다운 3', content: '드롭다운 3의 내용' },
      ],
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>

        {/* Carousel */}
        <div className="relative py-2">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {[0, 1, 2].map((group) => (
                <div key={group} className="grid grid-cols-3 gap-4 w-full flex-shrink-0">
                  {images.slice(group * 3, group * 3 + 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Carousel Image ${group * 3 + index + 1}`}
                      className="h-64 w-full object-cover rounded"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            onClick={handlePrevSlide}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            onClick={handleNextSlide}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Static Content */}
          <div className="border border-gray-200 rounded p-4 bg-white">
            <h3 className="font-semibold">{content[language].dropdowns[0].title}</h3>
           
          </div>

          {/* Collapsible Dropdowns */}
          {content[language].dropdowns.slice(1).map((dropdown, index) => (
            <div key={index} className="relative border border-gray-200 rounded">
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleDropdown(index)}
              >
                <span className="font-semibold">{dropdown.title}</span>
                <i className={`fas fa-chevron-${activeDropdown === index ? 'up' : 'down'}`}></i>
              </button>
              <div
                className={`absolute bottom-full left-0 w-full bg-gray-50 border-t-2 rounded-t p-4 transition-all duration-300 ${
                  activeDropdown === index ? 'block' : 'hidden'
                }`}
              >
                <p>{dropdown.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
