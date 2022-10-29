import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { PlanetComponent } from './planet/planet.component';
import {ToolbarModule} from "./modules/toolbar/toolbar.module";

const socketConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {}}

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent
  ],
    imports: [
        BrowserModule,
        SocketIoModule.forRoot(socketConfig),
        ToolbarModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
