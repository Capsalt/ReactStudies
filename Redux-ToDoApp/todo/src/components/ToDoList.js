import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { toggle, destroy } from '../redux/todos/todosSlice';

const ToDoList = () => {

    const items = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    const handleDestroy = (id) => {
        if (window.confirm('Are you sure you want to destroy')) {
            dispatch(destroy(id));
        }

    }

    return (
        <ul className="todo-list">
            {
                items.map((item) => (
                    <li key={item.id} className={item.completed ? ' completed' : ''}>
                        <div className="view">
                            <input className="toggle"
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => dispatch(toggle({ id: item.id }))} />
                            <label>{item.title}</label>
                            <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}

export default ToDoList