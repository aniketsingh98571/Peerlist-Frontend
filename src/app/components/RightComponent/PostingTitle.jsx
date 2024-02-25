import React from 'react'
import peerlist from '../../../assets/images/peerlist.png'
import tools from '../../../assets/images/tools.png'
import avatar from '../../../assets/images/avatar.png'
import arrow from '../../../assets/images/arrow.png'
import Image from 'next/image'
const PostingTitle = () => {
  return (
    <main className='bg-posting-background w-full h-full p-5 box-border flex justify-between  flex-direction-change'>
        <section className='flex'>
            <div>
                <Image src={peerlist} alt="peerliset"/>
            </div>
            <div className='mt-2'>
                <div>
                    <p className='flex text-black-text font-semibold items-center gap-1'>
                        Software Engineer, Frontend
                        <Image src={arrow} alt="arrow"/>
                    </p>
                    <p className='text-black-text text-sm'>at Peerlist • Full time • Remote (United States, Canada)</p>
                </div>
                <div className='flex mt-7'>
                   <p className='text-sm mr-3'>
                        <span className='font-semibold'> 78 </span>
                        Candidates 
                   </p>
                   <p className='text-sm mr-3'>
                        <span className='font-semibold'> 68 </span>
                        Applied w/ Peerlist 
                   </p>
                   <p className='text-sm mr-3'>
                        <span className='font-semibold'> 2872 </span>
                        Views
                   </p>
                </div>
            </div>
        </section>
        <section className='mt-2  margin-left'>
            <div>
                <Image src={tools} alt="tools"/>
            </div>
            <div>
                <p className='flex gap-1 items-center text-xs  mt-11'> 
                    <span className='text-grey-text'> Posted </span>
                    <span className='font-semibold'> 1d ago  </span>
                    <span className='text-grey-text'>  by </span>
                    <Image src={avatar} alt="avatar"/>
                    <span className='font-semibold'> Yogini Bende </span>
                </p>
            </div>
        </section>
    </main>
  )
}

export default PostingTitle


/* Header */


