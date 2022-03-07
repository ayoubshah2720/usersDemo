import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { HomeContaierComponent } from './home/home-contaier/home-contaier.component';
import { UsersComponent } from './List/users/users.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    component: HomeContaierComponent,
    path: 'add',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
},
{
  component: UsersComponent,
  path: 'users',
  loadChildren: () => import('../app/List/list.module').then(m => m.ListModule)
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
