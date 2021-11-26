import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private emp: EmpServiceService) { }

  ngOnInit(): void {
    this.add()
  }
  res: number = 0;
  add() {
    this.res = this.emp.fno + this.emp.sno;
  }

}
