import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarlosheadercomponentComponent } from './components/carlosheadercomponent/carlosheadercomponent.component';
import { CarlostimercomponentComponent } from './components/carlostimercomponent/carlostimercomponent.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CarlosheadercomponentComponent, CarlostimercomponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
