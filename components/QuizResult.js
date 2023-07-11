import React, { Fragment } from 'react'

const QuizResult = (props) => {
  return (
   <Fragment>
    <div className='show-score' >
        Your Score:{props.score}<br />
        Total Score:{props.totalscore}
    </div>
    <button id='next-button' onClick={props.tryAgain} >Try Again</button>
   </Fragment>
  )
}

export default QuizResult