import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenStoreService } from '../open-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productsService : OpenStoreService ,
              private router : Router) { }

  ngOnInit(): void {
    // get product and define their category first 
    // this.getProducts()
  }

  allProducts : any = [];
  simpleProducts :any = [] ;
  complexProducts : any = [];
  // products will be in the show section 
  shownProducts : any =[]
  // define which category is active 
  categories={
    all : false,
    simple : false,
    complex : false
  }
  
  getProducts():void{
    // check if the products had been fetched and stored before 
    if(localStorage.getItem("products")){
      this.allProducts = JSON.parse(localStorage.getItem("products")!)
    }else{
      // if not get them from service then cache them 
      this.productsService.getProducts().subscribe((products : any)=>{
        this.allProducts = products
        localStorage.setItem("products", JSON.stringify(products))
      })
    }
    // set simple and complex products 
    this.simpleProducts = this.allProducts.filter((product:any)=> product.category === "simple")
    this.complexProducts = this.allProducts.filter((product:any)=> product.category === "complex")
    this.showAllProducts()
  }

  // according to chosen category the products in show section will change 
  showAllProducts():void{
    this.shownProducts = this.allProducts
    // select the active category 
    this.categories = {all : true , simple : false , complex : false}
  }

  showSimpleProducts():void{
    this.shownProducts = this.simpleProducts
    this.categories = {all : false , simple : true , complex : false}
  }

  showComplexProducts():void{
    this.shownProducts = this.complexProducts
    this.categories = {all : false , simple : false , complex : true}
  }

  // sync a specific product 
  getProduct(id:number):void{
    this.router.navigate(["",id])
  }


  // in small media query categories nav will be hidden by default until triggering
  categoriesShow :boolean = false;
  
  // toggle displaying of categories nav in small media
  toggleShow(){
    setTimeout(()=>{this.categoriesShow =!this.categoriesShow},200)
  }


}
