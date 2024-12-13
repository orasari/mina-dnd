import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '@/reducers/boardReducer'; 

const store = configureStore({
    reducer: {
        board: taskReducer
    }
});

export default store;
