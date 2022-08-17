import { configureStore } from '@reduxjs/toolkit'

import filtersSlice from '../components/Filters/filtersSlice'
import todoListSlice from '../components/TodoList/todoListSlice'
const store = configureStore({
    reducer: {
        filters: filtersSlice,
        todoList: todoListSlice
    }
})

export default store
