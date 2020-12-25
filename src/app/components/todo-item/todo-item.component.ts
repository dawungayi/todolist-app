import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  // dependency injection
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set Dynamic classes - for dynamic class binding to the component in todo-item.component.html
  setClasses() {
    let classes = {
      'todo': true,   // always add this CSS class to this component
      // todo: true,   // could also be written this way, but I keep the quotes for consitency across style classes
      'is-complete': this.todo.completed,  // add this CSS class to the component if 'this.todo.completed' is true
    }
    return classes;
  }

  onToggle(todo: Todo): void {
    // toggle in UI
    todo.completed = !todo.completed;
    // toggle in service
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);  // display the response from the server
    });
  }
  
  onDelete(todo: Todo): void {
    console.log("Delete");
    // console.log(todo);   // for debug
  }

}
