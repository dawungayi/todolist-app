import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  // <any> b/c it's not formatted like out Todo model (has no id field)
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  // methods called in HTML template
  onSubmit(): void {
    // construct  new todo object: no nneed for id, since JSON placeholder, like most APIs, generates the ID for us
    const todo = {
      title: this.title,
      completed: false,
    }

    // emit this upward to parent component's HTML template
    this.addTodo.emit(todo);
  }

}
