import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
  departments = [
    {
      id: 1,
      name: 'UX'
    },
    {
      id: 2,
      name: 'UI'
    },
    {
      id: 3,
      name: 'FE'
    },
    {
      id: 4,
      name: 'BE'
    },
    {
      id: 5,
      name: 'QA'
    },
    {
      id: 6,
      name: 'BA'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToInterviewDepartment(): void {
    this.router.navigateByUrl('/interviewer');
  }

}
