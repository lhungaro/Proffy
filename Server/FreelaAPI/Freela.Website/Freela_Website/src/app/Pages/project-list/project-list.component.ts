import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  company : Company = {
    Id:1,
    Name: "Nubank",
    CompanyStatus: 4,
    CompanyRanking: 4,
    CPNJ: "123132123/45",
    CadastreDate: Date.now().toString()
  }
  project : Project[] = [];
  projects : Project = {
    Id: 1,
    Title:"Criar uma vitrine para influenciadores",
    CreateDate:Date.now().toString(),
    Proposes:15,
    Description:"a ideia é criar um site sobre a plataforma wordpress onde influenciadores digitais podem se inscrever e divulgar o seu trabalho",
    Status:1,
    Ranking:5,
    Area:"Ti e Programação",
    ValueToPay:"50",
    categories:"react",
    contaxt:"987095084",
    Company:this.company
  }



  constructor() { }

  ngOnInit(): void {
    this.project.push(this.projects)
    this.project.push(this.projects)
    this.project.push(this.projects)
    this.project.push(this.projects)
    this.project.push(this.projects)
    this.project.push(this.projects)
    this.project.push(this.projects)
    this.project.push(this.projects)
    this.project.push(this.projects)
    this.project.push(this.projects)
  }

}
