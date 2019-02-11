import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent,
         CodeComponent,
         FunComponent,
         HomeComponent,
         ResumeComponent,
         TopNavComponent,
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    FunComponent,
    HomeComponent,
    ResumeComponent,
    TopNavComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
