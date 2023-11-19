import { AfterContentChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, login} from '../data-type';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  @ViewChild('sellerSignUp') sellerSignUp: NgModel | undefined;
  authError: string= '';
  constructor(private seller: SellerService, private router: Router){}
  isShowLogin: boolean =false;
  ngOnInit(){
    this.seller.reloadSeller();
  }
  signUp(data: SignUp): void{
   this.seller.userSignUp(data);
  }

  isShowLoginOrSignUp(){
    this.isShowLogin = !this.isShowLogin;
  }
  login(data: login){
    this.seller.userLogin(data);
    this.seller.isError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or Password is not correct";
      }
    })
  }

}
