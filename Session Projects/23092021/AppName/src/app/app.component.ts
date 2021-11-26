import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to me';
  name = 'I consists of: ';
  vari = false;
  myself: string[] = ["Nature", 'Character', 'Behaviour', 'and What-not'];
  country: string[] = ['India-Goa', 'TommorowLand-Belgium', 'France-Paris', 'UK-London', 'Netherlands-Amsterdam'];
  // selt = document.getElementById("s1").value
  // opt = selt.options[selt.selectedIndex]
  changeto() {
    alert("Are you sure? You want to change country");
    this.vari = true;
  }
}
