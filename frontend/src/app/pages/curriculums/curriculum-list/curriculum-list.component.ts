import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-curriculum-list',
  templateUrl: './curriculum-list.component.html',
  styleUrls: ['./curriculum-list.component.css']
})
export class CurriculumListComponent implements OnInit{
  
  constructor(private getCurriculum:CurriculumQueriesService,private router:Router){}

  curriculums: any[] = [];

  ngOnInit(): void {
    this.getCurriculum.fetchCurriculums().subscribe((res:any)=>{
      this.curriculums = res.data;
   })
  }

  view(id:any){
    this.router.navigate(['dashboard/curriculum-list/view/'+id]);
  }

  edit(id:any){
    this.router.navigate(['dashboard/curriculum-list/edit/'+id]);
  }

  delete(id:any){
    this.getCurriculum.deleteCurriculum(id).subscribe((res:any)=>{console.log('Success')})
    this.getCurriculum.fetchCurriculums().subscribe((res:any)=>{
    this.curriculums = res.data
  })

}
}
