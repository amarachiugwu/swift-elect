import { useState } from 'react';
import FAQ from './FAQ';

const FaqData = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);


    const faqData = [
        {
          question: "Can i vote a new candidate after voting another candidate?",
          answer: "You can only vote once for a particular election."
        },
        {
          question: "What happens if there are technical issues during the voting process?",
          answer: "Technical issues will be resolve, in a case of incompleted voting you will be able to vote again."
        },
        {
          question: "Can I change my vote after submission?",
          answer: "No you cannot change your vote."
        },
        {
          question: "How can I verify that my vote was counted?",
          answer: "Votes are updated in real-time."
        }
    ];
      const handleToggle = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
      };

    return (
        <>
            {faqData.map((faq, index) => {
                return <FAQ key={index} question={faq.question} answer={faq.answer} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
            })}
        </>
    )
}

export default FaqData
