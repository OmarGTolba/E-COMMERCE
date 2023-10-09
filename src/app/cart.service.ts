import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
Observable

@Injectable({
  providedIn: 'root'
})
export class CartService {
numberOfCartItem = new BehaviorSubject(0)
  constructor( private _HttpClient:HttpClient, private _AuthService:AuthService) 
  {
    console.log(this._AuthService.userData,"this._AuthService.userData");
    this._AuthService.userData.subscribe((result) =>{
      if(result) {
        console.log(result);
        
        this.getLoggedCart().subscribe(()=>{
          console.log("ajsgdjasgd");
          
        })
      }
    })

  
   }
getLoggedCart() : Observable<any>{
  return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/cart')

}


updateCartItem(productId:string , count:number):Observable<any>{
  return this._HttpClient.put(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`,{count:count} )
}

 
onlinePayment(shippingAddress:any , cartId:string){
  return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`  ,{
     shippingAddress: shippingAddress
  }
  )
}

removeCartItem(productId:string){
  return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`)

}
   addToCart(productId:string):Observable<any>
   {
return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/cart', {productId: productId})

   }
}
