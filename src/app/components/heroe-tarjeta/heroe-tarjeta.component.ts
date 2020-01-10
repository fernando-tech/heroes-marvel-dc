import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  // Input recibe datos desde el componente padre
  @Input() heroe: any = {};
  @Input() index: number;

  constructor(private ruta: Router) {}

  ngOnInit() {
  }

  verHeroe() {
    this.ruta.navigate( ['/heroe', this.index] );
  }

}
