import { Company } from "./company";
import { UserProject } from "./userProject";

export interface Freela{
   Id : number;
   Name : string;
   Whatsapp : string;
   PhotoURL : string;
   Biography : string;
   Area : string;
   Price : string;
   Curriculum : string;
   Company? : Company;
   UserProject? : UserProject[];
}
