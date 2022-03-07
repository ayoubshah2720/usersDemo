import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  allUsers:any[]=[]
  usersData = new Subject<any>();
  constructor() { }

  getAllData(value:any){
    console.log("service value=>",value)
    if(this.allUsers.length > 0){
      const index = this.allUsers.findIndex((x: { mobileNumber: any; }) => x.mobileNumber == value.mobileNumber)
      if(index == -1){
        this.allUsers.push(value)
      } else {
        alert('Data is Already exist')
      }
    } else {
      this.allUsers.push(value)
  }
}

  public allUsersInformationSet(value:any) {
    this.usersData.next(value);
  }

  public allUsersInformationGet(): Observable<any> {
    return this.usersData.asObservable();
  }
}
