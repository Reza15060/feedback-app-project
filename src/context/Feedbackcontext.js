import { createContext,useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const Feedbackcontext = createContext()

export const Feedbackprovider = ({children})=>{
    const [feedback, setfeedback] = useState([
        {
            id: 1,
            text:'this is first feedback',
            rating : 10
        },
        {
            id: 2,
            text:'this is second feedback',
            rating : 9
        },
        {
            id: 3,
            text:'this is third feedback',
            rating : 8
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
      })






    const deletefeed = (id) => {
        setfeedback(feedback.filter((item) => item.id !== id))
      }

      const updateFeedback = async (id, updItem) => {
        setfeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
          )

      }
    

      const addfeedback = (newfeed) => {
        newfeed.id = uuidv4()
        setfeedback([newfeed, ...feedback])
      }

      const editfeedback = (item)=>{
        setFeedbackEdit(
        {    item,
            edit : true}
        )

         

      }

    return <Feedbackcontext.Provider value  = {{
        feedback,
        deletefeed,
        addfeedback,
        editfeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </Feedbackcontext.Provider>

}

export default Feedbackcontext

