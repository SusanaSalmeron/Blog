import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: FormularioComponent },
  { path: '**', redirectTo: '/new' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
