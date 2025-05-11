import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) 
  {

  }

  getAllUsers()
  {
    console.log("get all users called..")
  return this.http.get("http://localhost:2424/user/getAll");
  }

}
