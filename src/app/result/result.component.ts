import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  headers = ["Name", "Rating", "Position", "Status"];

  constructor() { }

  ngOnInit(): void {
  }

  rows = [
    {
      "Name" : "Sonam",
      "Rating" : "70",
      "Position" : "Back-end",
      "Status" : "Selected"
    },
    {
      "Name" : "Rinchen",
      "Rating" : "75",
      "Position" : "Front-end",
      "Status" : "Selected"
    },
    {
      "Name" : "Ngawang",
      "Rating" : "50",
      "Position" : "User Interference",
      "Status" : "Not Selected"
    },
    {
      "Name" : "Tashi",
      "Rating" : "",
      "Position" : "Back-end",
      "Status" : "Did not turn up"
    }
  ]
}
