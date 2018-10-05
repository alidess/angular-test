import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  list:Observable<any>;


  constructor(public db : AngularFireDatabase) {

   this.list = db.list("posts").valueChanges();


   }

  ngOnInit() {
  }

}
