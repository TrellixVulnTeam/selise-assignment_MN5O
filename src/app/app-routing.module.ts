import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './cv/cv.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { ResultComponent } from './result/result.component'

const routes: Routes = [
  {path: '', component: CVComponent},
  {path: 'cv', component: CVComponent},
  {path: 'interviewer', component: InterviewerComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
