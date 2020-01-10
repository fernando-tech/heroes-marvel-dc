import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroe.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: any = {};
  termino: string;

  constructor( private activateRouter: ActivatedRoute, private _HEROESSERVICE: HeroesService ) {}

  ngOnInit() {

    this.activateRouter.params.subscribe( params => {

      this.termino = params.nombre;
      this.heroes = this._HEROESSERVICE.buscarHeroes(params.nombre);

    } );

  }

}
