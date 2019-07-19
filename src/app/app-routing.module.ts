import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeComponent } from './code/code.component';
import { FunComponent } from './fun/fun.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'code', component: CodeComponent},
  { path: 'resume', component: ResumeComponent},
  { path: 'fun', component: FunComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
