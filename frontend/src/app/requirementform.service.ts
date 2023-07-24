import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequirementformService {
  
  private baseUrl = 'http://localhost:3000/curriculum-tracker';

  constructor(private http:HttpClient) { }
  
  addRequirement(requirementData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/rform`, requirementData);
  }

  getRequirements(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/rlist`);
  }

}
