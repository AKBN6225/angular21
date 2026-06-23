import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BasicDetailsService {

  constructor(private http: HttpClient){
  };


callEffectsApi() {
  return this.http.get("https://jsonplaceholder.typicode.com/users");
}




}
