import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.scss']
})
export class InterviewerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

redirectToResult(): void {
    this.router.navigateByUrl('/result');
  }
}
