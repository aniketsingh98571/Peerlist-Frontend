import React from 'react'
import Image from 'next/image'
import verified from '../../../../assets/images/verified.png'
import minus from '../../../../assets/images/minus.png'
import tick from '../../../../assets/images/tick.png'
const Card = ({item,index}) => {
  return (
    <div className='w-11/12 mx-auto my-2 bg-white p-3 box-border rounded-lg'>
      <div className='flex justify-between mb-2 '>
        <Image src={item.image} alt={item.name}/>
        <p className='small-text'>Applied {item.applied} ago</p>
      </div>
      <div className='flex items-center'>
        <p className='main-title'>{item.name}</p>
        <Image src={verified} alt="verified"/>
      </div>
      <div className='mb-2'>
        <p className='text-sm'>{item.bio}</p>
      </div>
      {
        item.status!=="rejected"?
      <>
        <div className='flex justify-between mb-2'>
          <div>
            <p className='small-text'>Experience</p>
            <p className='main-title'>{item.experience}</p>
          </div>
          <div>
            <p className='small-text'>Holding offer?</p>
            <p className='main-title'>{item.offer}</p>
          </div>
          <div>
            <p className='small-text'>Notice period</p>
            <p className='main-title'>{item.notice}</p>
          </div>
        </div>
        {
          item.status!=="shortlisted"?
        <div>
          <p className='small-text'>Contact</p>
          <p className='main-title'>{item.email}</p>
          <p className='main-title'>{item.mobile}</p>
        </div>:
        <div className='flex items-center gap-1'>
          <Image src={tick} alt="tick"/>
          <p className='small-text'>Shortlisted by <span className='font-bold'>Yogini Bende</span> on 15 Dec 2023</p>
        </div>
        }
      </>:
      <div className='flex items-center gap-1'>
        <Image src={minus} alt="minus"/>
        <p className='small-text'>Rejected by <span className='font-bold'>Yogini Bende</span> on 15 Dec 2023</p>
      </div>
   }
    </div>
  )
}

export default Card


