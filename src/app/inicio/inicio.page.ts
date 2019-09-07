import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  totalPer: string[] = [];

  constructor(private router: Router) { }

  inDate: String = new Date().toISOString();
  finDate: String = new Date().toISOString();

  irSeleccion(){
    this.router.navigateByUrl('/seleccion');
  }
  
  ngOnInit() {
    this.loadPer();
  }

  loadPer(){
    this.totalPer=[
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10'
    ];
  }

}
