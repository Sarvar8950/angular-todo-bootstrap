import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { AlltodosComponent } from './components/alltodos/alltodos.component';

const routes: Routes = [
  { path: '', component: AddtodoComponent },
  { path: 'alltodo', component: AlltodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
