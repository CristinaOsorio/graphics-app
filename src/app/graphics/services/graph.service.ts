import { Data } from './../../interfaces/data.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private URL_APP : string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getData(): Observable<Data> {
    return this.http.get<Data>(`${this.URL_APP}/data`);
  }

  getDataForGraph(): Observable<{
    labels: string[];
    values: number[];
}> {
    return this.getData()
      .pipe(
        delay(1000),
        map((data) => {
          const labels = Object.keys(data);
          const values = Object.values(data);

          return {
            labels,
            values
          }
        })
      )
  }
}
