import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
pendingCurriculums: any[]=[];

constructor(private api: CurriculumQueriesService,private router:Router){}

ngOnInit(): void {
  this.api.fetchPendingCurriculums().subscribe((res:any)=>{
    this.pendingCurriculums = res.data.filter((curriculum: any)=> curriculum.approvedStatus === false);
  })
}
view(id:any){
  this.router.navigate(['dashboard/curriculum-list/view/'+id]);
}
}
