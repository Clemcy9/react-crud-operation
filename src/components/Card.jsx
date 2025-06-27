import React from 'react'

function Card() {
  return (
    <div className='mt-5 w-72 flex flex-col justify-center items-center rounded bg-gray-300 '>
        <div className='border mt-5 '>
            <img src="https://picsum.photos/200" alt="" />
        </div>

        <div className=''>
        <h2 className='p4 text-center '> Title</h2>
        <p className=' p-4'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Dolor cumque quibusdam reiciendis optio facere doloribus 
            minus mollitia eaque earum obcaecati, 
            sed rem reprehenderit odio hic dolore expedita provident illum sint?</p>
            </div>
    </div>
  )
}

export default Card