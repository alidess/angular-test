import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  names;
  text;

  constructor(public db : AngularFireDatabase,public route : ActivatedRoute, public router : Router) {

    db.list("posts",ref => ref.orderByKey().equalTo(route.snapshot.paramMap.get("id"))).valueChanges().subscribe(data => {
     this.names = data[0]['name'];
     this.text = data[0]['text'];
    })

   }

   edit(name,post){
     var key = this.route.snapshot.paramMap.get("id");
     this.db.list("posts").update(key,{
       name:name,
       text:post
     }).then( ()=> {
       this.router.navigate(['/posts'])
     })
   }

  ngOnInit() {
  }

}
