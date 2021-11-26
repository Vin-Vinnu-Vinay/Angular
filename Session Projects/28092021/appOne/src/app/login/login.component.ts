import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit(): void {
  }
  Login(Form: any) {
    if (Form.uname === "Vinay" && Form.upass === "143Vinay") {
      alert(`Hi ${Form.uname}, welcome`);
      this.rout.navigate(["/register"]);
    }
    else {
      alert("I don't know you...Please close browser")
    }
    console.log(Form);

  }
}
