import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorsItemComponent } from './components/actors-item/actors-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddActorComponent } from './components/add-actor/add-actor.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ActorsItemComponent,
    HeaderComponent,
    AddActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
