import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Aboutlink() {
    return (
        <div className='about-link'>
      <Link to='/about' exact>
        <FaQuestion size={30} />
      </Link>
      <Link to='/post' exact>
       Click
      </Link>

    </div>
    )
}

export default Aboutlink
