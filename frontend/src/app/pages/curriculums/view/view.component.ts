import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurriculumQueriesService } from 'src/app/curriculum-queries.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private api:CurriculumQueriesService,private activatedRoute:ActivatedRoute){}

  curriculum={
    id:'',
    name:'',
    area:'',
    referenceLink:''
  }

  ngOnInit():void{
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDetails(id).subscribe((res:any)=>{
      console.log('calling service')
      this.curriculum.id=res.data._id;
      this.curriculum.name = res.data.name;
      this.curriculum.area = res.data.area;
      this.curriculum.referenceLink = res.data.referenceLink;
      console.log(this.curriculum)
    })
  }

}
