import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  check;

  constructor(public auth : AngularFireAuth, public router : Router) { 

    auth.authState.subscribe(user => {
    
    if(user != undefined){
      router.navigate(['/dashboard'])
    }

    })

  }

  ngOnInit() {
  }



}
