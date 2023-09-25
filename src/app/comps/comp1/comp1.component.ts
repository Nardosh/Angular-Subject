import { Component } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  userName = "Ravi"
  myInputValue: string = '';

  constructor(private _userData: UserDataService){
    this._userData.userName.subscribe(res=>{
      this.userName = res
    })
   }

  onChange(uname: any){
    console.log(uname.value);
    this._userData.userName.next(uname.value)
    this.myInputValue = '';
    
  }

}
