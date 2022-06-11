import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class OpenStoreService {

  constructor(public http: HttpClient) { }

  url:string = "https://captello.firebaseio.com/products.json"


  
  // get all products 
  getProducts():any{
    return this.http.get(this.url);
  }
  

  // get specific product by using its id
  getSelectedProduct(id:any):any{
    return this.http.get(`https://captello.firebaseio.com/products/${id-1}.json`)
  }

}
