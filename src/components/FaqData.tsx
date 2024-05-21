import FAQ from './FAQ';

const FaqData = () => {

    const faqData = [
        {
          question: "Can i vote a new candidate after voting another candidate?",
          answer: "You can only vote once for a particul."
        },
        {
          question: "What is Tailwind CSS?",
          answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
        },
        {
          question: "How does useState work?",
          answer: "useState is a Hook that allows you to have state variables in functional components."
        }
    ];

    return (
        <>
            {faqData.map((faq, index) => {
                return <FAQ key={index} question={faq.question} answer={faq.answer} />
            })}
        </>
    )
  
  
}

export default FaqData
