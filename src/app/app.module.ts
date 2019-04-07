import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCardModule,MatRadioModule} from '@angular/material';
import { ExamDashboardComponent } from './exam-dashboard/exam-dashboard.component';
import { ResultDasboardComponent } from './result-dasboard/result-dasboard.component';
import { InstructionsPageComponent } from './instructions-page/instructions-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamDashboardComponent,
    ResultDasboardComponent,
    InstructionsPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
