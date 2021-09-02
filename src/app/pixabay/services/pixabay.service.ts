import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Hit,Werr } from '../interface/pixabay.interface';

@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  private apiKey     : string = '13119377-fc7e10c6305a7de49da6ecb25';
  private servicioUrl: string = 'https://pixabay.com/api';
  private _historial : string[] = [];

  public resultados: Hit[] = [];


  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient ) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  

    // if( localStorage.getItem('historial') ){
    //   this._historial = JSON.parse( localStorage.getItem('historial')! );
    // }

  }



  buscarImages( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();
    
    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify( this._historial )  );
    }

    const params = new HttpParams()
          .set('key', this.apiKey)
          .set('q', query );
    this.http.get<Werr>(`${ this.servicioUrl }`, { params } )
      .subscribe( ( resp ) => {
        this.resultados = resp.hits;
        localStorage.setItem('resultados', JSON.stringify( this.resultados )  );
      });

  }

  buscarCategories(query: string = ''){
    const params = new HttpParams()
          .set('key', this.apiKey)
          .set('category', query );
    this.http.get<Werr>(`${ this.servicioUrl }`, { params } )
      .subscribe( ( resp ) => {
        this.resultados = resp.hits;
        localStorage.setItem('resultados', JSON.stringify( this.resultados )  );
      });
    
  }
}
