import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isLogin:boolean = true;
cartNumber:number = 0
  constructor(private _AuthService:AuthService, private _CartService:CartService){
   _CartService.numberOfCartItem.subscribe({
    next:(response)=>{this.cartNumber=response
},
error:(err)=> console.log(err)

   })
   
   
    _AuthService.userData.subscribe({
      next:()=>{
        if(_AuthService.userData.getValue() !== null){
          this.isLogin = true
        console.log(this.isLogin);
          
        }
        else{
          this.isLogin = false
          console.log(this.isLogin);
          
        }
      }
    })

    
  }
    logOut(){
      this._AuthService.logOut()
    }
}
