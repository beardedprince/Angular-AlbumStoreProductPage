import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators/map';
import { Album } from './album';
@Injectable()
export class ProductService {

  private _albumUrl= "../assets/album.json"
  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {
    console.log(this._albumUrl)
    return this._http.get(this._albumUrl).pipe( map((response) =><Album>response.json())
    );
  }

}
