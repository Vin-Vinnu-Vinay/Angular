import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor() { }
  fno: number = 100;
  sno: number = 200;
  details: any = [{ name: "Vinay Kumar Gangula", empId: 21335, age: 21, company: "OJAS" },
  { name: "Venkateshwarlu Remadala", empId: 21330, age: 24, company: "OJAS" },
  { name: "Suresh Dhegavath", empId: 21309, age: 26, company: "OJAS" }]
}
