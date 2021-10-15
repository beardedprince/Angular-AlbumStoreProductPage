import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  _albumUrl= "../assets/album.json"
  constructor(private _http: Http) { }

  getAlbum(id: number) {
    console.log(this._albumUrl)
    return this._http.get(this._albumUrl).pipe(
      map(response => {
        return response.json()
      })
    );
  };

}
