import React from 'react'
import Quiz from './components/Quiz'
import Welcome from './components/Welcome'


export default function App() {
  const [gameStart , setGameStart] = React.useState(false)
  const [questionCount, setQuestionCount] = React.useState(10)

  function createNewGame() {
    setGameStart(!gameStart)
  }
  function handleQuestionCount (count) {
    setQuestionCount(count)
  }
  return (

    <main>
      {
        gameStart
        ?
          <Quiz questionCount={questionCount}/>
        :
         <Welcome handleClick={createNewGame} questionCount={questionCount} handleQuestionCount={handleQuestionCount}/>
      }  
    </main>
  )
}
