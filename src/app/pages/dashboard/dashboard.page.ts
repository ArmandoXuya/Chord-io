import { Component, OnInit } from '@angular/core';
import { canActivate } from '@angular/fire/auth-guard';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { componentes } from 'src/app/interface/interfaces';
import { BasedatosService } from 'src/app/services/basedatos.service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  componentes!:Observable<componentes[]>;

  constructor(private dataService:BasedatosService,private userService:UserService,private router:Router,private cookies:CookieService
    ,private storage: Storage) { }

  ngOnInit() {

    this.componentes=this.dataService.getMenuOpts() 
  }

  logout(){
    this.userService.logout()
    .then(()=>{
     localStorage.removeItem("token");
     this.cookies.set("tokenC","");
    this.storage.remove('TKM16')
    this.storage.remove('lonGt')

     this.router.navigate(['login'])
    })
   .catch(error=> console.log(error));
 
   }
 
   estaLogueado(){
     
     return canActivate;
   
   }

}
