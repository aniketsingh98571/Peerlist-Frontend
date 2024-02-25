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
  
    // Check that a destination is provided before proceeding
    if(!result.destination){
      return
    }
    console.log(result)
    
  const { source, destination } = result;

  // Dragging from one list to another
  if(source.droppableId !== destination.droppableId) {

     // Get source and destination list details
    const sourceList = lists.find(list => list.id === source.droppableId);
    const destList = lists.find(list => list.id === destination.droppableId);

       // Get item arrays from state
    const sourceItems = elements[sourceList.name];
    const destItems = elements[destList.name];

    // Get reference to dragged item
    const draggedItem = sourceItems[source.index];
     // Remove item from source array
    const [removed] = sourceItems.splice(source.index, 1);

    // Update status based on destination list
    if(destList.name === "APPLIED") {
      draggedItem.status = "applied";
    } else if (destList.name === "REJECTED") {
        draggedItem.status = "rejected";
    } else {
        draggedItem.status = "shortlisted";
    }
    
    // Insert updated item into destination array
    destItems.splice(destination.index, 0, draggedItem);

    setElements({
        ...elements,
        [sourceList.name]: sourceItems,
        [destList.name]: destItems
    });
  } else {
    // Reordering in same list
    const list = lists.find(list => list.id === source.droppableId);
    const items = mockData[list.name];

    const [removed] = items.splice(source.index, 1);
    items.splice(destination.index, 0, removed);

    setElements({
      ...elements,
      [list.name]: items  
    });
  }
  }
  const searchCandidates = (query) => {

    const lowerQuery = query.toLowerCase();
    // Use reduce to transform original data into filtered data
    const results = Object.keys(elements).reduce((acc, listName) => {
    
      // Get current list data (Applied, Rejected etc) 
      const list = mockData[listName];
    
      // Filter list based on search criteria  
      const filteredList = list.filter(item => {
        const searchValues = [
          item.name.toLowerCase(), 
          item.bio.toLowerCase(),
          item.mobile, 
          item.email.toLowerCase()  
        ];
  
        return searchValues.some(value => 
          value.includes(lowerQuery)
        );
  
      });
  
      return {
        ...acc,
        [listName]: filteredList  
      }
  
      // Initial value is empty object to accumulate lists into 
    }, {});
  
    return results;
  
  };
  
  
  
  
  const searchHandler=(e)=>{
    const query = e.target.value;
    console.log(query)

    // Filter candidates
    const results = searchCandidates(query);
    setElements(results)
  }
  return (
    <section className='w-full h-full'>
        <div className='flex items-center gap-2 py-4 box-border'>
            <Image src={search} alt="search" width={15} className='ml-11'/>
            <input type='input' onChange={searchHandler} placeholder='Search Candidates' className='w-4/5 py-2 box-border px-3 '/>
        </div>
        <div className='h-drag-height'>
            {
                winReady?
        <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex px-10 box-border justify-between h-full  flex-direction-change">
        {lists.map(list => (
          <Droppable droppableId={list.id} key={list.id}>
            {(provided) => (
              <div 
                className="w-card-width bg-posting-background h-full"
                ref={provided.innerRef}
                { ...provided.dragHandleProps} 
                {...provided.droppableProps}
                
              >
                <div className={`${list.name==="APPLIED"?'bg-applied':list.name==='REJECTED'?'bg-rejected':'bg-shortlisted'} flex items-center p-2 rounded-tl-lg rounded-tr-lg gap-2`}>
                  <Image src={list.image} alt={list.name} width={18}/>
                  <span className={`text-sm ${list.name==="APPLIED"?'text-black-text':list.name==='REJECTED'?'text-red-text':'text-green-text'} font-bold`}>{list.name} • {elements[list.name].length}</span>
                </div>
                <div className='max-h-full overflow-auto'>
                  {elements[list.name].map((item, index) => (
                    <div key={item.id}>
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
                          <Card key={item.id} item={item}/>
                        </div>
                      )}
                    </Draggable>
                    </div>
                  ))}
              </div>
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