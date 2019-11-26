import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {

  constructor(private http: HttpClient) { }

getData() : Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/rest/monitoring/endpoints');
  }
}
