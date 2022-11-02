import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import { PlanetComponent } from './planet/planet.component';
import {ToolbarModule} from "./modules/toolbar/toolbar.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MainModule} from "./modules/main/main.module";

const socketConfig: SocketIoConfig = { url: 'http://localhost:3000', options: {}};

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent
  ],
    imports: [
        BrowserModule,
        SocketIoModule.forRoot(socketConfig),
        HttpClientModule,
        ToolbarModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        MainModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
