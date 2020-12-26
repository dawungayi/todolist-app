import { Component, OnInit } from '@angular/core';
// import Todo Service
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // binding to the service imported
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // observable: asynchronous data stream
    // .subscribe() in observable is like .then() in a promise 
    this.todoService.getTodos().subscribe(todo => {
      this.todos = todo;
    });
  }

  deleteTodo (todo: Todo): void {
    // remove from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);  // return all todo items whose id does not match the id of the todo item to be deleted 
    // remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

}
