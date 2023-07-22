import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequirementformService {
  
  private baseUrl = 'http://localhost:3000/curriculum-tracker';

  constructor(private http:HttpClient) { }
  Adddetails(data:any){
    return this.http.post(`${this.baseUrl}/rform`,data)
      }


      getForms(){
        return this.http.get(`${this.baseUrl}/rlist`)
      }


}
