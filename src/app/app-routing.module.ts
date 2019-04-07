import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExamDashboardComponent } from './exam-dashboard/exam-dashboard.component';
import { ResultDasboardComponent } from './result-dasboard/result-dasboard.component';

import { InstructionsPageComponent } from './instructions-page/instructions-page.component';

const routes: Routes = [
  { path: 'questions', component: ExamDashboardComponent },
  { path: 'result', component: ResultDasboardComponent },
  { path: 'test', component: InstructionsPageComponent },
  { path: '', redirectTo: 'test', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
