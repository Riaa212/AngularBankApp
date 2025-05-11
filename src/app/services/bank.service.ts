import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { 
    
  }
  getAllBank()
  {
    return this.http.get("http://localhost:2424/bank/getAll");
  }
}
