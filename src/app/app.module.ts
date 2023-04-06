import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from './components/Header/app.component';
import { About } from './components/About/app.component';
import { Experience } from './components/Experience/app.component';
import { Stack } from './components/Stack/app.component';
import { Contact } from './components/Contact/app.component';

@NgModule({
  declarations: [AppComponent, Header, Experience, Stack, About, Contact],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
