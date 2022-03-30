import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {finalize} from 'rxjs/operators'
import {AngularFireStorage} from '@angular/fire/compat/storage'
import {AngularFireDatabase} from '@angular/fire/compat/database'
//import  {readAndCompressImage}  from 'browser-image-resizer'
//declare type readAndCompressImage = typeof import("browser-image-resizer");

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  picture:string ="https://www.shutterstock.com/image-vector/flat-vector-icon-profile-face-user-1913139877"
  constructor(private auth:AuthService,private router:Router,private toast:ToastrService,private form:NgForm,
    private storage:AngularFireStorage,private db:AngularFireDatabase) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email,password,username,bio,county,picture}=f.form.value
     this.auth.signUp(email,password)
     .then((data)=>{
       console.log(data)
     })
     .then()
  }

}
