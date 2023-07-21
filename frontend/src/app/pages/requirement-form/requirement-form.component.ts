import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css']
})
export class RequirementFormComponent implements OnInit {
  requirementForm!: FormGroup;

  requirementName!: string;
  trainingArea!: string;
  institution!: string;
  category!: string;
  trainingHours!: number;
  fileReference!: string;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.requirementForm = this.formBuilder.group({
      requirementName: ['', Validators.required],
      trainingArea: ['', Validators.required],
      institution: ['', Validators.required],
      category: ['', Validators.required],
      trainingHours: [0, Validators.required],
      fileReference: ['']
    });
  }

  submitForm() {
    if (this.requirementForm.valid) {
      const formData = this.requirementForm.value;
      console.log(formData);
    } else {
      // Handle form validation errors here.
    }
  }

  // Add the onFileSelected method to handle file selection from the input element.
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // Process the selected file here, e.g., read its content or save it to a variable.
    // You can also update the fileReference property with the file name or any other relevant information.
    this.fileReference = file.name;
  }
}
