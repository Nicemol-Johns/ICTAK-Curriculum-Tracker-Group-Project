import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchRequirementsFacultyDashboardService {

  constructor() { }

  list = {
    requirementName:'',
    trainingArea:'',
    institution:'',
    category:'',
    trainingHours:''
  }
  

  setRequirements(list:any){
    //console.log(list.requirementName)
     this.list.requirementName = list.requirementName;
     this.list.trainingArea = list.trainingArea;
     this.list.institution = list.institution;
     this.list.category = list.category;
     this.list.trainingHours = list.trainingHours;
     //console.log(`SET METHOD ${this.list}`)
  }

  getRequirements(){
    // console.log(`GETTER METHOD ${this.list}`)
     return this.list;
  }

}
