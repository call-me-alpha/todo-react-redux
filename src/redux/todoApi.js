import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:8000'

const getAllTodosServer = createAsyncThunk('todos/getAll', async () => {
    try {
        const res = await axios.get(`${URL}/todos`)
        const data = await res.data
        return data
    } catch (err) {
        console.log(err)
    }
})
const addTodoServer = createAsyncThunk('todos/addTodo', async (todo) => {
    try {
        const res = await axios.post(`${URL}/todos`, todo)
        const data = await res.data
        return data
    } catch (err) {
        console.log(err)
    }
})
const updateStatusTodoServer = createAsyncThunk('todos/updateTodo', async ({ id, todo }) => {
    try {
        const res = await axios.patch(`${URL}/todos/${id}`, todo)
        const data = await res.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
    }
})

export { getAllTodosServer, addTodoServer, updateStatusTodoServer }
