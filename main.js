import './style.css'
import App from './src/todos/app.component';
import todoStore from './src/store/todo.store';

todoStore.initStore();

App("#app");