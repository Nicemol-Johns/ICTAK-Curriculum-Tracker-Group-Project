import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumQueriesService {

  constructor(private http:HttpClient) { }

  fetchCurriculums(){
    console.log('Sending request')
    return this.http.get(`http://localhost:3000/curriculum-tracker/fetchCurriculums`);
  }

  getDetails(id:any){
    return this.http.get(`http://localhost:3000/curriculum-tracker/curriculum/${id}`); 
  }



}
