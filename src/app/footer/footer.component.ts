import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  filterCategory: any;
  productlist: any;

  constructor(private api : ApiService, private cartservice:CartService) { }

  ngOnInit(): void 
  {
    this.api.getProduct()
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
