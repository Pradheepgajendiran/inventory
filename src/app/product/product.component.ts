import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryServiceService } from '../inventory-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  productform: any;
  cat_details: any;
  prod_details: any;
  selProdId:any;
  savetext='Save';

  constructor(private service: InventoryServiceService,
              private actroute:ActivatedRoute) {


            this.selProdId=this.actroute.snapshot.queryParamMap.get('prodId');
                this.productform = new FormGroup({
                  prod_name: new FormControl('', [Validators.required]),
                  prod_description: new FormControl('', [Validators.required]),
                  prod_img: new FormControl('', [Validators.required]),
                  prod_category: new FormControl('', [Validators.required]),
                  prod_mrp: new FormControl('', [Validators.required]),
                  prod_salesprice: new FormControl('', [Validators.required]),
                });

              }

  ngOnInit() {
    

    this.GetCategories();
    if(this.selProdId !=null){
      this.savetext='Update';
      this.service.getSpecProducts(this.selProdId).subscribe((data:any)=>{
        this.productform.controls['prod_name'].setValue(
          data[0].productName
        );
        this.productform.controls['prod_description'].setValue(
          data[0].productDescription
        );
        this.productform.controls['prod_img'].setValue(
          data[0].productImg
        );
        this.productform.controls['prod_category'].setValue(
          data[0].categoryId
        );
        this.productform.controls['prod_mrp'].setValue(
          data[0].mrpPrice
        );
        this.productform.controls['prod_salesprice'].setValue(
          data[0].salePrice
        );




      });
    }else{
      this.savetext='Save';
    }

  }

  get prod_name() {
    return this.productform.get('prod_name');
  }

  get prod_description() {
    return this.productform.get('prod_description');
  }

  get prod_img() {
    return this.productform.get('prod_img');
  }
  get prod_category() {
    return this.productform.get('prod_category');
  }
  get prod_mrp() {
    return this.productform.get('prod_mrp');
  }

  get prod_salesprice() {
    return this.productform.get('prod_salesprice');
  }

  GetCategories() {
    this.service.getCategories().subscribe((x: any) => {
      this.cat_details = x;
    });
  }

  onsave() {
    this.productform.markAllAsTouched();

    if (this.productform.valid) {
      let input = {
        productId: 0,
        productName: this.productform.controls['prod_name'].value,
        productDescription: this.productform.controls['prod_description'].value,
        productImg: this.productform.controls['prod_img'].value,
        categoryId: this.productform.controls['prod_category'].value,
        mrpPrice: this.productform.controls['prod_mrp'].value,
        salePrice: this.productform.controls['prod_salesprice'].value,
        createdBy: 'Admin',
      };

      this.service.AddProducts(input).subscribe((x: any) => {
        if ((x.success = true)) {
          Swal.fire({
            title: 'Product Saved!',
            text: 'Click OK!',
            icon: 'success',
          });

          this.productform.reset();
        } else {
        }
      });

      
      
    } else {
      Swal.fire({
        title: 'Product Not Saved!',
        text: 'Enter Valid Info!',
        icon: 'error',
      });
    }
  }
}
