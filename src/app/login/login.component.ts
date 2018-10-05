import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth : AngularFireAuth,public router : Router) { }

  ngOnInit() {
  }

 login(email,password){
  this.auth.auth.signInWithEmailAndPassword(email,password).then( ()=> {
    this.router.navigate(['/dashboard'])
  }).catch(err => {
    console.log(err.message);
  })
 }

}
