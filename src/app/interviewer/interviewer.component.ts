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

  teams = [
    {name: 'UX Team'},
    {name: 'UI Team'},
    {name: 'FE Team'},
    {name: 'BE Team'},
    {name: 'QA Team'},
    {name: 'BA Team'}
  ]

redirectToResult(): void {
    this.router.navigateByUrl('/schedule');
  }
}
