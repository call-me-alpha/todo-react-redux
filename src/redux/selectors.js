import { createSelector } from '@reduxjs/toolkit'

const todoListSelector = (state) => state.todoList.todos
const searchFilterChange = (state) => state.filters.search
const statusFilterChange = (state) => state.filters.status
const prioritiesFilterChange = (state) => state.filters.priorities

const todosRematingSelector = createSelector(
    todoListSelector,
    searchFilterChange,
    statusFilterChange,
    prioritiesFilterChange,
    (todoList, searchText, status, priorities) =>
        todoList.filter((todo) => {
            if (status === 'All')
                return priorities.length
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText)
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            )
        })
)

export { todosRematingSelector }
