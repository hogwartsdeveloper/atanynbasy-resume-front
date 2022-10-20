import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { CubeComponent } from './cube/cube.component';

const socketConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {}}

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(socketConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
