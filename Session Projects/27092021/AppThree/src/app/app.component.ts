import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // name: string = "";
  // age: number = 0;
  // address: string = "";
  lst: object[] = [];

  addData(name: string, age: number, address: string) {
    let obj = { Name: name, Age: age, Address: address }
    this.lst.push(obj);
  }
}
