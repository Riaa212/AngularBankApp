import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  transactionsFilter: any[] = [];  
  filterForm: any;


  constructor(private http:HttpClient,private fb:FormBuilder)
  {
  this.filterForm = this.fb.group({
  fromDate: [''],
  toDate: ['']
  });
    this.getAllUsers()
    this.getAllTransactions()
  }

  userService=inject(UserService)

  userdata:any
  transactionData:any
  getAllUsers()
  {
    this.userService.getAllUsers().subscribe((rs)=>{
      this.userdata=rs
    // console.log("rs==="+rs)
    })
  }

  getAllTransactions()
  {
    this.http.get("http://localhost:2424/account/getAllTransactions").subscribe((res)=>{
      this.transactionData=res
      // console.log(this.transactionData)
    })
  }

  // 
  

  
  filterTransactions()
  {
 const body = this.filterForm.value;
  this.http.post<any[]>('http://localhost:2424/account/filter', body)
    .subscribe(data => this.transactionsFilter = data);
  }
}
