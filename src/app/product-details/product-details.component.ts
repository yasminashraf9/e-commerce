import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenStoreService } from '../open-store.service';

@Component({
  selector: 'app-product-details',
  template: `
  <div class="container">
    <img [src]="product.imageUrl" alt="">
    <div class="productInfo">
        <h1> {{product.name}}</h1>
        <p> It's a {{product.category}} tool, Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Distinctio nostrum recusandae quisquam, sunt magnam 
            tempore et aliquam reprehenderit. Nesciunt, exercitationem? </p>
        <p> Price: {{product.price | currency}}</p>
        <button>ADD To Card</button>

    </div>
  </div>
  `,
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, 
              public store : OpenStoreService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  product : any ={};

  // get the selected product by its id to be shown 
  getProduct():void{
    // read the id parameter 
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    // use service to return the selected product details 
    this.store.getSelectedProduct(id).subscribe((product:any)=>{
      this.product = product
    })
  }

}
