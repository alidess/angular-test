import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  email;

  constructor(public auth : AngularFireAuth, public router :Router,
     public db : AngularFireDatabase,
     public storeg : AngularFireStorage) {

   auth.authState.subscribe( user =>{
     if (user == undefined){
      router.navigate(['/']);
     }

     if(user != undefined){
      this.email = user.email
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



  upload(file){
    var ref = this.storeg.ref("images/" + file.target.files[0].name);
    var put = ref.put(file.target.files[0]);


    put.then(done => {
      
      ref.getDownloadURL().subscribe(url => {

       var sub2 = this.db.list("users",ref=>ref.orderByChild("email").equalTo(this.email)).snapshotChanges().subscribe(data => {
          this.db.list("users").update(data[0].key,{
            image:url
          }).then(  ()=> {
            sub2.unsubscribe();
            
           var sub = this.db.list("posts",ref=>ref.orderByChild("email").equalTo(this.email)).snapshotChanges().subscribe(allpost => {
              allpost.forEach(posts => {
                this.db.list("posts").update(posts.key,{
                  image:url
                }).then( ()=> {
                 sub.unsubscribe();
                })
              })
            })
          })
        })
        
      })
    })

  }

}
