import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() SideBar:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  ToogleSide()
{
  this.SideBar.emit();
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },250);
}
}
