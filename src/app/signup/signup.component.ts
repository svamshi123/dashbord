import { Component, OnInit } from '@angular/core';
import { MUser } from '../form.component';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  viwe:MUser
  constructor(private sign:SignupService) {
    this.viwe = sign.putvalues();
   }

  ngOnInit() {
  }

}
