import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RequirementformService } from 'src/app/requirementform.service';

@Component({
  selector: 'app-requirementform',
  templateUrl: './requirementform.component.html',
  styleUrls: ['./requirementform.component.css']
})
export class RequirementformComponent implements OnInit {
  Rform: FormGroup;

  constructor(private router: Router, private api: RequirementformService, private formBuilder: FormBuilder) {
    this.Rform = this.formBuilder.group({
      id:new FormControl(''),
      requirementName: new FormControl(''),
      trainingArea: new FormControl(''),
      institution: new FormControl(''),
      category: new FormControl(''),
      trainingHours: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.addRequirement(this.Rform.value).subscribe(
      (data) => {
        console.log('Requirement added successfully:', data);
        this.router.navigate(['/dashboard/requirement-list']);
      },
      (error) => console.error('Error adding requirement:', error)
    );
  }
}



