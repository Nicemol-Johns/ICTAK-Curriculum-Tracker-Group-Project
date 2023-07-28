import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';
import { FetchRequirementsFacultyDashboardService } from 'src/app/fetch-requirements-faculty-dashboard.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private queries:CurriculumQueriesService,private fetch:FetchRequirementsFacultyDashboardService){}
 
  curriculum={
    s_no:'',
    name:'',
    description:'',
    //reference:'',
    approvedStatus:false
  }

  requirement = this.fetch.getRequirements()


  onSubmit(){
    let dataToSend = {
      s_no: this.curriculum.s_no,
      name: this.curriculum.name,
      description: this.curriculum.description,
      approvedStatus: this.curriculum.approvedStatus,
      requirementName:this.requirement.requirementName,
      trainingArea:this.requirement.trainingArea,
      institution:this.requirement.institution,
      category:this.requirement.category,
      trainingHours:this.requirement.trainingHours
    };
    console.log(dataToSend)
    this.queries.addCurriculum(dataToSend).subscribe((res: any) => {
        console.log(res.data);
        console.log('success');
      }
    );
  }
}
