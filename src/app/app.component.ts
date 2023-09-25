import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subjects';


  exclusive:boolean = false;

  constructor(private _userData: UserDataService){ }

ngOnInit(): void {
  this._userData.exclusive.subscribe(res=>{
    this.exclusive = res
  })
}

}
