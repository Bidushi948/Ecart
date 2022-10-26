import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit 
{
public productlist:any;
searchkey:string="";
public filterCategory : any
  constructor(private api : ApiService, private cartservice:CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productlist=res;
      this.filterCategory = res;

      this.productlist.forEach((a:any) => {
        if(a.category ==="women's clothing" ){
          a.category ="Women"
        }
        if(a.category ==="men's clothing" ){
          a.category ="Men"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productlist)
    });
  
    this.cartservice.search.subscribe(val=>{
      this.searchkey=val;
    })
  }

  addtocart(item:any){
    this.cartservice.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productlist
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
