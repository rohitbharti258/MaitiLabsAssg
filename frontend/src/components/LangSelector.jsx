import React, { useState } from "react";
import {LangData} from '../data/LangData'
const LangSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="h-auto md:block order-2 mx-auto placeholder-opacity-75 focus:outline-none p-[8px] text-base mt-[-10px]">
      <div className="border rounded-xl">
      <select
      className={isFocused?"rounded-lg":""} 
        id="languageSelect"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <option value="">Select Language</option>
        {LangData.map((item, index) => (
          <option key={index} value={item.value}>{item.name}</option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default LangSelector;
