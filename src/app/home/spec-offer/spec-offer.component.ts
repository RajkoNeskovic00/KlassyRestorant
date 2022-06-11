import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-spec-offer',
  templateUrl: './spec-offer.component.html',
  styleUrls: ['./spec-offer.component.css']
})
export class SpecOfferComponent implements OnInit {

  constructor(private mealsService: MenuService) { }
  public meals: IMenu[]=[];

  ngOnInit(): void {
    this.getMelas();   
    
    
  }
   
  getMelas(): void{
    this.mealsService.getAll().subscribe(data=>{
    data.sort(function(a, b) {
        return b.discount - a.discount;
    });
    this.meals=data.slice(0,4);  
    })
  }

  discountForMeal(price:number,disc:number):number{
    return price*(100-disc)/100
    
  }

}
