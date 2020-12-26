import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

// extra details for POST and PUT requests (exactly the same as the 'Headers' tab in Postman) 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string =  'https://jsonplaceholder.typicode.com/todos';
  limitTodos: string = '?_limit=5';

  // inject the HTTP modukles into the constructor
  constructor(private http: HttpClient ) { }

  // Get todos from API
  getTodos(): Observable<Todo[]> {  
    // GET request to the JSON placeholder API 
    // requests are similar to how we do it in Axios
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limitTodos}`); // response will be as array of Todos - generics
    // this also works: concatenating both strings
    // return this.http.get<Todo[]>(this.todosUrl + this.limitTodos); // response will be as array of Todos - generics
    // returns an observable
  }

  // add a record to the DB: POST request
  addTodo(todo: Todo): Observable<any> {
    const url: string = this.todosUrl; 
    return this.http.post(url, todo, httpOptions);
  }

  // toggle completed field: PUT request to this specific todo Id  
  // Use <any> instead of <Todo> class since this API has an extra fields (userId) which means it will be formatted differently from the Todo class we defined
  toggleCompleted(todo: Todo): Observable<any> {
    // add this id to the URL string. e.g. for todo id #1: https://jsonplaceholder.typicode.com/todos/1
    const url: string = `${this.todosUrl}/${todo.id}`;  
    return this.http.put(url, todo, httpOptions);
  }
  
  // delete item from server
  deleteTodo(todo: Todo): Observable<Todo> {
    const url: string = `${this.todosUrl}/${todo.id}`;  
    return this.http.delete<Todo>(url, httpOptions);
  }
}
