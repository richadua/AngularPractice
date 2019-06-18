import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './WarningAlert/WarningAlert.component';
import { SuccessAlert } from './SuccessAlert/SuccessAlert.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
