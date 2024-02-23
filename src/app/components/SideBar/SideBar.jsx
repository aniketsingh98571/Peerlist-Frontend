import React from 'react'
import Image from 'next/image'
import logo from '../../../assets/images/logo.svg'
import { sideBarList } from '@/data/sideBarList'
import avatar from '../../../assets/images/avatar.png'
import loom from '../../../assets/images/loom.png'
import Footer from './Footer'
const SideBar = () => {
  return (
    <aside className='w-full my-0 mx-auto py-5 box-border h-page-height relative '>
        <section className='mb-12'>
            <Image src={logo} alt="Peerlist" width={150} />
        </section>
        <section className='mb-12'> 
            <ul>
                {
                    sideBarList.map((navItem)=>{
                        return (
                            <li key={navItem.id} className='flex-container cursor-pointer group'>
                                <Image src={navItem.image} alt={navItem.name}/>
                                <span className={`${navItem.id===1?'font-semibold':""} side-child-hover`}>{navItem.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
        <section>
            <div className='flex-container group cursor-pointer'>
                <Image src={avatar} alt="yogini"/>
                <span className='side-child-hover'>Yogini</span>
            </div>
            <div className='flex-container group cursor-pointer'>
                <Image src={loom} alt="loom"/>
                <div className='side-child-hover'>
                    <p>Loom</p>
                    <p className='text-xs'>Manage jobs,teams & more &#8594;</p>
                </div>
            </div>
        </section>
        <Footer/>

    </aside>
  )
}

export default SideBar