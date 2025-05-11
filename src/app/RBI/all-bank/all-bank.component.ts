import { Component, inject } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-all-bank',
  standalone: false,
  templateUrl: './all-bank.component.html',
  styleUrl: './all-bank.component.css'
})
export class AllBankComponent {
    
  bankservice=inject(BankService)
  bankData:any
  constructor()
  {
    this.getAllBanks()
  }
  getAllBanks()
  {
    this.bankservice.getAllBank().subscribe((res)=>{
      this.bankData=res
    });
  }
}
