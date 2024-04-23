import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  errorStatus:Boolean=false;
  errorMsgTit:any="";
  errorMsj:any="";
  usuario={
   email:'',
   password:''
  }
  SistemMod:any
  estadark:any
  imgLogo:any
  isToastOpen = false;
   nameicon='eye-outline'
   showpassword=false
   setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  
   togglePass(){
    this.showpassword=!this.showpassword  
     
    if (this.nameicon=='eye-outline') {
      this.nameicon='eye-off-outline'
    }else{
      this.nameicon='eye-outline'
    }   
    }

    constructor(private userService:UserService,private router:Router,private cookies:CookieService
      ){}
  
    async ngOnInit() {
      this.estadark=false

     await this.verificaimg();
  
    }
    
    onSubmitTemplate(){
      const email=this.usuario.email
      const passwo=this.usuario.password  
      this.userService.register(this.usuario)
     .then((response:any) =>{
      this.userService.SetUserReg(response.user.uid)
      this.router.navigate(['/login'])
     })
     .catch((error:any)=>{
      console.log(error,"errores")
      this.errorStatus=true;
      this.isToastOpen=true
      this.errorMsgTit="Error en Registro de usuario:"
      this.errorMsj="No se ha podido registrar tu usuario verifica tu conexion a internet y que tengas un correo Valido y que tu correo no este registrado";
      
     })
    }

    
   verificaimg(){
    if (this.estadark==true) {
     this.imgLogo =  "assets/LOGCHORDSB.png"
    }else  if (this.estadark==false){
      this.imgLogo= "assets/LOGCHORDS.png"
    }
   }

   onClick2(){
    this.router.navigate(['/login'])
   }
}
