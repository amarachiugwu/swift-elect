import React, { useRef, useState } from 'react'
import { PlusIcon } from '../icon';

type FaqProps = {
    question: string;
    answer:string;
}

const FAQ: React.FC<FaqProps> = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null)

    const toggleFaq = () => setIsOpen(!isOpen)

  return (
    <div className='w-full mx-auto pt-4 text-neutral-12'>

        <div ref={contentRef}  className='bg-neutral-01 p-6 rounded-lg'>
            <div className="flex justify-between item-center">
                <p className='font-medium text-xl'>{question}</p>
                <span onClick={() => toggleFaq()}><PlusIcon /></span>
            </div>
            {isOpen && <div>
                {answer}
            </div>}
        </div>        
    </div>
  )
}

export default FAQ
