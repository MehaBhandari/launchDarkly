import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usersToInstitutionMap } from '../users/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usersToInstitutionMap: any= usersToInstitutionMap;
  userName: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setUser() {
    if(this.usersToInstitutionMap[this.userName]) {
      sessionStorage.setItem("user", JSON.stringify(this.usersToInstitutionMap[this.userName]));
      this.router.navigateByUrl("home");
    } else {
      alert("Invalid User!");
    }
  }

}
