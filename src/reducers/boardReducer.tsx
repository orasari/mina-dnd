// redux/taskSlice.js
import { BoardDataType } from '@/Types/BoardTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: BoardDataType = {
    tasks: null,
    columns: null,
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setBoardData(state, action: PayloadAction<BoardDataType>) {
            return action.payload;
        }
    },
});

export const { setBoardData } = taskSlice.actions;

export default taskSlice.reducer;
