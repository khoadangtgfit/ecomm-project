import { Component, OnInit,Output,EventEmitter,Input,AfterViewChecked } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent implements OnInit,AfterViewChecked{

  modalTitle: string='';
  @Input() id: number | undefined;
  @Input() isUpdate: boolean | undefined;
  @Input() isModalOpen = false;
  @Output() isModalClose = new EventEmitter<boolean>();


  ngOnInit(): void {
    
  }

  closePopup(){
    this.isModalOpen =false;
    // this.isModalClose.emit(true);
    this.activeModal.close();
  }

  constructor(private productService: ProductService, private router: Router, private activeModal: NgbActiveModal){}
  ngAfterViewChecked(): void {
    console.log(this.isUpdate);
    console.log(this.id);
  }

  isUpdateModal(){
    return this.isUpdate;
  }

  getTitle(){
    return this.isUpdate? 'Update':'Delete';
  }

  handleClick() {
    if (this.id) {
      if (this.isUpdate) {

      } else {
        this.productService.deleteProduct(this.id).subscribe((res) => {
          if (res) {
           
          }
        }
        );
      }
      console.warn(this.id);
    }
    this.isModalClose.emit(false);
    window.location.reload();
  }
}
