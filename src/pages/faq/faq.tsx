import { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const FAQTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const QuestionContainer = styled.div`
  margin: 10px 0;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f9f9f9;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Answer = styled.div`
  margin: 5px 0 15px 0;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fafafa;
  animation: fadeIn 0.3s ease-in-out;
`;

const PlusMinusIcon = styled.span`
  font-size: 1.5rem;
`;

const FAQs = [
  {
    question: 'What is your return policy?',
    answer: 'Our return policy allows returns within 30 days of purchase.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping to most countries.',
  },
  {
    question: 'How can I track my order?',
    answer: 'You can track your order using the tracking link sent to your email.',
  },
  {
    question: 'How do I contact customer service?',
    answer: 'You can contact our customer service through our Contact Us page.',
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {FAQs.map((faq, index) => (
        <QuestionContainer key={index}>
          <Question onClick={() => toggleAnswer(index)}>
            {faq.question}
            <PlusMinusIcon>
              {activeIndex === index ? '-' : '+'}
            </PlusMinusIcon>
          </Question>
          {activeIndex === index && <Answer>{faq.answer}</Answer>}
        </QuestionContainer>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
