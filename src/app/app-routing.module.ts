import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { TopnavComponent } from './topnav/topnav.component';
import { CategoryviewComponent } from './categoryview/categoryview.component';
import { ProductviewComponent } from './productview/productview.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"main-menu",component:MainMenuComponent},
  {path:"category",component:CategoryComponent},
  {path:"product",component:ProductComponent},
  {path:"topnav",component:TopnavComponent},
  {path:"categoryview",component:CategoryviewComponent},
  {path:"productview",component:ProductviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
