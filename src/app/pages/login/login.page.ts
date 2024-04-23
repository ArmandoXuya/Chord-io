import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
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
    ,private storage: Storage){}

  async ngOnInit() {
    await this.storage.create();
    this.verificatheme()
    this.ValidaSesionIniciada()
  }

  async verificaimg(){
    if (this.estadark==true) {
     this.imgLogo = await "assets/LOGCHORDSB.png"
    }else  if (this.estadark==false){
      this.imgLogo= await"assets/LOGCHORDS.png"
    }
   }

  async verificatheme(){
    const guardar=await this.storage.get('ThemeSaveDark')
       if (guardar=='1') {
         this.toggleDarkTheme(false);
         this.SistemMod='1'
       }else if(guardar=='2'){
         this.toggleDarkTheme(true);
         this.SistemMod='2'
       }else {
         this.SistemMod='3'
         this.guardaenStoragedarkmode('3')
         this.inicializathema()
       } 
   
     }

     toggleDarkTheme(shouldAdd:any) {
      this.estadark=shouldAdd;
      document.body.classList.toggle('dark', shouldAdd);
      this.verificaimg()
    }

    inicializathema(){
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.initializeDarkTheme(prefersDark.matches);
      prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  
    }
    initializeDarkTheme(isDark:any) {

      if (isDark) {
        this.toggleDarkTheme(isDark)
      }else{
        this.estadark=isDark;
        this.verificaimg()
      }
  
    }

    async guardar(mod:any){
      this.guardaenStoragedarkmode(mod)
      this.verificatheme()
      this.verificaimg()
    }

    async guardaenStoragedarkmode(guardar:any){
      await this.storage.set('ThemeSaveDark', guardar);

      this.verificatheme()
      this.verificaimg()
     }


  onSubmitTemplate(){
    const email=this.usuario.email
    const passwo=this.usuario.password  
    this.userService.login(this.usuario)
   .then((response:any) =>{
    this.userService.SetUserReg(response.user.uid)
     localStorage.setItem("token",response.user.uid);
     this.cookies.set("tokenC",response.user.uid);
      this.storage.set('TKM16', email);
      this.storage.set('lonGt', passwo);

    this.router.navigate(['dashboard'])
   })
   .catch((error:any)=>{
    this.errorStatus=true;
    this.isToastOpen=true
    this.errorMsgTit="Error en inicio de Sesion:"
    this.errorMsj="Verifica tu Usuario y/o contraseña";
    
   })
  }

  onClick2(){
    
    this.router.navigate(['/registrar'])

  }
  onClick3(){
    this.router.navigate(['/restclave'])
    
  }
  oculaerr(){
    this.errorStatus=false
  }

 async ValidaSesionIniciada(){
  const usu=await this.storage.get('TKM16')
  const pas=await this.storage.get('lonGt')
  if (usu!=null) {
    this.inicio2(usu,pas);

    }
    
  }

  inicio2(us:any,pas:any){
    this.usuario.email=us;
    this.usuario.password=pas;
    this.userService.login(this.usuario)
   .then((response:any) =>{
    this.userService.SetUserReg(response.user.uid)
     localStorage.setItem("token",response.user.uid);
     this.cookies.set("tokenC",response.user.uid);
    this.router.navigate(['dashboard'])
   })
  }
}
