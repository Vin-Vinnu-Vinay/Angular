import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpDemo';
  empData: any;
  user: any;
  constructor(private emp: EmployeeService) {
    this.emp.getDetails().subscribe(data => { this.empData = data })
    this.emp.getDet().subscribe(data => { this.user = data })
  }
}
