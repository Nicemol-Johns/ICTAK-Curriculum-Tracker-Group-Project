import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-curriculum-view',
  templateUrl: './curriculum-view.component.html',
  styleUrls: ['./curriculum-view.component.css']
})
export class CurriculumViewComponent {
  constructor(private api:CurriculumQueriesService,private activatedRoute:ActivatedRoute){}

  isEditing = false;
  changeText=false;
  
  data = {
    id:'',
    s_no: '',
    name: '',
    description: '',
    approvedStatus: '',
    requirementName:'',
    trainingArea:'',
    institution:'',
    category:'',
    trainingHours:''
  };

  Edit(){
    this.isEditing=true;
  }

  Save(){
    this.api.editDetails(this.data,this.data.id).subscribe(
      (data) => {
        console.log('success');
        alert('Saving changes')
      }
   );
    this.isEditing=false;
  }

  EditText(){
    this.changeText = true;
    
  }
  SaveText(){
    this.api.editDetails(this.data,this.data.id).subscribe(
      (data) => {
        console.log('success');
      }
   );
    this.changeText = false;
  }

  editCurriculum() {
    if (this.data.approvedStatus !== 'Approved') {
      // If the curriculum is not approved (i.e., pending), handle the edit logic here.
      // For example, navigate to the edit component or show a modal for editing.
      console.log('Editing pending curriculum');
      // Replace the following line with your logic to handle editing pending curriculum
    } else {
      console.log('Editing approved curriculum is not allowed');
    }
  }

  ngOnInit():void{
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDetails(id).subscribe((res:any)=>{
      console.log('calling service')
      this.data.id=res.data._id;
      this.data.s_no=res.data.s_no;
      this.data.name = res.data.name;
      this.data.description=res.data.description;
      this.data.approvedStatus = res.data.approvedStatus;
      this.data.requirementName = res.data.requirementName;
      this.data.trainingArea = res.data.trainingArea;
      this.data.institution = res.data.institution;
      this.data.category = res.data.category;
      this.data.trainingHours = res.data.trainingHours;
      console.log('approvedStatus:', this.data.approvedStatus);
    })

}


}

