import React from 'react'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center iter-center flex-col'>
      <img 
        src={imgURL} 
        alt="customer"
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p>{feedback}</p>
      <div>
        <img 
          src= alt="" />
      </div>
    </div>
  )
}

export default ReviewCard