import React from 'react';

const Section3 = ({ language }) => {
  const content = {
    en: {
      title1: 'VISA APPLICATION',
      title2: 'KOREA TODAY',
      info: [
        { title: 'Visa Announcement', description: '2025 Global Korea Scholarship Undergraduate Degree Program (GKS-U) First Round Result [Embassy Track] The Embassy is thrilled to announce that the 2025 Global Korea Scholarship Undergraduate Degree Program (GKS-U) has concluded....' },
        { title: 'Visa Requirement', description: 'Ambassador Lee wrote an article titled Korea and the Philippines on the cusp of a new chapter on Philstar Ambassador Lee wrote an article titled Korea and the Philippines on the cusp of a new chapter on Philstar...' },
        { title: 'Notice', description: 'Notice on Extension re: Simplification of Visa Application Requirements(until Dec.31,2025) The Embassy of the Republic of Korea in the Philippines wishes to inform you on the extension of simplification of visa application...' },
        { title: 'News', description: 'C-3(Short Term Visit)Visa Requirements for Adopted Minor Child of Filipino Spouse C-3(Short Term Visit)Visa Requirements for Adopted Minor Child of Filipino Spouse Applicable for minor child of Filipino spouse who is NOT a biological child of Korean spouse who has already been adopted by the Korean spouse Korea and the Philippines on the cusp of a new chapter...' },
      ],
    },
    kor: {
      title: '',
      info: [

        { title: '정보 1', description: '여기에 일부 정보가 있습니다.' },
        { title: '정보 2', description: '여기에 더 많은 정보가 있습니다.' },
        { title: '정보 3', description: '추가 정보.' },
        { title: '정보 4', description: '여기에 더 자세한 내용이 있습니다.' },
      ],
    },
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">


        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">

          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">

            <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title1}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content[language].info.slice(0, 2).map((item, index) => (
                <div key={index} className="bg-gray-200 p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-300">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title2}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content[language].info.slice(2, 4).map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-4 rounded transition-transform transform hover:scale-105 hover:bg-gray-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;

