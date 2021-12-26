import React from 'react'
import Card from './Shared/Card'
import { Link,Routes,Route } from 'react-router-dom'


function Post() {
    return (
        <div>
            <h1>Posts a blog</h1>
            <Card>
            <Link to='/'>
                    Back to the Home Page
            </Link>
            </Card>
            <Routes>
            <Route path='/show' element={ <h1>show here</h1> } />
            </Routes>

            <Link to='./show' >show click</Link>


      
        </div>
    )
}

export default Post
