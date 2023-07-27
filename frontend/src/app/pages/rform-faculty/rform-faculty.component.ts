import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementformService } from 'src/app/requirementform.service';

@Component({
  selector: 'app-rform-faculty',
  templateUrl: './rform-faculty.component.html',
  styleUrls: ['./rform-faculty.component.css']
})
export class RformFacultyComponent {
  list:any[]=[];

  constructor(private router:Router,private api:RequirementformService){}

  ngOnInit(){
    this.api.getRequirements().subscribe((res:any)=>{
      this.list=res; 
    },
    (error) => {
      console.error('Error fetching requirements:', error);
    }
    )
  }
}
