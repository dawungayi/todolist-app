import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return     [
      new Todo(1, "Todo One", true),
      new Todo(2, "Wash car", true),
      new Todo(3, "Iron clothes", false),
      new Todo(4, "Call Insurance", false),
    ]
  }

}
