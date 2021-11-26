import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppTwo';

  public onSignUp(data: any): void {
    let strMessage: string = "Thanks for signup " + data.name + ".\n";
    strMessage += "Email id " + data.email + " has been registered successfully.";
    alert(strMessage);
  }
}
