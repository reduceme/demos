import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';

import {AppRoutingModule} from './app-routing.module';

@NgModule({
  //本模块声明的组件模板需要的类所在的其它模块。
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  //声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  //服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
  providers: [HeroService],
  //指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
  bootstrap: [AppComponent]
})
export class AppModule {
}
