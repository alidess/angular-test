import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth : AngularFireAuth, public router :Router, public db : AngularFireDatabase) {

   auth.authState.subscribe( user =>{
     if (user == undefined){
      router.navigate(['/']);
     }
   } )

   }

  ngOnInit() {
  }

  logout(){
    this.auth.auth.signOut()
  }

  delete(){

    var email = this.auth.auth.currentUser.email;

    this.db.list("posts",ref => ref.orderByChild("email").equalTo(email)).snapshotChanges().subscribe(data => {

      data.forEach(all => {

        this.db.list("posts").remove(all.key)
        
      })

    })

    var user = this.auth.auth.currentUser;
    user.delete().catch( err => {
      console.log(err.message);
    } )
  }

}
