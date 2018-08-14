import { Injectable } from '@angular/core';
import { MUser } from './form.component';


@Injectable()
export class SignupService {
  srevice:MUser
  constructor() {
    this.srevice = new MUser(' ',' ',' ',' ',' ',' ');
   }

  getValues(srevice){
   this.srevice = srevice;
  }
  putvalues(){
    return this.srevice;
  }
}
