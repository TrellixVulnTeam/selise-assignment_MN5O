import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
  ngOnInit(): void {

  }
  displayedColumns: string[] = ['interviewer', 'interviewee', 'date', 'time'];
  dataSource = new MatTableDataSource<Schedule>(APPLICATION_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Schedule {
  interviewer: string;
  interviewee: string;
  date: string;
  time: string;
}

const APPLICATION_DATA: Schedule[] = [
  {interviewer: 'Sangay', interviewee: 'Zangmo', date: '24/6/2021', time: '16:30'},
  {interviewer: 'Sangay', interviewee: 'Wangdhi', date: '23/62021', time: '16:00'},
  {interviewer: 'Pema', interviewee: 'Phurpa', date: '30/6/2021', time: '17:00'},
  {interviewer: 'Choki', interviewee: 'Rinzin', date: '24/6/2021', time: '16:30'},
  {interviewer: 'Sonam', interviewee: 'Ugyen', date: '30/6/2021', time: '17:30'},
  {interviewer: 'Tashi', interviewee: 'Namkha', date: '28/6/2021', time: '17:00'},
  {interviewer: 'Sangay', interviewee: 'Ngawang', date: '29/6/2021', time: '16:00'},
  {interviewer: 'Sonam', interviewee: 'Choki', date: '29/6/2021', time: '15:00'},
  {interviewer: 'Kinley', interviewee: 'Choden', date: '24/6/2021', time: '16:00'},
  {interviewer: 'Tashi', interviewee: 'Jampa', date: '25/6/2021', time: '17:00'}
];


