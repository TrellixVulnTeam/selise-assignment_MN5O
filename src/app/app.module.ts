import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import { MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CVComponent } from './cv/cv.component';
import { ApplicationComponent } from './application/application.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { ResultComponent } from './result/result.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';
import { CvlistComponent } from './cvlist/cvlist.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    ApplicationComponent,
    InterviewerComponent,
    ResultComponent,
    FormComponent,
    AdminComponent,
    CvlistComponent,
    ScheduleComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatMenuModule,
        FlexModule,
        FlexLayoutModule,
        MatPaginatorModule,
        MatTableModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        FontAwesomeModule,
        MatDialogModule
    ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [FormComponent]
})
export class AppModule { }
