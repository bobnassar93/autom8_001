import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './ui/login/login.component'
import { TabsComponent } from './ui/tabs/tabs.component';
import { Tab1Component } from './ui/tabs/tab1/tab1.component';
import { Tab2Component } from './ui/tabs/tab2/tab2.component';
import { Tab3Component } from './ui/tabs/tab3/tab3.component';
import { FunctionsService } from './services/functions.service';
import { FormsModule } from '@angular/forms';
import { Error404Component } from './ui/error404/error404.component';
import { TvRemoteComponent } from './ui/popover/tv-remote/tv-remote.component';
import { FloorComponent } from './ui/elements/floor/floor.component';
import { ItemComponent } from './ui/elements/item/item.component';
import { RoomComponent } from './ui/elements/room/room.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, TabsComponent, Tab1Component, Tab2Component, Tab3Component, Error404Component, TvRemoteComponent, FloorComponent, ItemComponent, RoomComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, FunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
