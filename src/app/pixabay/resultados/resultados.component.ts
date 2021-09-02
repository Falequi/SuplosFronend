import { Component } from '@angular/core';
import { PixabayService } from '../services/pixabay.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados() {
    return this.pixabayService.resultados;
  }

  constructor( private pixabayService: PixabayService ) { }

}
