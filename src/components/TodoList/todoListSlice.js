import { createSlice } from '@reduxjs/toolkit'
import { getAllTodosServer, addTodoServer, updateStatusTodoServer } from '../../redux/todoApi'

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: {
        loading: false,
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        }
        // toggleTodoStatus: (state, action) => {
        //     const currTodo = state.todos.find((todo) => todo.id === action.payload)
        //     currTodo.completed = !currTodo.completed
        // }
    },
    extraReducers: (buider) => {
        buider
            .addCase(getAllTodosServer.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllTodosServer.fulfilled, (state, action) => {
                state.loading = false
                state.todos = action.payload
            })
            .addCase(addTodoServer.pending, (state, action) => {
                state.loading = true
            })
            .addCase(addTodoServer.fulfilled, (state, action) => {
                state.loading = false
                state.todos.push(action.payload)
            })
            .addCase(updateStatusTodoServer.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateStatusTodoServer.fulfilled, (state, action) => {
                console.log(action)
                state.loading = false
                let curTodo = state.todos.find((todo) => todo.id === action.payload.id)
                curTodo.completed = !curTodo.completed
            })
    }
})

export const { addTodo, toggleTodoStatus } = todoListSlice.actions
export default todoListSlice.reducer
