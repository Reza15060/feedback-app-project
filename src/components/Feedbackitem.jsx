import { FaTimes, FaEdit } from 'react-icons/fa'
import { useState } from "react"
import Card from './Shared/Card'
import  { useContext } from 'react'
import Feedbackcontext from '../context/Feedbackcontext'



function Feedbackitem({item}) {
    const { deletefeed,editfeedback  } = useContext(Feedbackcontext)

    return (
        <div>
           <Card  >
                <div className="num-display">{ item.rating}</div>
                <button className="close" onClick={()=>deletefeed(item.id)} >
                    <FaTimes color='green' />
                </button>
                <button className="edit" onClick={()=>editfeedback(item)} >
                <FaEdit color='purple' /> 
                </button>
                <div className="text-display">{item.text}</div>
           </Card>
        </div>
    )
}

export default Feedbackitem
