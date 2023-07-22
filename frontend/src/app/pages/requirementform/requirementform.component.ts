import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequirementformService } from 'src/app/requirementform.service';

@Component({
  selector: 'app-requirementform',
  templateUrl: './requirementform.component.html',
  styleUrls: ['./requirementform.component.css']
})
export class RequirementformComponent {
 constructor(private router:Router,private api:RequirementformService){}

Rform=new FormGroup({
  "requirementName":new FormControl(""),
  "trainingArea":new FormControl(""),
  "institution":new FormControl(""),
  "category":new FormControl(""),
  "trainingHours":new FormControl(""),
  
})
onSubmit(){
  console.log(this.Rform.value)
  this.api.Adddetails(this.Rform.value).subscribe(data=>console.log(data))
  console.log(this.Rform.value);
  this.api.Adddetails(this.Rform.value).subscribe(
    (data) => console.log(data),
    (error) => console.error(error)
  );

}


}
