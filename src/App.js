import AddTodoItemComponent from "./component/AddTodoItemComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import ListTodoItemComponent from "./component/ListTodoItemComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListTodoItemComponent />} />
          <Route path="/todo-item" element={<ListTodoItemComponent />} />
          <Route path="/add-todo-item" element={<AddTodoItemComponent />} />
          <Route path="/add-todo-item/:id" element={<AddTodoItemComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
