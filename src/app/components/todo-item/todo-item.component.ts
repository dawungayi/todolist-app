import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  // Set Dynamic classes - for dynamic class binding to the component in todo-item.component.html
  setClasses() {
    let classes = {
      'todo': true,   // always add this CSS class to this component
      // todo: true,   // could also be written this way, but I keep the quotes for consitency across style classes
      'is-complete': this.todo.isComplete,  // add this CSS class to the component if 'this.todo.isComplete' is true
    }
    return classes;
  }

  onToggle(todo: Todo): void {
    // toggle the isCompleted property
    // console.log("toggle");
    todo.isComplete = !todo.isComplete;
  }

  onDelete(todo: Todo): void {
    console.log("Delete");
  }

}
