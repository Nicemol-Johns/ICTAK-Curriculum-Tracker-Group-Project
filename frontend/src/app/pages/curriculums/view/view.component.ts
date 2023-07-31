import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private api:CurriculumQueriesService,private activatedRoute:ActivatedRoute,private router:Router){}

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
      
    })
    }
    approve(){
      this.api.approveCurriculum(this.data.id).subscribe(
        (data)=>{
          console.log('curriculum approved');
          alert('Aprroved successfully')
          // this.router.navigate(['/approve']);
        },
        (error)=>{
          console.error('Failed to approve curriculum',error);
        }
      )
    }
  }


   // this.router.navigate(["/dashboard/curriculum-list"])



  
    
  



