import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
constructor( private _CartService:CartService){

}

shippingAddress:FormGroup = new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null),
})
navigateToPage(url:string){
window.location.href = url;
}

handleSubmit(shippingAddress:FormGroup){
  console.log(shippingAddress.value);
  
this._CartService.onlinePayment(shippingAddress.value, "644705ad10bf970034479c40").subscribe({
  next:(response:any)=> {
    console.log(response.session.url);
    
    this.navigateToPage(response.session.url)

  },
  error:(err)=> {
    console.log(err);
    
  }
})
}
}
