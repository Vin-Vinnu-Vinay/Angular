import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilla-bacha',
  templateUrl: './pilla-bacha.component.html',
  styleUrls: ['./pilla-bacha.component.css']
})
export class PillaBachaComponent implements OnInit {
  @Input() public message: string = "";
  @Input("Alert-pop") public message1: string = "";
  public showAlert(): void {
    alert(this.message1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
