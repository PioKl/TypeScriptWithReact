import React, { useContext } from 'react';

/* import Todo from '../models/todo'; */
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';


//FC functional component

/*const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
    props
    ) => { */

const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    return (
        /* 
            <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
        */
        <ul className={classes.todos}>
            {todosCtx.items.map(item =>
                <TodoItem key={item.id} todoText={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
            )}
        </ul>
    );
}

export default Todos;
