import React from 'react'
import Card from './Card'

function Cardcontainer() {
  return (
    <div className='border border-black flex justify-center items-center min-h-screen'>
        <div className='grid grid-cols-3 gap-6 max-w-4xl'>
      <Card title="Title" body =" lkndsknnsdonosn"/> 
      <Card/> 
      <Card/> 
      <Card/> 
      <Card/>
      </div>
    </div>
  )
}

export default Cardcontainer
