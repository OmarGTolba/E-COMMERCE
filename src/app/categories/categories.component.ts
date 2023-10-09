import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

ProductsService
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categories:any [] = []
  constructor(private _ProductsService:ProductsService){}
ngOnInit(): void {
  this._ProductsService.getcategories().subscribe({
    next:(response)=> {
      this.categories = response.data
      console.log(response);
    }
 
  })
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 7
    }
   
  },
  nav: true
}

}
