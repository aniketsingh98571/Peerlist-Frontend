"use client";
import React,{useState,useEffect} from 'react'
import search from '../../../../assets/images/search.png'
import Image from 'next/image'
import { mockData,lists } from '@/data/mockCandidateData'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from './Card';
const DataLayout = () => {
    const [elements, setElements] = useState(mockData);
    const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

const onDragEnd = (result) => {
    // Implement drag & drop logic
  }
  return (
    <section className='w-full'>
        <div className='flex items-center gap-2 my-4'>
            <Image src={search} alt="search" width={15} className='ml-11'/>
            <input type='input' placeholder='Search Candidates' className='w-4/5 py-2 box-border px-3 '/>
        </div>
        <div>
            {
                winReady?
        <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex px-10 box-border justify-between">
        {lists.map(list => (
          <Droppable droppableId={list.id} key={list.id}>
            {(provided) => (
              <div 
                className="w-card-width bg-posting-background"
                ref={provided.innerRef}
                { ...provided.dragHandleProps} 
                {...provided.droppableProps}
                
              >
                <div className={`${list.name==="APPLIED"?'bg-applied':list.name==='REJECTED'?'bg-rejected':'bg-shortlisted'} flex items-center p-2 rounded-tl-lg rounded-tr-lg gap-2`}>
                  <Image src={list.image} alt={list.name} width={18}/>
                  <span className={`text-sm ${list.name==="APPLIED"?'text-black-text':list.name==='REJECTED'?'text-red-text':'text-green-text'} font-bold`}>{list.name} • {elements[list.name].length}</span>
                </div>
                {elements[list.name].map((item, index) => (
            
                  <Draggable 
                    key={item.id}
                    draggableId={item.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card item={item}/>
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>:null
}
        </div>
    </section>
  )
}

export default DataLayout