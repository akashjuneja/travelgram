import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email:string=null || ''
  constructor( private auth:AuthService,
         private toast:ToastrService,
         private router:Router) {
           this.auth.getUser().subscribe((data)=>{
             console.log(data)
              this.email=data?.email ||''
           })
         }

  ngOnInit(): void {

  }

   signOutApp=async ()=>{
     try {
       await this.auth.signOut()
       this.router.navigateByUrl('/signIn')
       this.toast.success("successfully signed out")
       this.email=null || ''
     } catch (error) {
       this.toast.error(error)

     }

  }

}
