import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'


@Component({
  selector: 'app-transponce',
  templateUrl: './transponce.page.html',
  styleUrls: ['./transponce.page.scss'],
})
export class TransponcePage implements OnInit {
  title = 'Convierte tus Melodias';
  opconv=""
  txtlist:string="";
  MsjMostrar:any="Bandeja de Alertas";
  txtlistIni:string="";
  valini:number=0;
  StatusAlerta = false;

  setOpen(isOpen: boolean) {
    this.StatusAlerta = isOpen;
  }

  constructor( private clipboard: ClipboardService) { }

  ngOnInit() {
  }

  //limpiar la escritura 
limpiarInfo(){
  this.txtlist="";
 this. MsjMostrar="Bandeja de Alertas";
 this.cambiaralerta()
 this.txtlistIni="";
 this.valini=0;

}
 //Restauramos a la escritura anterior  
restaurar(){
  this.txtlist=this.txtlistIni;
  this.MsjMostrar="Has Restaurado la informacion Inicial"
  this.cambiaralerta()
  //this.StatusAlerta=true;
}
 //creamos la restauracion  la escritura   
validaopcioninicial(){
  if (this.valini==0) {
   this.txtlistIni=this.txtlist.toUpperCase();
  }
  this.valini=1;
 
 }

 // convertir trompeta a teclado  baja 1 tono
ConvertirTrTe(){
  if(this.txtlist.trim()!=""){
    this.validaopcioninicial();
    const ccadenaconv= this.txtlist.toUpperCase()
    const xcantpal=ccadenaconv.split(' ')
    const xccadena=xcantpal.length
    let Ntono='3';
    let xNCadena:string="";
      xcantpal.forEach((cnota, index) => {
        if  (cnota!=""){        
          xNCadena=xNCadena+" "+this.convertforchar(cnota,Ntono);
        }
        this.txtlist=xNCadena;
        });
      
    this.MsjMostrar="Has convertido Trompeta  a Teclado"
    this.cambiaralerta()
    //this.StatusAlerta=true;
  }
}
// convertir teclado  a trompeta  sube 1 tono 
ConvertirTeTr(){
  if(this.txtlist.trim()!=""){
    this.validaopcioninicial();
    const ccadenaconv= this.txtlist.toUpperCase()
    const xcantpal=ccadenaconv.split(' ')
    const xccadena=xcantpal.length
    let Ntono='1';
    let xNCadena:string="";
      xcantpal.forEach((cnota, index) => {
        if  (cnota!=""){        
          xNCadena=xNCadena+" "+this.convertforchar(cnota,Ntono);
        }
        this.txtlist=xNCadena;
        });
      
    this.MsjMostrar="Has convertido de Teclado a Trompeta"
    this.cambiaralerta()
   // this.StatusAlerta=true;
  }
}
// convertir de teclado a saxo  baja 1 tono y medio 
ConvertirTeS(){
  if(this.txtlist.trim()!=""){
    this.validaopcioninicial();
    for(let i = 0 ; i < 2 ; i++){
    const ccadenaconv= this.txtlist.toUpperCase()
    const xcantpal=ccadenaconv.split(' ')
    const xccadena=xcantpal.length
    let Ntono="";
    let xNCadena:string="";
    
     switch(i){
        case 0:{
          Ntono='3';
          break
        }
        case 1:{
          Ntono='4';
          break
        }
       
      }
  
      xcantpal.forEach((cnota, index) => {
        if  (cnota!=""){        
          xNCadena=xNCadena+" "+this.convertforchar(cnota,Ntono);
        }
        this.txtlist=xNCadena;
        });
      
    }
    this.MsjMostrar="Has convertido de Teclado a Saxofon"
    this.cambiaralerta()
    //this.StatusAlerta=true;
  }
}
// Convertir de saxo a teclado  sube 1 tono y medio 
ConvertirSTe(){
  if(this.txtlist.trim()!=""){
    this.validaopcioninicial();
    for(let i = 0 ; i < 2 ; i++){
    const ccadenaconv= this.txtlist.toUpperCase()
    const xcantpal=ccadenaconv.split(' ')
    const xccadena=xcantpal.length
    let Ntono="";
    let xNCadena:string="";
    
     switch(i){
        case 0:{
          Ntono='1';
          break
        }
        case 1:{
          Ntono='2';
          break
        }
       
      }
  
      xcantpal.forEach((cnota, index) => {
        if  (cnota!=""){        
          xNCadena=xNCadena+" "+this.convertforchar(cnota,Ntono);
        }
        this.txtlist=xNCadena;
        });
      
    }
    this.MsjMostrar="Has convertido de Saxofon a Teclado"
    this.cambiaralerta()
    //this.StatusAlerta=true;
  }
}
// convertir trompeta a saxo 
convertirTS(){
  if(this.txtlist.trim()!=""){
    this.validaopcioninicial();
  for(let i = 0 ; i < 3 ; i++){
  const ccadenaconv= this.txtlist.toUpperCase()
  const xcantpal=ccadenaconv.split(' ')
  const xccadena=xcantpal.length
  let Ntono="";
  let xNCadena:string="";
  
   switch(i){
      case 0:{
        Ntono='3';
        break
      }
      case 1:{
        Ntono='3';
        break
      }
      case 2:{
        Ntono='4';
        break
      }
    }

    xcantpal.forEach((cnota, index) => {
      if  (cnota!=""){        
        xNCadena=xNCadena+" "+this.convertforchar(cnota,Ntono);
      }
      this.txtlist=xNCadena;
      });
    
  }
  this.MsjMostrar="Has convertido de Trompeta a Saxofon"
  this.cambiaralerta()
 // this.StatusAlerta=true;
}
}
// convertir saxo trompeta  
convertirST(){ 

  if(this.txtlist.trim()!=""){
    this.validaopcioninicial();
  for(let i = 0 ; i < 3 ; i++){
    const ccadenaconv= this.txtlist.toUpperCase()
    const xcantpal=ccadenaconv.split(' ')
    const xccadena=xcantpal.length
    let xNCadena:string="";
    let Ntono="";

    switch(i){
      case 0:{
        Ntono='1';
        break
      }
      case 1:{
        Ntono='1';
        break
      }
      case 2:{
        Ntono='2';
        break
      }
    }

    xcantpal.forEach((cnota, index) => {
      if  (cnota!=""){
        xNCadena=xNCadena+" "+this.convertforchar(cnota,Ntono);
      }
      this.txtlist=xNCadena;
      });

  }
  this.MsjMostrar="Has convertido de Saxofon  a Trompeta"
  this.cambiaralerta()
 // this.StatusAlerta=true;
}
}

convertforchar(nlet:string,ntono:string){
  let valret:any="";
  
  switch(nlet){
    case 'A': { 
      switch(ntono){
        case '1': {
          valret="B"
          break;
        }
        case '2': {
          valret="A#"
          break;
        }
        case '3': {
          valret="G"
          break;
        }
        case '4': {
          valret="G#"
          break;
        }
      } 

      break; 
   } 
   case 'A#': {
    switch(ntono){
      case '1': {
        valret="C"
        break;
      }
      case '2': {
        valret="B"
        break;
      }
      case '3': {
        valret="G#"
        break;
      }
      case '4': {
        valret="A"
        break;
      }
    } 

    break; 

   }
   case 'B': {
    switch(ntono){
      case '1': {
        valret="C#"
        break;
      }
      case '2': {
        valret="C"
        break;
      }
      case '3': {
        valret="A"
        break;
      }
      case '4': {
        valret="A#"
        break;
      }
    } 

    break; 
   }
   case 'C': {
    switch(ntono){
      case '1': {
        valret="D"
        break;
      }
      case '2': {
        valret="C#"
        break;
      }
      case '3': {
        valret="A#"
        break;
      }
      case '4': {
        valret="B"
        break;
      }
    } 

    break; 
   }
   case 'C#': {
    switch(ntono){
      case '1': {
        valret="D#"
        break;
      }
      case '2': {
        valret="D"
        break;
      }
      case '3': {
        valret="B"
        break;
      }
      case '4': {
        valret="C"
        break;
      }
    } 

    break; 
   }
   case 'D': {
    switch(ntono){
      case '1': {
        valret="E"
        break;
      }
      case '2': {
        valret="D#"
        break;
      }
      case '3': {
        valret="C"
        break;
      }
      case '4': {
        valret="C#"
        break;
      }
    } 

    break; 
   }
   case 'D#': {
    switch(ntono){
      case '1': {
        valret="F"
        break;
      }
      case '2': {
        valret="E"
        break;
      }
      case '3': {
        valret="C#"
        break;
      }
      case '4': {
        valret="D"
        break;
      }
    } 

    break; 
   }
   case 'E': {
    switch(ntono){
      case '1': {
        valret="F#"
        break;
      }
      case '2': {
        valret="F"
        break;
      }
      case '3': {
        valret="D"
        break;
      }
      case '4': {
        valret="D#"
        break;
      }
    } 

    break; 
   }
   case 'F': {
    switch(ntono){
      case '1': {
        valret="G"
        break;
      }
      case '2': {
        valret="F#"
        break;
      }
      case '3': {
        valret="D#"
        break;
      }
      case '4': {
        valret="E"
        break;
      }
    } 

    break; 
   }
   case 'F#': {
    switch(ntono){
      case '1': {
        valret="G#"
        break;
      }
      case '2': {
        valret="G"
        break;
      }
      case '3': {
        valret="E"
        break;
      }
      case '4': {
        valret="F"
        break;
      }
    } 

    break; 
   }
   case 'G': {
    switch(ntono){
      case '1': {
        valret="A"
        break;
      }
      case '2': {
        valret="G#"
        break;
      }
      case '3': {
        valret="F"
        break;
      }
      case '4': {
        valret="F#"
        break;
      }
    } 

    break; 
   }
   case 'G#': {
    switch(ntono){
      case '1': {
        valret="A#"
        break;
      }
      case '2': {
        valret="A"
        break;
      }
      case '3': {
        valret="F#"
        break;
      }
      case '4': {
        valret="G"
        break;
      }
    } 

    break; 
   }
   default: { 
     valret=nlet
    break; 
      } 
  }

    return valret

}
convertir(Ntono:string){

  this.validaopcioninicial();

   const ccadenaconv= this.txtlist.toUpperCase()
   const xcantpal=ccadenaconv.split(' ')
   const xccadena=xcantpal.length
   let xNCadena:string="";
  
  xcantpal.forEach((cnota, index) => {
    if  (cnota!=""){
      xNCadena=xNCadena+" "+this.convertforchar(cnota,Ntono);
    }
    this.txtlist=xNCadena;
    });
   if(this.txtlist.trim()!="")
    switch (Ntono) {
      case '1':
        this.MsjMostrar="Has subido 1 tono a tus acordes"
        this.cambiaralerta()
       // this.StatusAlerta=true;
        break;
      case '2':
          this.MsjMostrar="Has subido 1/2 tono a tus acordes"
          this.cambiaralerta()
          //this.StatusAlerta=true;
          break;
      case '3':
            this.MsjMostrar="Has bajado 1 tono a tus acordes"
            this.cambiaralerta()
            //this.StatusAlerta=true;
            break;
      case '4':
              this.MsjMostrar="Has bajado 1/2 tono a tus acordes"
              this.cambiaralerta()
              //this.StatusAlerta=true;
              break;

    }

    this.opconv=""
}
cambiaralerta(){
  setTimeout(() => {
    this.MsjMostrar="Bandeja de Alertas"
  }, 5000);

}

copyToClipboard(): void {
  // Se copia el texto del input al portapapeles
  this.clipboard.copy(this.txtlist.toUpperCase());
  this.MsjMostrar="Texto Copiado"

  this.cambiaralerta()
  //this.MsjMostrar="Texto Copiado"
  // Se muestra un snackbar durante 2 segundos en la parte inferior
  /*this.snackBar.open('¡Texto copiado al portapapeles!','null', {
    duration: 2000,
    panelClass: 'snackbar'
  });*/
  }

}
