import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-bank',
  standalone: false,
  templateUrl: './view-bank.component.html',
  styleUrl: './view-bank.component.css'
})
export class ViewBankComponent {

  bankid:any
  branchData:any
  bankData:any
  bankname:any
  constructor(private route:ActivatedRoute,private http:HttpClient)
  {
    this.bankid = this.route.snapshot.paramMap.get('id');
    // this.getAllBranchByBankName()
    this.getBankById(this.bankid)
  }


  getBankById(id:any)
  {
    this.http.get("http://localhost:2424/bank/getBankById/"+id).subscribe((res)=>{
      this.bankData=res
      this.bankname=this.bankData.bankName
      this.getAllBranchByBankName(this.bankname)
          // console.log(this.bankname)
    })
  }

  getAllBranchByBankName(bname:any)
  {
    // console.log(this.bankname)
    this.http.get("http://localhost:2424/branch/getAllBranch/"+bname).subscribe((res)=>{
      this.branchData=res
    })
  }
  getInitials(fullName: string): string {
    if (!fullName) return '';
    const words = fullName.trim().split(' ');
    let initials = words[0]?.charAt(0).toUpperCase();
    if (words.length > 1) {
    initials += words[1]?.charAt(0).toUpperCase();
    }
    return initials;
    }

}
