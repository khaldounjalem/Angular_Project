import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userDetails;
  title = 'Angular7';


  constructor(private router: Router, private service: UserService) { }
  ngOnInit(): void  {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  onLogout() {
    localStorage.removeItem('token');
    
    //this.router.navigate(['']);

   location.reload();
   // this.router.navigateByUrl('');

  }
}
