import { Component, OnInit } from '@angular/core';
import { FetchRequirementsFacultyDashboardService } from 'src/app/fetch-requirements-faculty-dashboard.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  ReceivedList:any = {}
  list = {
    requirementName:'',
    trainingArea:'',
    institution:'',
    category:'',
    trainingHours:''
  }
 
  constructor(private fetch:FetchRequirementsFacultyDashboardService){}

  ngOnInit(): void {
    this.list = this.fetch.getRequirements()
  }

  

}
