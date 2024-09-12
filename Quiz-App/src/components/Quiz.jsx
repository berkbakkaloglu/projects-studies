import React from "react";
import fetchQuizData from '../services/quizApi'

export default function Quiz(props) {
    const [question , setQuestion] = React.useState([])
    const [userAnswer, setUserAnswer] = React.useState([])
    const [isQuizSubmitted , setIsQuizSubmitted] = React.useState(false)
    
    React.useEffect(() => {
        if (!isQuizSubmitted) {
            fetchQuizData(props.questionCount)
                .then(data => setQuestion(data))
        }
    },[isQuizSubmitted])

    
    
    return (
        <div className="question">
            <h2>How would one say goodbye in Spanish?</h2>
            <div className="answers">
                <button className="answer-btn">11</button>
                <button className="answer-btn">Hola</button>
                <button className="answer-btn">Au Revoir</button>
                <button className="answer-btn">Salir</button>
            </div>
        </div>
    )
}

/*
{type: 'multiple', difficulty: 'medium', category: 'Entertainment: Comics', question: 'In the DC Comics 2016 reboot, Rebirth, which speed…ed Force after he had been erased from existance?', correct_answer: 'Wally West', …}
category
: 
"Entertainment: Comics"
correct_answer
: 
"Wally West"
difficulty
: 
"medium"
incorrect_answers
: 
(3) ['Johnny Quick', 'Jay Garrick', 'Eobard Thawne']
question
: 
"In the DC Comics 2016 reboot, Rebirth, which speedster escaped from the Speed Force after he had been erased from existance?"
type
: 
"multiple"
*/