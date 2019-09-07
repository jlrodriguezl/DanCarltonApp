import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  images=['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
