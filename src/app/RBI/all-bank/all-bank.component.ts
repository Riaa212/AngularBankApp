import { Component, inject } from '@angular/core';
import { BankService } from '../../services/bank.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-bank',
  standalone: false,
  templateUrl: './all-bank.component.html',
  styleUrl: './all-bank.component.css'
})
export class AllBankComponent {
    
  bankservice=inject(BankService)
  bankData:any
  bankid:any

  constructor(private http:HttpClient,private route:ActivatedRoute)
  {
    this.bankid = this.route.snapshot.paramMap.get('id');
    this.getAllBanks()
  }

  getAllBanks()
  {
    this.bankservice.getAllBank().subscribe((res)=>{
      this.bankData=res
    });
  }
}
