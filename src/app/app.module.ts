import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from './components/Header/app.component';
import { About } from './components/About/app.component';

@NgModule({
  declarations: [AppComponent, Header, About],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
