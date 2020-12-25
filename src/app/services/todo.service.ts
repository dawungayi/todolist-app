import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string =  'https://jsonplaceholder.typicode.com/todos';
  limitTodos: string = '?_limit=5';

  // inject the HTTP modukles into the constructor
  constructor(private http: HttpClient ) { }

  getTodos(): Observable<Todo[]> {  
    // GET request to the JSON placeholder API 
    // requests are similar to how we do it in Axios
    return this.http.get<Todo[]>(`${this.todosUrl}${this.limitTodos}`); // response will be as array of Todos - generics
    // this also works: concatenating both strings
    // return this.http.get<Todo[]>(this.todosUrl + this.limitTodos); // response will be as array of Todos - generics
    // returns an observable
  }

}
