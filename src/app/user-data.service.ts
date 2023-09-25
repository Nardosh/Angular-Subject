import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  exclusive = new Subject<boolean>()
  userName = new Subject<string>()

  constructor() { }

}
