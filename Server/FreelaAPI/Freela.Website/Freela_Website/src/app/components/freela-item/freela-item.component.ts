import { Component, Input, OnInit } from '@angular/core';
import { Freela } from 'src/app/models/freela';

@Component({
  selector: 'app-freela-item',
  templateUrl: './freela-item.component.html',
  styleUrls: ['./freela-item.component.css']
})
export class FreelaItemComponent implements OnInit {

  @Input() freela?: Freela;

  constructor() { }

  ngOnInit(): void {
  }

}
