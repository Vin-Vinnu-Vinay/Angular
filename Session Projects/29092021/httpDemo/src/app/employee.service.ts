import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from 'employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: string = "https://jsonplaceholder.typicode.com/users";
  empUrl: any = "/assets/emp.json";
  outUrl: any = "";
  constructor(private http: HttpClient) { }
  getDetails() {
    return this.http.get(this.baseUrl)
  }
  // getDet() {
  //   this.outUrl = this.http.get(this.empUrl);
  // }
  getDet(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.empUrl);
  }
}
