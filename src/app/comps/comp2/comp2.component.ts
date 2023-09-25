import { Component } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  userName = "Ravi"
  constructor(private _userData: UserDataService){
    this._userData.userName.subscribe(res=>{
      this.userName = res
    })
   }
   onChange(uname: any){
    console.log(uname.value);
    this._userData.userName.next(uname.value)
    
  }

}
