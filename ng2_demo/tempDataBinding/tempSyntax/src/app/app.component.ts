import {Component} from '@angular/core';
import {Hero} from './hero'

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, "aa"),
    new Hero(2, "ba"),
    new Hero(3, "ca"),
    new Hero(4, "da"),
  ];
  myHero = this.heroes[0];
}
