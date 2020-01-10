import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _HEROESSERVICE: HeroesService, private ruta: Router  ) { }

  ngOnInit() {

    this.heroes = this._HEROESSERVICE.getHeroes();

  }

  verHeroe(index: number) {
    this.ruta.navigate( ['/heroe', index] );
  }

}
