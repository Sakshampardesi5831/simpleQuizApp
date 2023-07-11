import QuizApp from '@/components/QuizApp'
import React, { Fragment } from 'react'

const index = () => {
  return (
   <Fragment>
       <div className='mainPage'>
           <div className='mainHeading'>
              <h1>QUIZ APP</h1>
           </div>
          <QuizApp/>
       </div>
   </Fragment>
  )
}

export default index