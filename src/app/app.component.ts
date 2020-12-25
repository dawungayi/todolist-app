import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Desmond";
  // runs when the component is initialized 
  constructor() {
    this.changeName("Jonah");
  }

  changeName(name: string): void {
    this.name = name;
  }

}
