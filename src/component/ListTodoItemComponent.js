import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TodoItemService from '../service/TodoItemService';

const ListTodoItemComponent = () => {
    const [todoItemArray, setTodoItemArray] = useState([]);

    useEffect(() => {
        getAllTodoItems();
    }, []);

    function getAllTodoItems() {
        TodoItemService.getAllTodoItems()
            .then(res => { setTodoItemArray(res.data); console.log(res) })
            .catch(e => console.log(e));
    }
    function deleteTodoItem(e, id) {
        e.preventDefault()
        TodoItemService.deleteTodoItem(id).then(getAllTodoItems()).catch(e => console.log(e));
    }


    return (
        <div className='container'>
            <Link to={"/add-todo-item"} className='btn btn-warning mb-2 mt-3' href="">Click Here to Add New Todo Item</Link>
            <h2 className='text-center mb-4'>To Do List For Today</h2>
            {/* <table className='table table-bordered table striped'> */}
            <table className='table table-bordered table striped'>
                <thead>
                    <th>Todo Number</th>
                    <th>Task Name</th>
                    <th>Overview</th>
                    <th>Extra Notes</th>
                    <th>Manage Task</th>
                </thead>
                <tbody>
                    {todoItemArray.map(todoItem =>
                        <tr id={todoItem.id}>
                            <td>{todoItem.id}</td>
                            <td>{todoItem.task}</td>
                            <td>{todoItem.overview}</td>
                            <td>{todoItem.notes}</td>
                            <td>
                                <Link to={`/add-todo-item/${todoItem.id}`} className='btn btn-success' href="">Update</Link> {" "}
                                <a onClick={(e) => deleteTodoItem(e, todoItem.id)} className='btn btn-danger'>Delete</a>
                            </td>
                        </tr>)}

                </tbody>
            </table>
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default ListTodoItemComponent