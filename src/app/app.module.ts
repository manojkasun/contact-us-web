import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AddMessagesComponent } from './messages/add-messages/add-messages.component';
import { ViewMessagesComponent } from './messages/view-messages/view-messages.component';
import { UpdateMessageComponent } from './messages/update-message/update-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    AddMessagesComponent,
    ViewMessagesComponent,
    UpdateMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
