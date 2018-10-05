import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public auth : AngularFireAuth,
    public router : Router) { 

    auth.authState.subscribe(user => {
    
      if(user == undefined){
        router.navigate(['/'])
      }
  
      })

  }

  ngOnInit() {
  }

  logout(){
    this.auth.auth.signOut();
  }

}
