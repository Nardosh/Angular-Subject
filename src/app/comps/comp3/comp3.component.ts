import { Component } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';


@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {

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
