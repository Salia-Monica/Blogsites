import React from 'react'
import { useNavigate } from 'react-router-dom'
import withLayout from './withLayout'

function Home () {
  const navigate = useNavigate()
  return (
   <div>
   <div className='banner'>
   <h1>welcome to my webpage</h1>
   <p>my first webpage was a fantastic work and eveyone was
    happy to have acceses to import PropTypes from 'prop-types'</p>
    <div className='action-wrap'>
    <button className='btn-outline' onClick={()=>navigate("./about")}> About Me </button>
    <button className='btn-contain' onClick={()=>navigate("./blog")}> Read Blog </button>

    </div>

   </div>

   </div>
  )
}

export default withLayout(Home)
