import { Component, ElementRef, ViewChild} from '@angular/core';

import { PixabayService } from '../services/pixabay.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  @ViewChild('txtCategoria') txtCategoria!:ElementRef<HTMLSelectElement>;

  constructor( private pixabayService: PixabayService ) {}

  buscar() {
    
    const valor = this.txtBuscar.nativeElement.value;
    
    if ( valor.trim().length === 0 ) {
      return;
    }
    
    this.pixabayService.buscarImages( valor );
    
    this.txtBuscar.nativeElement.value = '';
  }
  
  onchage(){
    
    const state = this.txtCategoria.nativeElement.value;
    
    this.pixabayService.buscarImages( state );
    
    this.txtCategoria.nativeElement.value = '';
    
  }

}
