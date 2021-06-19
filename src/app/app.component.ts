import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Assignment-CV-Bank';

  @ViewChild(MatSidenav) sidenav! : MatSidenav;

  constructor(private obsever: BreakpointObserver, private router: Router) {

  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    this.obsever.observe(['(max-width: 800px)'])
    .subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  redirectToApplicaton(): void {
    this.router.navigateByUrl( '/application');
  }
}
