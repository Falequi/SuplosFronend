import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PixabayPageComponent } from './pixabay-page/pixabay-page.component';import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';




@NgModule({
  declarations: [
    PixabayPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    PixabayPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PixabayModule { }
