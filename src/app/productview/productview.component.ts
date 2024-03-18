import { Component } from '@angular/core';
import { InventoryServiceService } from '../inventory-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent {

  products:any;


  ngOnInit(){
    this.GetProductDetails();
  }


  constructor(private service:InventoryServiceService,private actroute:ActivatedRoute){}

  GetProductDetails(){
    this.service.getProducts().subscribe((data:any)=>{

      this.products=data;

    });
  }

}
