import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 @Input() name:string;
 @Input() val:string;
  constructor() { }

  ngOnInit(): void {
  }

}
