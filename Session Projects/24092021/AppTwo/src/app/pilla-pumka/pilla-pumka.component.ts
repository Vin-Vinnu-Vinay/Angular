import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-pilla-pumka',
  templateUrl: './pilla-pumka.component.html',
  styleUrls: ['./pilla-pumka.component.css']
})
export class PillaPumkaComponent implements OnInit {
  ngOnInit(): void {

  }
  public data: any = {};
  
  @Output() onSignUp = new EventEmitter<any>();
  
  public onSubmit(): void {
    this.onSignUp.emit(this.data);
  }
}
