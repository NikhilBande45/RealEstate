import React, { useState } from "react";
import "./FAQ.css";



const faqData = [
  {
    question: "1.How does Osumare measure campaign success?",
    answer: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
  },
  {
    question: "2.How does Osumare measure campaign success?",
    answer: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
  },
  {
    question: "3.How does Osumare measure campaign success?",
    answer: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed, and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into how our strategies are driving growth for your brand.",
  },
];

const FAQItem = ({ question, answer, index, toggleFAQ, isActive }) => {
  return (
    <div className="faq-item">
      <div
        className={`question ${isActive ? "clicked" : ""}`}
        onClick={() => toggleFAQ(index)}
      >
        {question}
        <img 
          src={isActive ? '/FAQ_up.png' : '/FAQ_down.png'} 
          alt="arrow" 
          className="arrow" 
        />
      </div>
      {isActive && <div className="answer">{answer}</div>}
    </div>
  );
};
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
        <div className="faq-top-content">
            <h2>Frequently Asked Questions</h2>
            <p>Pinpoint your audience with precision, ensuring your marketing efforts reach those most likely to engage with your brand.</p>
        </div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            index={index}
            question={item.question}
            answer={item.answer}
            isActive={activeIndex === index}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
