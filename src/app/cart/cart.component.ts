import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDetails:any = null
constructor(private _CartService:CartService){

}
ngOnInit(): void {
  this._CartService.getLoggedCart().subscribe(
    {
      next: (response:any)=> {
        this.cartDetails = response.data
      console.log(response);
      
      },
    error: (err)=> console.log(err),    
  })
}
removeItem(productId:string){
this._CartService.removeCartItem(productId).subscribe({
  next: (response:any)=> this.cartDetails = response.data
  ,
  error: (err)=> console.log(err),    

})
}
updateItem(productId:string , count:number){
  this._CartService.updateCartItem(productId,count).subscribe({
    next: (response:any)=> this.cartDetails = response.data
    ,
    error: (err)=> console.log(err),    
  
  })
  }
  
}
