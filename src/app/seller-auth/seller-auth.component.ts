import {Component, EventEmitter, OnInit} from '@angular/core';
import {SellerService} from "../services/seller.service";
import {Router} from "@angular/router";
import {SignUp} from "../data-type";

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  showLoginForm:boolean=false;
  authError:string='';

  constructor(private auth:SellerService,private route:Router) {
  }

  ngOnInit(): void {
    this.auth.reloadSeller();
  }

  signForm(event : SignUp) {
    console.warn(event.name)
    this.auth.userSignUp(event);
  }


  openLogin() {
      this.showLoginForm=true;
  }

  openSignUp() {
    this.showLoginForm=false;
  }

  logInForm(value: any) {
    //console.log(value)
    this.authError='';
    this.auth.userLogin(value)
    this.auth.isLoginError.subscribe((iserror)=>{
        if(iserror){
           this.authError='Email or Password is not correct!';
        }
    })
  }
}
