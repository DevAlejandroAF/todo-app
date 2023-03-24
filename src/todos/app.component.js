import todoStore from '../store/todo.store';
import html from './app.component.html?raw';
import renderTodos from './use-cases/render-todos';

const ElementIDs = {
  TodoList: '.todo-list',
}

/**
 * 
 * @param {String} elementId 
 */
const App = ( elementId ) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
    renderTodos( ElementIDs.TodoList, todos );
  }

  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector( elementId ).append( app );
    displayTodos();
  })();
}

export default App;