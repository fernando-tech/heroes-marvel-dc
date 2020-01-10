import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activateRouter: ActivatedRoute, private _HEROESSERICE: HeroesService ) {

    this.activateRouter.params.subscribe( param => {
      this.heroe = this._HEROESSERICE.getHeroe(param.id);
    } );

   }


}
