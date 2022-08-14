import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
// import { AddtodoComponent } from './components/addtodo/addtodo.component';
// import { AlltodosComponent } from './components/alltodos/alltodos.component';

const routes: Routes = [
  // { path: '', component: AddtodoComponent },
  // { path: 'alltodo', component: AlltodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
