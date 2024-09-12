import React from "react";

export default function(props) {
    return (
        <div className='game--start--screen'>
          <h1>Quizzical</h1>
          <form className='text-slate-500 bg-slate-200 px-10 py-10 rounded-lg shadow-xl'>
          <div className='flex flex-col text-center gap-3 items-center justify-center'>
          <label htmlFor={id + '-questionCount'}>Number of Questions</label>
          <input
            type='number'
            name='questionCount'
            id={id + '-questionCount'}
            value={props.questionCount}
            hidden
          />
          <output >
            <button type='button' onClick={() => props.handleQuestionCount(prevCount => prevCount - 1)}>-</button>
            {props.questionCount}
            <button type='button' onClick={() => props.handleQuestionCount(prevCount => prevCount + 1)}>+</button>
          </output>
        </div>
      </form>
          <button 
          className='game--start--button'
          onClick={props.handleClick}>Press the button to Start!</button>
        </div>
    )
}