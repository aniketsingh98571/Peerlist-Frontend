import React from 'react'
import PostingTitle from './PostingTitle'
import DataLayout from './DataLayout/DataLayout'
const RightComponent = () => {
  return (
    <>
        <main className='w-full'>
            <PostingTitle/>
        </main>
        <main className='w-full'>
            <DataLayout/>
        </main>
    </>
  )
}

export default RightComponent