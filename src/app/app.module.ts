import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent,
         HomeComponent,
         CodeComponent,
         ResumeComponent,
         FunComponent,
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CodeComponent,
    ResumeComponent,
    FunComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
