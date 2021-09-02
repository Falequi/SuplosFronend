import { Component } from '@angular/core';
import { PixabayService } from '../../pixabay/services/pixabay.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial() {
    return this.pixabayService.historial;
  }

  constructor( private pixabayService: PixabayService  ) { }

  buscar( termino: string ) {
    this.pixabayService.buscarImages( termino );
  }

}
