import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth : AngularFireAuth,
    public router : Router,
    public db : AngularFireDatabase) { }

  ngOnInit() {
  }

  singup(email,password,name){

    this.auth.auth.createUserWithEmailAndPassword(email,password).then( ()=> {

    this.db.list("users").push({
      email:email,
      name:name,
      image:"https://i.stack.imgur.com/l60Hf.png"
    })

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
