import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeContaierComponent } from './home-contaier/home-contaier.component';

const routes: Routes = [
  {
    path:'',
    component:AddUserComponent,
    
    // children: [
    //   {
    //       path: 'add',
    //       component:AddUserComponent ,
    //   },
    // ]
  },
  // {
  //   path:'add',
  //   component:AddUserComponent
  // },
  // {
  //   path:'list',
  //   component:ListUserComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
