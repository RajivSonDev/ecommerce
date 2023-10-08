import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignUp} from "../data-type";
import {BehaviorSubject} from "rxjs";
import { Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SellerService {

    isSellerLoggedIn=new BehaviorSubject<boolean>(false);

  //private baseUrl='localhost:3000';
  constructor(private http:HttpClient, private route:Router) { }

    // professional developer avoid to use any
    // datatype should not be "any"
  userSignUp(data:SignUp){
     console.log("form submit");
     // '//' not forget, when you make request
      return this.http.post
      ('http://localhost:3000/seller',data,
          {
              observe:'response'
          }).subscribe(
          (result) =>{
            console.warn('result',result);
            this.isSellerLoggedIn.next(true);

            // storing data in local storage
              localStorage.setItem('seller',JSON.stringify(result.body))

              // storing data in local storage
            this.route.navigate(['seller-home']);
          });
  }

    reloadSeller() {
        if(localStorage.getItem('seller')){
            this.isSellerLoggedIn.next(true);
            this.route.navigate(['seller-home']);
        }
    }
}
