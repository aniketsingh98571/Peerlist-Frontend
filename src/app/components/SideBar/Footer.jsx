import React from 'react'
import { footerList } from '@/data/sideBarList'
//Making a separate component for footer so that it can be reused
const Footer = () => {
  return (
    <footer className='absolute bottom-3 w-page-width '>
        <div>
            {
                footerList.map((item,index)=>{
                  return < > <span  key={index} className='text-footer-links font-semibold text-sm hover:underline cursor-pointer'>{item}</span> {index!==footerList.length-1?"•":""} </>
                })
            }
       </div>
       <div>
            <p className='text-sm mt-2'> &copy; 2024 Peerlist Inc.</p>
       </div>
    </footer>
  )
}

export default Footer