import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Projects.css'


export default function Back() {
  return (
    <div>
        <Link to='/' className='back'> <FontAwesomeIcon  icon={faArrowLeft} /> </Link> 
    </div>
  )
}
