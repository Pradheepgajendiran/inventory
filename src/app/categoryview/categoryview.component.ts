import { Component } from '@angular/core';
import { InventoryServiceService } from '../inventory-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.scss'],
})
export class CategoryviewComponent {
  categories: any;

  constructor(private service: InventoryServiceService, private actRoute:ActivatedRoute) {}

  ngOnInit() {
    this.GetCategories();
  }

  GetCategories() {
    this.service.getCategories().subscribe((x: any) => {
      this.categories = x;
    });
  }

  DeleteCategory(catId:any)
  {
    this.service.RemoveSpecCategories(catId).subscribe((data:any)=>{
      if(data.success == true)
      {
        Swal.fire({
          title: 'Category Removed!',
          text: 'Click OK',
          icon: 'error',
        });
        this.GetCategories();
      }
      else
      {
        alert("Not rewmoved")
      }
    })

  }


}
