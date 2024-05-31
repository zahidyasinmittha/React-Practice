import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    let { id } = useParams()
  return (
    <div className='flex text-6xl font-extrabold justify-center m-10'>User:{id} </div>
  )
}

export default User