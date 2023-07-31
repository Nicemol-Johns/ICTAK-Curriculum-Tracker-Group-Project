import { Component, OnInit } from '@angular/core';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
pendingCurriculums: any[]=[];

constructor(private api: CurriculumQueriesService){}

ngOnInit(): void {
  this.api.fetchPendingCurriculums().subscribe((res:any)=>{
    this.pendingCurriculums = res.data.filter((curriculum: any)=> curriculum.approvedStatus === false);
  })
}
}
