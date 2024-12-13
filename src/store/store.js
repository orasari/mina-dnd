import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '@/reducers/boardReducer'; 

const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
});

export default store;
