import { Company } from "./company";
import { UserProject } from "./userProject";

export interface Project{
    Id:number ;
    Title:string ;
    CreateDate:string;
    Proposes:number ;
    Description:string ;
    Status:number ;
    Ranking:number ;
    Area:string ;
    ValueToPay:string;
    categories:string;
    contaxt:string;
    Company:Company ;
    UserProject?: UserProject[] ;
}
