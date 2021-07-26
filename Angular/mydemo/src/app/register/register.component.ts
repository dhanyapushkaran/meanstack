import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import{Router} from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ename=""
  acno=""
  pswd=""

  
  constructor(private router:Router, private data1:DataService) { }

  ngOnInit(): void {
  }
  register(){
   var username = this.ename
   var acno=this.acno
   var password= this.pswd
   var accDetails=this.data1.users
   if(acno in accDetails){
     alert("user already exist")
   }
   else{
     accDetails[acno]= {acno,username,password,balance:0}
     console.log(accDetails);
     
     alert("register successfully")
 this.router.navigateByUrl('dashboard')
   }


  }

}
