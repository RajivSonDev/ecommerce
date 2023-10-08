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

  constructor(private auth:SellerService,private route:Router) {
  }

  ngOnInit(): void {
    this.auth.reloadSeller();
  }

  signForm(event : SignUp) {
    console.warn(event.name)
    this.auth.userSignUp(event);
  }


}
