import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private queries:CurriculumQueriesService){}
 
  curriculum={
    s_no:'',
    name:'',
    description:'',
    //reference:'',
    approvedStatus:false
  }

  onSubmit(){

    this.queries.addCurriculum(this.curriculum).subscribe((res: any) => {
        console.log(res.data);
        console.log('success');
      }
    );
  }
}
