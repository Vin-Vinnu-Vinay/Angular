import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive';

  name: string = "";
  pass: string = "";
  formData: any;
  onClick(data: any) {
    this.name = data.name;
  }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])),
      pass: new FormControl("")
    })
  }
}
