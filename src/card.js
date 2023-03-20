import React, { useState } from 'react'


const questions = [
    {
        questionText: 'What is the capital of France?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Dublin', isCorrect: false },
        ],
    },
    {
        questionText: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        questionText: 'The iPhone was created by which company?',
        answerOptions: [
            { answerText: 'Apple', isCorrect: true },
            { answerText: 'Intel', isCorrect: false },
            { answerText: 'Amazon', isCorrect: false },
            { answerText: 'Microsoft', isCorrect: false },
        ],
    },
    {
        questionText: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
];



function Card() {
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    
    function next(e) {
        if (e.isCorrect) {
            setScore(score + 1);
        }

        if (count < questions.length - 1) {
            setCurrentQuestion(questions[count + 1]);
            setCount(count + 1);
        } else {
            alert(`Quiz finished! Your score is ${score} out of ${questions.length}`);
            setCount(0)
        }
    }

    

    return (
        <div className='card'>
            <span className='question'>
                <h1>Question {count + 1}</h1>
                <p>{currentQuestion.questionText}</p>
            </span>
            <span className='answer'>

                {currentQuestion.answerOptions.map((e) => (
                    <button onClick={() => next(e)}>{e.answerText}</button>
                ))}

            </span>
        </div>
    )
}

export default Card;
