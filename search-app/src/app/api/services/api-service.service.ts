import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Character } from 'src/app/models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private urlApi = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getAllData(pageValue?: number): Observable<any> {
    let page = pageValue ?? 1;

    return this.http.get<any>(`${this.urlApi}`+'/character/?'+`${page}`).pipe(
      map(res => res?.results as Character[]));    
  }

  getDetails(id: number) {
    return this.http.get<any>(`${this.urlApi}`+'/character/'+`${id}`).pipe(
      map(res => res?.results as Character));    
  }

}
