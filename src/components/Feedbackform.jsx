import React, { useState,useContext,useEffect } from 'react'
import Ratingselect from './Ratingselect'
import Button from './Shared/Button'
import Card from './Shared/Card'
import Feedbackcontext from '../context/Feedbackcontext'
import { v4 as uuidv4 } from 'uuid'

function Feedbackform() {

const [text,settext]= useState('')
const [rating,setrating]= useState()

const [btndisable,setbtndisable]= useState(true)
const [message,setmessage]= useState('')


const {addfeedback,feedbackEdit,updateFeedback }= useContext(Feedbackcontext)

useEffect(() => {
    if (feedbackEdit.edit === true) {
        setbtndisable(false)
        settext(feedbackEdit.item.text)
        setrating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])






const handleTextChange = (e)=>{
    if (text === ''  ) {
        setbtndisable(true)
        setmessage(null)
    }else if ( text !== '' && text.trim().length < 8 ) {
        setbtndisable(true)
        setmessage('put at least 8 letter')
        
    } else {
        setbtndisable(false)
        setmessage(null)
        
    }

    settext(e.target.value)
    
}

const handleSubmit =(e)=>{
  e.preventDefault()
  const newfeed  = {
      text,rating
  }
  if (feedbackEdit.edit === true) {
    updateFeedback(feedbackEdit.item.id, newfeed)
  } else {
    addfeedback(newfeed)
  }
  settext('')
}

    return (
    <Card>
        <form onSubmit={handleSubmit} >
        <h2>How would you rate your service with us?</h2>
        <Ratingselect select = {(rating)=> setrating(rating) } />
        <div className="input-group">
        <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />

         <Button type='submit' version='secondary' isDisabled={btndisable}   >Send</Button>

       
        </div>
        {message && <div className='message' >{message}</div> }
        </form>
 
    </Card>
    )
}

export default Feedbackform
