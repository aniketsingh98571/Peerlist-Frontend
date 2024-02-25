import React from 'react'
import PostingTitle from './PostingTitle'
import DataLayout from './DataLayout/DataLayout'
const RightComponent = () => {
  return (
    <>
        <main className='w-full h-posting-height'>
            <PostingTitle/>
        </main>
        <main className='w-full h-drag-height'>
            <DataLayout/>
        </main>
    </>
  )
}

export default RightComponent