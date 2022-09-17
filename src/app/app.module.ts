import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CarlosheadercomponentComponent } from './components/carlosheadercomponent/carlosheadercomponent.component';
import { CarlostimercomponentComponent } from './components/carlostimercomponent/carlostimercomponent.component';
import { CarlossimpleinterestscomponentComponent } from './components/carlossimpleinterestscomponent/carlossimpleinterestscomponent.component';
import { CarloscompoundinterestscomponentComponent } from './components/carloscompoundinterestscomponent/carloscompoundinterestscomponent.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CarlosheadercomponentComponent,
    CarlostimercomponentComponent,
    CarlossimpleinterestscomponentComponent,
    CarloscompoundinterestscomponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
