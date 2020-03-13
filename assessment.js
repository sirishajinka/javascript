class Todo {
    constructor(title) {
        Todo.idx++
        this.id = Todo.idx
        this.title = title
        this.completed = false
    }
}
Todo.idx = 0;

// service
class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        this.todos = this.todos.concat(newTodo)
    }
    editTodo(id, newTitle) {
        let editableTodo = this.todos.find(todo => todo.id === id)
        editableTodo.title = newTitle
    }
    completeTodo(idx) {
        //..
        let todo = this.todos[idx]
        todo.completed = true
    }
    deleteTodo(idx) {
        delete this.todos[idx]
    }
    clearCompleted() {
        for(let j=0; j<this.todos.length; j++)
        {
            if(this.todos[j].completed === true)
            { delete this.todos[j]
            }
        }
    }
    compelteAll() {
        //..
        let areAllCompleted = this.todos.every(todo => todo.completed)
        for (let i = 0; i < this.todos.length; i++) {
            this.todos[i].completed = !areAllCompleted
        }
    }
     viewTodos(flag) {
        //..
        if (flag === "ALL")
            this.todos.forEach(todo => console.log(todo))
        if (flag === "Active")
            this.todos.filter(todo => !todo.completed).forEach(todo => console.log(todo))
        if (flag === "Completed")
            this.todos.filter(todo => todo.completed).forEach(todo => console.log(todo))
    }
}


let service = new TodoService();
service.addTodo("go home")
service.viewTodos('ALL')
service.addTodo("go study")
service.viewTodos('ALL')
service.addTodo("go to egypt")
service.viewTodos('ALL')
service.addTodo("go to kingdom")
service.completeTodo(3)
service.viewTodos('ALL')
service.compelteAll()
service.viewTodos('ALL')



