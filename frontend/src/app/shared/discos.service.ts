import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disco } from '../models/disco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {

  urldiscos = "http://localhost:2750/discos";

  constructor(private http: HttpClient) { }

  getDiscos()
  {
    return this.http.get(this.urldiscos)
  }

  getDisco(id:number)
  {
    return this.http.get(this.urldiscos + "/" + id)
  }

  postDisco(newdisco: Disco)
  {
    return this.http.post(this.urldiscos, newdisco)
  }

  putDisco(updateDisco: Disco) 
  {
    return this.http.put(this.urldiscos, updateDisco)
  }

  deleteDisco(id:number)
  {
    return this.http.delete(this.urldiscos + "?id=" + id)
  }

}
