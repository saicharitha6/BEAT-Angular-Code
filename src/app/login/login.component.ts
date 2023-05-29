import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { SharedService } from 'app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value: any;
  accessString : any;
  errorMessage :string ='';
  empId !: number;
  jwt !: string;
  access !: string;
  loginForm: FormGroup = new FormGroup(
      {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
      }
    );
    
  constructor(private router: Router, public authservice: AuthService, private sharedService :SharedService) { }
  ngOnInit() {

    console.log(this.authservice.canUpdateEmployee());
     
   }

  sendData() {
    this.value = this.loginForm.value;
    if (this.value.email && this.value.password) {
      this.authservice.login(this.value.email, this.value.password).subscribe(
        (response: any) => {
          if (response.empId && response.jwt && response.accessId){
               this.access=response.accessId;
               this.jwt=response.jwt;
               document.cookie="JWT"+'='+this.jwt;
               localStorage.setItem('accessID',this.access);
               localStorage.setItem('jwt',this.jwt);
               this.accessString=localStorage.getItem('accessID')
               this.sharedService.passValue(this.accessString);
               this.empId=response.empId;
               localStorage.setItem('empId', this.empId.toString());

              this.router.navigate(['/homepage']);
            }
        
          else {
            this.router.navigate(['/login']);
          }
        }
      )
    }
  }

}
