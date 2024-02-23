"use client";
import React,{useState,useEffect} from 'react'
import search from '../../../../assets/images/search.png'
import Image from 'next/image'
import { mockData,lists } from '@/data/mockCandidateData'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
      <div className="flex">
        {lists.map(list => (
          <Droppable droppableId={list}>
            {(provided) => (
              <div 
                className="bg-gray-100 p-4 mr-4 text-center flex-1"
                ref={provided.innerRef}
                { ...provided.dragHandleProps} 
                {...provided.droppableProps}
              >
                <h2 className="text-lg font-bold mb-4">{list}</h2>
                  
                {elements[list].map((item, index) => (
            
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
                        {item.name}
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