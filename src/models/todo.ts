class Todo {

    id: string; //w zwykłym js nie musiałbym tego pisać
    text: string; //w zwykłym js nie musiałbym tego pisać

    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo