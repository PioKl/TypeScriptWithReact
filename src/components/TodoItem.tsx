import classses from './TodoItem.module.css'


const TodoItem: React.FC<{ todoText: string; onRemoveTodo: () => void }> = (props) => {
    return (
        <li className={classses.item} onClick={props.onRemoveTodo}>{props.todoText}
        </li>)
}

export default TodoItem;