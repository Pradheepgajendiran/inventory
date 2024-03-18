import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import{HttpClientModule} from '@angular/common/http';
import { TopnavComponent } from './topnav/topnav.component';
import { CategoryviewComponent } from './categoryview/categoryview.component';
import { ProductviewComponent } from './productview/productview.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    CategoryComponent,
    ProductComponent,
    TopnavComponent,
    CategoryviewComponent,
    ProductviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
