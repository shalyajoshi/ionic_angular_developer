// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class RandomuserService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomUser(): any{
    return this.http.get('https://randomuser.me/api/?results=100').pipe(map((response: any) => response));
  }
}

