import React, { useState, useEffect } from 'react'
import TodoItemService from '../service/TodoItemService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddTodoItemComponent = () => {
    const [task, setTask] = useState('');
    const [overview, setOverview] = useState('');
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const todoItemData = { task, overview, notes };

    function saveTodoItem(e) {
        e.preventDefault();

        if (todoItemData.task !== "" && todoItemData.overview !== "" && todoItemData.notes != "") {
            if (id) {
                TodoItemService.updateTodoItem(id, todoItemData)
                    .then(navigate("/todo-item"))
                    .catch(e => console.log(e));
            } else {
                TodoItemService.saveTodoItem(todoItemData)
                    .then(navigate("/todo-item"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please Note! All inputs required!");
        }
    }

    function tile() {
        if (id) {
            return "Update TodoItem";
        } else {
            return "Add TodoItem";
        }
    }
    useEffect(() => {
        if (id) {
            TodoItemService.getTodoItemById(id)
                .then(res => {
                    setTask(res.data.task);
                    setOverview(res.data.overview);
                    setNotes(res.data.notes);
                })
                .catch(e => console.log(e));
        }
    }, []);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{tile()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)}
                                        type="text" placeholder='Add Task Details' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={overview}
                                        onChange={(e) => setOverview(e.target.value)}
                                        type="text" placeholder='Add Overview Details' />
                                </div>
                                <div className='form-group mb-2'>
                                    <input className='form-control'
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        type="notes" placeholder='Add Notes' />
                                </div>
                                <button onClick={(e) => saveTodoItem(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/todo-item"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodoItemComponent