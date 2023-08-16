import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringtransferService {

  constructor() { }

  studentname=[
    {sname:'ANU',class:10},
    {sname:'THANU',class:11},
    {sname:'SHANU',class:12},
    {sname:'ANANYA',class:1},
    {sname:'AISHU',class:10}

  ]

  getmtd()
  {
    return this.studentname;
  }
}
