import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  block1: {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  },
  block2: {
    items: ['Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'],
  },
};

const ContactUs = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list

    const sourceBlock = result.source.droppableId;
    const destinationBlock = result.destination.droppableId;

    if (sourceBlock === destinationBlock) {
      // Moving items within the same block
      const items = Array.from(data[sourceBlock].items);
      const [removed] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, removed);

      setData({
        ...data,
        [sourceBlock]: {
          items,
        },
      });
    } else {
      // Moving items between blocks
      const sourceItems = Array.from(data[sourceBlock].items);
      const destinationItems = Array.from(data[destinationBlock].items);

      const [removed] = sourceItems.splice(result.source.index, 1);
      destinationItems.splice(result.destination.index, 0, removed);

      setData({
        ...data,
        [sourceBlock]: {
          items: sourceItems,
        },
        [destinationBlock]: {
          items: destinationItems,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {Object.keys(data).map((blockId) => (
          <Droppable key={blockId} droppableId={blockId}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  width: '200px',
                  margin: '20px',
                  padding: '10px',
                  border: `1px solid ${snapshot.isDraggingOver ? 'blue' : '#ddd'}`,
                }}
              >
                <h3>{blockId}</h3>
                {data[blockId].items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: 'none',
                          padding: '16px',
                          margin: '0 0 8px 0',
                          backgroundColor: snapshot.isDragging ? '#f0f8ff' : '#fff',
                          border: `1px solid ${snapshot.isDragging ? 'green' : '#ddd'}`,
                          transform: snapshot.isDragging ? `translate(${snapshot.draggingOver ? '10px' : '0'}, 0)` : 'none',
                          opacity: snapshot.isDragging ? 0.8 : 1,
                          cursor: 'grab',
                          zIndex: snapshot.isDragging ? 2 : 'auto', // Set a higher z-index for the dragged item
                        }}
                      >
                        {item}
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
    </DragDropContext>
  );
};

export default ContactUs;
