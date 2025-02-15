import React,{useState} from 'react'
import QuestionaireCard from "../Components/QuestionaireCard"


const questions = [
    {
        id: 1,
        text: "Are you taking advantage of cloud computing to reduce infrastructure costs and increase agility?",
        type: "standard"
    },
    {
        id: 2,
        text: "Have you implemented automated testing in your development pipeline?",
        type: "standard"
    },
    {
        id: 3,
        text: "Is your team using agile methodologies effectively?",
        type: "standard"
    },
    {
        id: 4,
        text: "The Heart of Enterprise Solutions",
        subText: "Why it's All About People, Not Just Technology",
        type: "special"
    }
];

const Questionaire = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const handleAnswer = (answer) => {
        console.log(`Question ${currentStep}:`, answer);
        if (currentStep < questions.length) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    return (
        <section className='max-w-full min-h-screen px-12 flex flex-row items-center gap-20' >
            <div className='flex flex-col gap-9 w-1/2'>
                <h1 className='font-instrument-sans font-semibold text-8xl mt-5'>Answer a few questions to unlock Insights into</h1>
                <h3 className='font-instrument-serif italic text-6xl'>Innovation with AI and Cloud</h3>
            </div>
            <div >
            <QuestionaireCard
                key={currentStep}
                question={questions[currentStep - 1]}
                stepNumber={currentStep}
                totalSteps={questions.length}
                onAnswer={handleAnswer}
            />
        </div>
        
        </section>
    )
}

export default Questionaire



