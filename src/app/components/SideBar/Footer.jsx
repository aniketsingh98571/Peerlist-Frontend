import React from 'react'
import { footerList } from '@/data/sideBarList'
//Making a separate component for footer so that it can be reused
const Footer = () => {
  return (
    <footer className='absolute bottom-3'>
        <div>
            {
                footerList.map((item,index)=>{
                  return < > <span  key={index} className='text-footer-links font-semibold text-sm hover:underline cursor-pointer'>{item}</span> {index!==footerList.length-1?"•":""} </>
                })
            }
           {/* <span>Help Center</span> • <span>Feedback</span> • <span>Code of Conduct</span> • <span>Privacy</span> • <span>T&C</span> */}
       </div>
       <div>
            <p className='text-sm mt-2'> &copy; 2024 Peerlist Inc.</p>
       </div>
    </footer>
  )
}

export default Footer