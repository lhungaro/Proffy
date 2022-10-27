import { Component, OnInit } from '@angular/core';
import { Freela } from 'src/app/models/freela';

@Component({
  selector: 'app-freela-list',
  templateUrl: './freela-list.component.html',
  styleUrls: ['./freela-list.component.css']
})
export class FreelaListComponent implements OnInit {

  freelas : Freela[] = [];
  freela : Freela = {
    Id : 1,
    Name : 'Marco Polo' ,
    Whatsapp :'544645' ,
    PhotoURL : 'dfdsfsd',
    Biography : 'Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et dol' ,
    Area : 'Design',
    Price : '20',
    Curriculum :'asdasdasd',
    Company : {
      CompanyRanking: 3
    }
  }


  constructor() { }

  ngOnInit(): void {
    this.freelas.push(this.freela)
    this.freelas.push(this.freela)
    this.freelas.push(this.freela)
    this.freelas.push(this.freela)
    this.freelas.push(this.freela)
    this.freelas.push(this.freela)
    this.freelas.push(this.freela)
    this.freelas.push(this.freela)
    this.freelas.push(this.freela)
  }

}
