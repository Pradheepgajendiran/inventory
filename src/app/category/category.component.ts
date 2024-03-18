import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { InventoryServiceService } from '../inventory-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categoryform: FormGroup;
  categories: any;
  selCatId: any;
  saveText = 'Save';
  constructor(
    private service: InventoryServiceService,
    private reoute: ActivatedRoute
  ) {
    this.selCatId = this.reoute.snapshot.queryParamMap.get('catId');

    this.categoryform = new FormGroup({
      categoryname: new FormControl('', [Validators.required]),
      uploadimg: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    if (this.selCatId != null) {
      this.saveText = 'Update';
      this.service.getSpecCategories(this.selCatId).subscribe((data: any) => {
        this.categoryform.controls['categoryname'].setValue(
          data[0].categoryName
        );
        this.uploadimg?.setValue(data[0].categoryImg);
      });
    } else {
      this.saveText = 'Save';
    }

  }

  get categoryname() {
    return this.categoryform.get('categoryname');
  }

  get uploadimg() {
    return this.categoryform.get('uploadimg');
  }

  onsave() {
    this.categoryform.markAllAsTouched();
    if (this.categoryform.valid) {
      debugger;
      let input = {
        categoryId: this.selCatId == null ? 0 : this.selCatId,
        categoryName: this.categoryform.controls['categoryname'].value,
        categoryImg: this.categoryform.controls['uploadimg'].value,
        createdBy: '1',
      };
       if(this.selCatId == null)
      {

      this.service.AddCategory(input).subscribe((data: any) => {
        if (data.success == true) {
          Swal.fire({
            title: 'Category Saved!',
            text: 'Click OK!',
            icon: 'success',
          });

          this.categoryform.reset();
        } else {
        }
      });

    }
    else{
      this.service.UpdateCategory(input).subscribe((data: any) => {
        if (data.success == true) {
          Swal.fire({
            title: 'Category Updated!',
            text: 'Click OK!',
            icon: 'success',
          });

          this.categoryform.reset();
        } else {
        }
      });

    }


    } else {
      Swal.fire({
        title: 'Category Not Saved!',
        text: 'Enter Valid Info!',
        icon: 'error',
      });
    }
  }

  // --------------------------------------------------------------
}
