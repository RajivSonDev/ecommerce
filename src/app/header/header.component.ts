import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    menuType:string='default';

    isAuthenticated:boolean=false;
    constructor(private route:Router) {
    }

    ngOnInit() {

        // whenever router change then you will receive value
        this.route.events.subscribe((value:any)=>{
            console.log(value.url)
            if(value.url){
                if(localStorage.getItem('seller') && value.url.includes('seller')){
                    console.warn("in seller area")
                    this.menuType="seller";
                }else{
                    console.warn("outside of seller area")
                    this.menuType="default";
                }
            }
        })

    }


    backtohome() {
        localStorage.removeItem('seller');
        this.route.navigate(['']);
    }
}
