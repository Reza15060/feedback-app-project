import React from 'react'
import  { useContext } from 'react'
import Feedbackcontext from '../context/Feedbackcontext'


function Feedbackstats() {
    const {feedback}= useContext(Feedbackcontext)

    let average  = feedback.reduce((acc,cur)=>{
        return acc + cur.rating
    },0)/ feedback.length
    return (
        <div className='feedback-stats' >
            <h4>{feedback.length}</h4>
            <h2>ave rating : {isNaN(average)? 0 : average}</h2>
     
          
        </div>
    )
}

export default Feedbackstats
