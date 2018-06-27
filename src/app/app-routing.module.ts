import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



/**
   * what does it take to set and fetch Ng5 route parameters
   * so while I don't need any type of query parameters for my particular
   * project, I'm going to create one just so that I can show myself
   * how I can work in parameters to my URLs (to my goals (cc)) and 
   * retrieve the values if I need to
   * The ':id' parameter is what is called a route parameter
   * you can create as many as you want -- each separated as such: /:whatever/:whateveragain
   */
const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  },

  {
    path: 'about/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
