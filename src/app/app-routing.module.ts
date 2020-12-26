import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AboutComponent} from './components/pages/about/about.component';

const routes: Routes = [
  { path: '', component: TodosComponent },   //  root path: ''
  { path: 'about', component: AboutComponent }  // about path: '/about'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
