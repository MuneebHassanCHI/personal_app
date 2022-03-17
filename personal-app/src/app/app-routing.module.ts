import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base-component/base.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: 'blogs',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'project/:name', component: ProjectComponent,
  },
  {
    path: '', component: BaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
