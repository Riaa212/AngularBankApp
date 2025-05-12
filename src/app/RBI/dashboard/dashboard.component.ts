import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private http:HttpClient)
  {
    this.getAllUsers()
    this.getAllTransactions()
  }

  //  accounts = [
  //   { number: '0012345', name: 'Aman Verma', type: 'Savings', balance: 45230, status: 'Active' },
  //   { number: '0088765', name: 'Nisha Patel', type: 'Current', balance: 120000.5, status: 'Inactive' },
  //   { number: '0033456', name: 'Rajiv Singh', type: 'Salary', balance: 85120, status: 'Active' },
  //   { number: '0044567', name: 'Neha Kapoor', type: 'Business', balance: 375000, status: 'Frozen' }
  // ];

  //   transactions = [
  //   { date: new Date('2025-05-10T10:15:00'), name: 'Aman Verma', type: 'Deposit', amount: 20000, status: 'Success' },
  //   { date: new Date('2025-05-09T14:05:00'), name: 'Nisha Patel', type: 'Withdrawal', amount: 5000, status: 'Pending' },
  //   { date: new Date('2025-05-08T18:20:00'), name: 'Rajiv Singh', type: 'Transfer', amount: 12500, status: 'Failed' }
  // ];

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
    })
  }
}
