import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  ngOnInit(): void {

  }
  displayedColumns: string[] = ['name', 'position', 'rating', 'status'];
  dataSource = new MatTableDataSource<ScoreSheet>(APPLICATION_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface ScoreSheet {
  name: string;
  position: string;
  rating: number;
  status: string;
}

const APPLICATION_DATA: ScoreSheet[] = [
    {name: 'Sangay', position: 'Back End', rating: 70, status: 'Selected'},
    {name: 'Dorji', position: 'Front End', rating: 45, status: 'Not Selected'},
    {name: 'Pema', position: 'User Interface', rating: 70, status: 'Selected'},
    {name: 'Choki', position: 'Front End', rating: 75, status: 'Selected'},
    {name: 'Sonam', position: 'User Experience', rating: 0, status: 'Did Not Turn Up'},
    {name: 'Dorji', position: 'Back End', rating: 80, status: 'Selected'},
    {name: 'Namgay', position: 'User Interface', rating: 60, status: 'Selected'},
    {name: 'Jamtsho', position: 'Back End', rating: 68, status: 'Selected'},
    {name: 'Kinley', position: 'Front End', rating: 90, status: 'Selected'},
    {name: 'Phuntsho', position: 'User Experience', rating: 77, status: 'Selected'}
];


