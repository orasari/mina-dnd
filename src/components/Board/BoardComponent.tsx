import { GET_TASKS_AND_COLUMNS } from '@/graphql/tasksQueries';
import { setBoardData } from '@/reducers/boardReducer';
import { Board, Column, ColumnTitle, TaskCard } from './Board.styles';
import { BoardDataType, StoreType, TasksType, TaskType } from '@/Types/BoardTypes';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';


export default function BoardComponent() {
    const { data } = useQuery<BoardDataType>(GET_TASKS_AND_COLUMNS);
    const dispatch = useDispatch();
    const boardData: BoardDataType = useSelector((state: StoreType) => state.board);

    useEffect(() => {
        if (data && !boardData.tasks) {
            dispatch(setBoardData(data));
        }
    }, [data, boardData, dispatch]);

    if (!boardData.tasks) {
        return null;
    }

    const { tasks, columns } = boardData;

    const handleDragEnd = (result) => {
        const { source, destination } = result;
    
        if (!destination) return;
    
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }
    
        const startColumn = source.droppableId;
        const endColumn = destination.droppableId;
    
        const newTasks = { ...tasks };
    
        const startTasks = Array.from(newTasks[startColumn]);
        const task = startTasks[source.index];
    
        startTasks.splice(source.index, 1);
    
        if (startColumn === endColumn) {
            startTasks.splice(destination.index, 0, task);
            newTasks[startColumn] = startTasks;
        } else {
            const endTasks = Array.from(newTasks[endColumn]);
            endTasks.splice(destination.index, 0, task);
            newTasks[startColumn] = startTasks;
            newTasks[endColumn] = endTasks;
        }
    
        dispatch(setBoardData({ ...boardData, tasks: newTasks }));
    };
    

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Board>
                {columns.map((column) => (
                    <Droppable droppableId={column} key={column}>
                        {(provided) => (
                            <Column
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <ColumnTitle>{column.replace('_', ' ')}</ColumnTitle>
                                {tasks[column]?.map((task: TaskType, index: number) => (
                                    <Draggable
                                        key={task.id}
                                        draggableId={String(task.id)}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <TaskCard
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={{
                                                    ...provided.draggableProps.style,
                                                    backgroundColor: snapshot.isDragging ? '#e0f7fa' : 'white',
                                                    boxShadow: snapshot.isDragging
                                                        ? '0 2px 10px rgba(0,0,0,0.2)'
                                                        : 'none',
                                                }}
                                            >
                                                <h4>{task.name}</h4>
                                                <p>{task.description}</p>
                                            </TaskCard>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </Column>
                        )}
                    </Droppable>
                ))}
            </Board>
        </DragDropContext>
    );
}
