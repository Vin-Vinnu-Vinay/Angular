import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent implements OnInit {

  constructor(private emp: EmpServiceService) { }

  ngOnInit(): void {
    this.sub();
  }
  res: number = 0;
  sub() {
    this.res = this.emp.fno - this.emp.sno;
  }
}
