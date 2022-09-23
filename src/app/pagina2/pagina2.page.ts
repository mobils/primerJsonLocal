import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  private jsonObject: any;  //guardarem tota l'estructura del json aquí, des del {}
  private data: any;   // aquest és el array dins del json, el que està entre []

  constructor() { }

  ngOnInit() {
    
    fetch('./assets/data/restaurants.json')
    .then(res => res.json() ) 
    .then(json => { this.jsonObject = json; this.data=this.jsonObject['restaurantes']}); 

   
   }


}
