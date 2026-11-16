import moment from "moment";
import md5 from "md5";
import Navigo from "navigo";
import { getHeader } from "./components/header";
import type { Todo } from "./types/todo.type";

const app = document.querySelector('#app');
if (app) {
  app.innerHTML = `
  ${getHeader()}
  <form>
  <input placeholder="Nhập gì đó..."/>
  <button>Submit</button>
  </form>
  <h1>Hello anh em</h1>
  <div id="todo-list"></div>
  ${moment().format('DD/MM/YYYY HH:mm:ss')}
  <p>${md5('123456')}</p>
  `;

  const form = document.querySelector('form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const value = input?.value;
    console.log(value);
  });

  // const renderTodoList = (data: Todo[]) => {
  //   const todoList = document.querySelector('#todo-list');
  //   todoList!.innerHTML = data.map(item => `<h3>${item.title}</h3>`).join('')
  // }
  // const getTodoList = async () => {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  //   const data = await response.json();
  //   renderTodoList(data);
  // }

  // getTodoList();

  const getTodoList = async (): Promise<Todo[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    return response.json();
  }

  const renderTodo = async () => {
    const data = await getTodoList();
    const todoList = document.querySelector('#todo-list');
    todoList!.innerHTML = data.map((item) => `<h3>${item.title}</h3>`).join('')

    // data.forEach((item) => {
    //   console.log(item);
    // })
  }

  renderTodo();
}

const router = new Navigo('/');
router.on('/san-pham', () => {
  console.log('Sản phẩm');
})
router.on('/san-pham/:id', (value) => {
  if (value) {
    const { data } = value
    console.log('Sản phẩm');
    console.log(data);
  }
})
router.resolve();
