import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {

  list:Observable<any>;

  constructor(public db : AngularFireDatabase, public auth : AngularFireAuth,
    public router : Router) {
    
   auth.authState.subscribe(user => {

    if(user != undefined){


      this.list = db.list("posts",ref => ref.orderByChild("email").equalTo(user.email)).snapshotChanges();

    }

   })

   }

  ngOnInit() {
  }

  delete(key){
    this.db.list("posts").remove(key);
  }

  edit(key){
  this.router.navigate(['/edit',key])
  }

}
