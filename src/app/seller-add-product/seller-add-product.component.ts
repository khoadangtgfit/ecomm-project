import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';


@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage: string='';
  constructor(private product: ProductService){}
  summit(data: product): void{
    this.product.addProduct(data).subscribe((res)=>{
      if(res){
        this.addProductMessage="Add Product Succesfull";
      }else{
        this.addProductMessage="Add Prodcuct Failed";
      }
      setTimeout(() => {
        this.addProductMessage = '';
      }, 3000);
    });
  }
}
