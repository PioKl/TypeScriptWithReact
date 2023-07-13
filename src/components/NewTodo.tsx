import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css';

//W tym react.fc text: string oznacza, że funckja przyjmuje jeden parametr, który jest stringiem, a void oznacza, że funkcja nie zwraca nic, tylko przyjmie jeden parametr ten text

//wczesniej React.FC<{ onAddTodo: (text: string) => void }>

const NewTodo: React.FC = () => {

    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    //trzeba podać jakim typem jest useRef w tym przypadku inputem i dać wartość domyślną w tym przypadku null

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        //?. jest po to, że ref od razu niekoniecznie musi mieć przypisanej wartość w danym momencie, można użyć tez !. co oznacza, że nigdy nie będzie wartości null
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        //props.onAddTodo(enteredText);

        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo text</label>
            <input type="text" id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )

};

export default NewTodo;

