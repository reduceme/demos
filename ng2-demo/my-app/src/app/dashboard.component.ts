import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

/*
* 创建一个heroes数组属性。
* 在构造函数中注入HeroService，并且把它保存在一个私有的heroService字段中。
* 在 Angular 的ngOnInit生命周期钩子里面调用服务来获得英雄数据。
*/

@Component({
  selector: 'my-dashboard',
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
