import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SignUp, login } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  @Output() isError = new EventEmitter<boolean>(false); 
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: SignUp) {
    this.http.post('http://localhost:3000/seller', data, { observe: "response" }).subscribe((result) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    });
  }

  reloadSeller() {
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  userLogin(data: login) {
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: "response" }).subscribe((res:any) => {
      if(res&&res.body&&res.body.length){
       this.isSellerLoggedIn.next(true);
       localStorage.setItem('seller', JSON.stringify(res.body));
        this.router.navigate(['seller-home']);
      }
      else{
       this.isError.emit(true);
      }
    })
  }
}
