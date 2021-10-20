import { write } from 'fs';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {v4 as uuid} from 'uuid';
import Icon from '../../assets/drag-icon.png';
import Footer from '../Footer/Footer';
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator';

const ballotStyles = {
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'left',
  fontFamily: '"IBM Plex Mono", monospace'
}

const columnStyles = {
  display: 'flex',
  justifyContent: 'left',
  height: '100%',
  marginTop: '5%',
  padding: 'auto',


}
/* <div

style={{
  userSelect: 'none',
  padding: 16,
  paddingLeft: 0,
  height: '12px',
  width: '400px',
  borderBottom: '1px lightgray solid',

  color: 'black',

}}
>
<span style={{position: 'absolute'}}>CANDIDATES</span>
</div> */

const itemsFromBackend = [
  { id: uuid(), content: 'Eric L. Adams' },
  { id: uuid(), content: 'Maya D. Wiley' },
  { id: uuid(), content: 'Kathryn A. Garcia' },
  { id: uuid(), content: 'Andrew Yang' },
  { id: uuid(), content: 'Scott M. Stringer' },
  { id: uuid(), content: 'Dianne Morales' },
  { id: uuid(), content: 'Raymond J. McGuire' },
  { id: uuid(), content: 'Shaun Donovan' },
  { id: uuid(), content: 'Aaron S. Foldenauer' },
  { id: uuid(), content: 'Art Chang' },
  { id: uuid(), content: 'Paperboy Love Prince' },
  { id: uuid(), content: 'Joycelyn Taylor' },
  { id: uuid(), content: 'Isaac Wright Jr.' },
  { id: uuid(), content: 'WRITE-IN', value: '' }
];

const writeIn = itemsFromBackend[itemsFromBackend.length-1]; //access to write-in candidate



const columnsFromBackend =  {
    [uuid()]: {
      name: 'CANDIDATES',
      items: itemsFromBackend
    },
    [uuid()]: {
      name: 'YOUR BALLOT',
      items: []
    }
  };

const onDragEnd = (result, columns, setColumns) => {

  const { source, destination } = result;

  const ballotColId = Object.keys(columnsFromBackend)[1];

  if(!result.destination || 

    (result.destination.droppableId === ballotColId && columns[destination.droppableId].items.length >=5)
    
    )return;
    
  if (result.draggableId === writeIn.id && writeIn.value === '' ) return//can't add write-in candidate unless they actually write something in -Chase

    
  console.log(writeIn.value)    



  if(source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
  const column = columns[source.droppableId];
  const copiedItems = [...column.items];
  const [removed] = copiedItems.splice(source.index, 1);
  copiedItems.splice(destination.index, 0, removed);
  setColumns({
    ...columns,
    [source.droppableId]: {
      ...column,
      items: copiedItems
    }
  });
  }
  
  

}



const Ballot = () => {

  /* Write-In State Data */
  const [writeInData,setWriteInData] = useState({
    candidate:'',
  })

  /* Write-In State Change */
  const writeInStateChange = (event) => {
  const {name, value} = event.target;
        setWriteInData(prevState=>({
      ...prevState,
    candidate: value,
  }));
  writeIn.value = writeInData.candidate

  console.log(writeIn)
  console.log(writeInData)
  }


  const [columns, setColumns] = useState(columnsFromBackend);

  return(
  <div style = {ballotStyles}>
    <ProgressIndicator completed="10" />
    
    <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
      {Object.entries(columns).map(([id, column]) => {

        return (
          
          <div style={columnStyles}>

            
          <div style={{margin: '20px'}}>

          <div style={{
              userSelect: 'none',
              
              padding: 16,
              height: '12px',
              paddingLeft: 0,
              borderBottom: '1px lightgray solid',
              marginLeft:'0px',
              width: '400px',
              color: 'black',
          }}
>
            <span style={{position: 'absolute'}}>{column.name}</span>
          </div>

          <Droppable droppableId={id} key={id}>
            {(provided, snapshot) => {
              return (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? 'white' : 'white', //colors
                  padding: 4,
                  height: '650px',
                  width: '432px'
                }}
                >

                  {column.items.map((item, index) => {
                    return(
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                userSelect: 'none',
                                padding: 16,
                                paddingLeft: 0,
                                height: '12px',
                                width: '400px',
                                borderBottom: '1px lightgray solid',
                                backgroundColor: snapshot.isDragging ? '#FFFFFF80' : 'white',
                                opacity: snapshot.isDragging ? '.5' : '1',
                                color: 'black',
                                ...provided.draggableProps.style
                              }}
                            >

                              {column.name === 'YOUR BALLOT' ? <span style = { {paddingRight: '29px'}}>{index+1}.</span> : ''}
                              {item.content==='WRITE-IN' ? (<input id='writeInForm' onChange = {writeInStateChange} style={{position: 'absolute', cursor:'text'}} placeholder='WRITE-IN' value={writeInData.candidate}/>) : (<span style={{position: 'absolute'}}>{item.content}</span>)}
                              
                              <img src={Icon} style={{ marginLeft: 'auto', height: '10px', marginTop: '1px', marginRight:'-8px', marginBottom: '1px',float:'right' }}/>
                            </div>
                          )
                        }}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
          </div>
          </div>
        );
      })}
    </DragDropContext>

    <Footer page={'create'}  ></Footer>

  </div>
  );
};



Ballot.propTypes = {};

Ballot.defaultProps = {};


export default Ballot;
