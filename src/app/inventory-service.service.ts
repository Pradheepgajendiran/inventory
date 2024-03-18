import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://localhost:7228/";

  

  getCategories(){
    let geturl="Inventory/GetCategoryDetails";
    return this.http.get(this.baseUrl + geturl)

  }
  getSpecCategories(catId:any){
    let geturl="Inventory/GetSpecCategory?catId="+catId;
    return this.http.get(this.baseUrl + geturl)

  }

  AddCategory(input:any)
  {
    let url = this.baseUrl + "Inventory/AddCategoryDetails"
    return this.http.post(url, input)
  }
  UpdateCategory(input:any)
  {
    let url = this.baseUrl + "Inventory/UpdateCategory"
    return this.http.post(url, input)
  }

 RemoveSpecCategories(catId:any){
    let geturl="Inventory/RemoveCategory";
    return this.http.post(this.baseUrl + geturl,catId)

  }



  getSpecProducts(prodId:any){
    let geturl="Inventory/GetSpecProduct?prodId="+prodId;
    return this.http.get(this.baseUrl+geturl)

  }

  AddProducts(input:any){
    let url=this.baseUrl+"Inventory/AddProductDetails"
    return this.http.post(url,input)
  }

  getProducts(){
    let getprodurl="Inventory/GetProductDetails"
    return this.http.get(this.baseUrl+getprodurl)
  }
  

}
