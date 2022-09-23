import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
})
export class PaginaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  vesAHome() {
    this.router.navigate(['/home'])
  }

}
