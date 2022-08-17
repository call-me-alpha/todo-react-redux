import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'

import Todo from '../Todo'
// import { addTodo } from '../../redux/actions'
import { todosRematingSelector } from '../../redux/selectors'
// import { addTodo } from './todoListSlice'
import { getAllTodosServer, addTodoServer } from '../../redux/todoApi'

export default function TodoList() {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState('')
    const [priority, setPriority] = useState('Medium')
    const todoList = useSelector(todosRematingSelector)

    useEffect(() => {
        dispatch(getAllTodosServer())
        console.log('re-render')
    }, [dispatch])
    const handelAddTodo = () => {
        dispatch(
            addTodoServer({
                id: uuid(),
                name: todo,
                completed: false,
                priority
            })
        )
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <Select defaultValue="Medium" value={priority} onChange={(value) => setPriority(value)}>
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handelAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    )
}
