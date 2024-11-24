import React, { useState } from 'react';
import main from '../assets/section1.jpg';

const Section1 = ({ language }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const content = {
    en: {
     
      dropdowns: [
        {
          title: "General Guide",
          subItems: [
            "Visa Navigator",
            "Visa by Categories",
            "How to apply",
            "Application Form",
            "Visa Fees",
            "Entry & Stay",
            "Find a Diplomatic Mission",
          ],
        },
        {
          title: "Application",
          subItems: [
            "Confirmation of Visa Issuance",
            "e-Visa (Individual)",
            "e-Form (Visa)",
            "Work and Visit Visa Lottery",
            "Change of Passport Information",
            
          ],
        },
        {
          title: "Check Application Status",
          subItems: [
            "Check Application Status & Print",
            "Work and Visit Lottery Results",
            
          ],
        },
        {
          title: "Immigrant Investor",
          subItems: [
            "Public Business",
            "Tourism and Leisure Facility Investment Immigration System",
            "Global Talent Visa Center",
            "Financial Institution",
            "Notice",
            "FAQ",            
          ],
        },
        {
          title: "Korea Visa Application Center",
          subItems: [
            "KOICA",
                      
          ],
        },
        {
          title: "Help Center",
          subItems: [
            "Notice",
            "FAQ",
            "Archive",
            "How to Use Our Website",
            "Survey"                      
          ],
        },
        
      ],
    },
    kor: { 
      dropdowns: [
        {
          title: "메인 드롭다운 1",
          subItems: [
            "서브 항목 1.1",
            "서브 항목 1.2",
            "서브 항목 1.3",
            "서브 항목 1.4",
            "서브 항목 1.5",
            "서브 항목 1.6",
          ],
        },
        {
          title: "메인 드롭다운 2",
          subItems: [
            "서브 항목 2.1",
            "서브 항목 2.2",
            "서브 항목 2.3",
            "서브 항목 2.4",
            "서브 항목 2.5",
            "서브 항목 2.6",
          ],
        },
        {
          title: "메인 드롭다운 3",
          subItems: [
            "서브 항목 3.1",
            "서브 항목 3.2",
            "서브 항목 3.3",
            "서브 항목 3.4",
            "서브 항목 3.5",
            "서브 항목 3.6",
          ],
        },
      ],
    },
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <div className="h-full">
            <img
              src={main}
              alt="Section 1 Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Dropdowns */}
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg h-full">
            <h2 className="text-3xl font-bold mb-4 text-white text-left">
              {content[language].title}
            </h2>
            {content[language].dropdowns.map((dropdown, index) => (
              <div
                key={index}
                className={`mb-4 ${activeDropdown !== null && activeDropdown !== index ? 'hidden' : ''}`}
              >
                {/* Main Dropdown Button */}
                <button
                  className="w-full text-left  text-white p-2 rounded hover:bg-gray-600 focus:outline-none"
                  onClick={() => toggleDropdown(index)}
                >
                  {dropdown.title}
                </button>

                {/* Sub-items */}
                {activeDropdown === index && (
                  <div className="mt-2  rounded text-white p-2">
                    {dropdown.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="mb-2">
                        <span className="w-full text-right  hover:bg-gray-600 p-2 rounded focus:outline-none">
                          {subItem}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
