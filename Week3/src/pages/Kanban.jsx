import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

const initialTasks = {
  todo: ['Task 1', 'Task 2'],
  inProgress: ['Task 3'],
  done: ['Task 4'],
};

export function Kanban() {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceList = [...tasks[source.droppableId]];
    const [movedItem] = sourceList.splice(source.index, 1);
    const destList = [...tasks[destination.droppableId]];
    destList.splice(destination.index, 0, movedItem);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceList,
      [destination.droppableId]: destList,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(tasks).map(([columnId, items]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div
                  className="bg-white dark:bg-gray-800 p-4 rounded shadow"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3 className="text-lg font-semibold capitalize mb-2">{columnId}</h3>
                  {items.map((item, index) => (
                    <Draggable key={item} draggableId={item} index={index}>
                      {(provided) => (
                        <div
                          className="bg-gray-100 dark:bg-gray-700 p-2 rounded mb-2"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
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
    </div>
  );
}
