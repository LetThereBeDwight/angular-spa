import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule, MatGridListModule, MatListModule, MatIconModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent,
         CodeComponent,
         FunComponent,
         HomeComponent,
         ResumeComponent,
         NavComponent,
} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    FunComponent,
    HomeComponent,
    ResumeComponent,
    NavComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
