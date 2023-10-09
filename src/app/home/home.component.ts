import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
CartService
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:any[]=[]
  constructor(private _ProductsService:ProductsService , private _CartService:CartService){}
addToCart(id:string){
  this._CartService.addToCart(id).subscribe({
    next:(response)=> this._CartService.numberOfCartItem.next(response.numOfCartItems),
    error:(err)=> console.log(err)
    
    
  })
}

ngOnInit(): void {
  this._ProductsService.getProducts().subscribe({
    next: (response)=> {this.products = response.data
 
    console.log(this.products);}
  })

}
}
