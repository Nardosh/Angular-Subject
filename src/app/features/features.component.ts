import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit , OnDestroy{
  
  userName = "Druva";
  constructor(private _userData: UserDataService){
    this._userData.userName.subscribe(res=>{
      this.userName = res
    })
   }
  ngOnInit(): void {
    this._userData.exclusive.next(true)
  }
  ngOnDestroy(): void {
    this._userData.exclusive.next(false)
  }

}
