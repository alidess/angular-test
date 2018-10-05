import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth : AngularFireAuth,
    public router : Router) { }

  ngOnInit() {
  }

  singup(email,password){

    this.auth.auth.createUserWithEmailAndPassword(email,password).then( ()=> {
     this.router.navigate(['/']);
    }).catch( err => {


      if(err.message = "The email address is already in use by another account."){
        $(".alert").text("ايميل مستعمل");
      }
      
      $(".alert").show();

      setTimeout(function(){
      $(".alert").fadeOut();
      },4000)

    })

  }

}
