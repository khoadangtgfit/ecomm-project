import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller: SellerService){}
  ngOnInit(){}
  signUp(data: object){
    console.warn(data);
    this.seller.userSignUp(data).subscribe((res)=>{
      console.warn(res);
    });
  }
}
