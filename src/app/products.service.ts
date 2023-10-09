import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import {Observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _HttpClient:HttpClient ) { }

getProducts():Observable<any>
{
 return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/products')
}

getProductsDetails(id:string):Observable<any>
{
 return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
}

getcategories():Observable<any>
{
 return this._HttpClient.get("https://route-ecommerce.onrender.com/api/v1/categories")
}
}
