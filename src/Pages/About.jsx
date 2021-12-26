import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Shared/Card'

function About() {
    return (
        <div>
            <Card>
                <div className="about">
                    <h1>about this project </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, animi aliquam ex labore provident reprehenderit dignissimos autem aut molestias optio, corporis tempore veritatis, deserunt eius assumenda quae unde quia? Voluptas?</p>
                    <p>version : 1.0.0</p>
                    <Link to='/'>
                    Back to the Home Page
                    </Link>
                   


                </div>
            </Card>
          
        </div>
    )
}

export default About
