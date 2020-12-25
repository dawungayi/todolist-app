import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      new Todo(1, "Todo One", true),
      new Todo(2, "Wash car", true),
      new Todo(3, "Iron clothes", false),
      new Todo(4, "Call Insurance", false),
    ]
  }

}
