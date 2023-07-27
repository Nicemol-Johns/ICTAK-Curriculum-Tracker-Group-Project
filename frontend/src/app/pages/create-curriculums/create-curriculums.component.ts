import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-create-curriculums',
  templateUrl: './create-curriculums.component.html',
  styleUrls: ['./create-curriculums.component.css']
})
export class CreateCurriculumsComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.navigate(['/requirements'])
  }

}
