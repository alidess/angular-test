import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  email;


  constructor(public db : AngularFireDatabase, public auth : AngularFireAuth,
    public router : Router) {



    auth.authState.subscribe(user => {
      if(user != undefined){
        this.email = user.email
      }
    })

   }

  ngOnInit() {
  }

  add(name,text){
    this.db.list("posts").push({
      name:name,
      text:text,
      email:this.email
    }).then( ()=> {
     this.router.navigate(['/posts'])
    })
  }

}
