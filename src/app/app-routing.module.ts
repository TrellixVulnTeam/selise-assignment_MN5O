import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CVComponent } from './cv/cv.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { ResultComponent } from './result/result.component'
import { AdminComponent} from "./admin/admin.component";
import { ApplicationComponent } from "./application/application.component";
import { CvlistComponent } from "./cvlist/cvlist.component";
import { ScheduleComponent } from "./schedule/schedule.component";

const routes: Routes = [
  {path: '', component: ApplicationComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'cv', component: CVComponent},
  {path: 'interviewer', component: InterviewerComponent},
  {path: 'result', component: ResultComponent},
  {path: 'application', component: ApplicationComponent},
  {path: 'cvlist', component: CvlistComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
