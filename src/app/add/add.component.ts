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
  image;
  name;

  constructor(public db : AngularFireDatabase, public auth : AngularFireAuth,
    public router : Router) {



    auth.authState.subscribe(user => {
      if(user != undefined){
        this.email = user.email;
        
      db.list("users",ref=>ref.orderByChild("email").equalTo(user.email)).valueChanges().subscribe(data => {
        this.image = data[0]['image'];
        this.name = data[0]['name'];
      })

      }
    })

   }

  ngOnInit() {
  }

  add(text){
    this.db.list("posts").push({
      name:this.name,
      text:text,
      email:this.email,
      image:this.image
    }).then( ()=> {
     this.router.navigate(['/posts'])
    })
  }

}
