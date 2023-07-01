import axios from "axios";

const BASE_URL = "http://13.49.44.135:8080/todo-item";
class TodoItemService {
  getAllTodoItems() {
    return axios.get(BASE_URL);
  }
  saveTodoItem(todoItemData) {
    return axios.post(BASE_URL, todoItemData);
  }
  updateTodoItem(id, todoItemData) {
    return axios.put(`${BASE_URL}/${id}`, todoItemData);
  }
  getTodoItemById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }
  deleteTodoItem(id) {
    return axios.delete(BASE_URL + "/" + id);
  }
}
export default new TodoItemService();
