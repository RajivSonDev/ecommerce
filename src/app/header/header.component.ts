import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    isAuthenticated:boolean=false;
    constructor(private route:Router) {
    }

    ngOnInit() {

        if(localStorage.getItem('seller')){
            this.isAuthenticated=true;
        }else{
            this.isAuthenticated=false;
        }

    }


    backtohome() {
        localStorage.removeItem('seller');
        this.route.navigate(['']);
    }
}
