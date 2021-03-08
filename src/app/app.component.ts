import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopComponent } from './pop/pop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  constructor(public dialog: MatDialog) {}

  ngOnInit(){
     this.dialog.open(PopComponent)
  }

    
  }




