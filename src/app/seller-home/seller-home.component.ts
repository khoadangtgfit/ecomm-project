import { AfterViewChecked, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { Router } from '@angular/router';
import { ConfirmService } from '../services/confirm.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit, AfterViewChecked{
  public isPopupVisible = false;
  public isUpdate = false;
  public productId :number |undefined;
  @Output() isOpen:EventEmitter<boolean>|undefined;
  // @Output() isOpenPopupConfirm!: EventEmitter<boolean>;
  isDeleteSuccess: string ='';
  productList: product[] | undefined;
  constructor(private productService: ProductService, private router: Router, private confirmService: ConfirmService, private modalService: NgbModal){

  }
  ngAfterViewChecked(): void {
    // console.warn('seller-home',this.isPopupVisible);
  }

  ngOnInit(): void {
    this.productService.productList().subscribe((res)=>{
      this.productList=res;
    })
  }

  deleteProduct(id: number) {
    this.confirmService.open('Confirm Delete','Are You Sure?')
    // this.productService.deleteProduct(id).subscribe((res) => {
    //   if (res) {
    //     this.isDeleteSuccess = 'Delete product successfully';
    //     this.router.navigate(['seller-home']);
    //   }
    // },
    //   (error) => {
    //     this.isDeleteSuccess = 'Delete product failed';
    //   }
    // )
    // setTimeout(() => {
    //   this.isDeleteSuccess = '';
    // }, 3000);
  }
  openPopup(isUpdate: boolean, productId: number): void {
    this.isPopupVisible = true;
    this.isUpdate = isUpdate;
    this.productId =productId;
    this.modalService.open(ConfirmModalComponent);
  }
  closePopup(): void {
    this.isPopupVisible = false;
  }
  
}
