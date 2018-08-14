import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
@Component({
    selector: 'app-form',
    templateUrl: 'form.component.html',
    styles:[`
        nav{
            background:gray;
        }
        h1{
            text-align:center;
            color:#fff;
        }
        p{
            color:red;
            font-size:large;
        }
        input.ng-valid{
            border-left:solid 7px green;
        }
        input.ng-invalid{
            border-left:solid 7px red;
        }   
    `
    ]
})
export class FormComponent implements OnInit {
    //@Input()
    usr:MUser

    constructor(private router:Router,private sing:SignupService) {
      
     }
    ngOnInit() { 
        this.usr =new MUser(' ',' ',"sai@gmai.com",
       91,' ',' ')
    }
    SubmitForm(){
        //alert("FirstName"+this.usr.FirstName+"LastName"+this.usr.LastName+" Address"+this.usr.Address)
        
        this.router.navigate(['./signup']);
        this.sing.getValues(this.usr);
    }
    // onsubmit(){
    //     this.router.navigate(['./signup']);
    // }
}
export class MUser{
  FirstName:string
  LastName:string
  EmailAddress:string
  ContactNumber:number
  birthday:Date
  Address:string
  constructor(Fname,Lname,email,contact,birth,address){
      this.FirstName =Fname
      this.LastName = Lname
      this.EmailAddress =email
      this.ContactNumber=contact
      this.birthday = birth;
      this.Address =address
  }
}