import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BasedatosService } from 'src/app/services/basedatos.service';
import { UserService } from 'src/app/services/user.service';
import { formatDate } from '@angular/common';
import datosCTon from 'src/app/interface/datoCTon';
import { componentes2 } from '../../interface/interfaces2';
import { Observable, count } from 'rxjs';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-registrocantos',
  templateUrl: './registrocantos.page.html',
  styleUrls: ['./registrocantos.page.scss'],
})
export class RegistrocantosPage implements OnInit {
  title = 'Registro Cantos ';
  listadodato:datosCTon[]=[];
  datafilter:datosCTon[]=[];
  listadodatoPrin:any;
  listaempty:any;
  idusuario:any;
  opcion="";
  isModalOpen = false;
  id:any;
  Ticanto2:string="";
  Ticanto:any;
  total=0;
  NombreC:any;
  Autor:any;
  Interp:any;
  Nota1:any;
  Nota2:any;
  Nota3:any;
  Mm1:any;
  Mm2:any;
  Mm3:any;
  Texto:any;
  filterPost:string="";
  fecha:any;
  listaipC:any; 
  listaipC2:any; 
  listanotas1:any;
  listatiponota1:any
  listanotas2:any;
  listatiponota2:any
  listanotas3:any;
  listatiponota3:any
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  
  constructor(private route:Router,private userService:UserService,
    private carga:BasedatosService,private cookies:CookieService){}

  ngOnInit() {
    this.Ticanto2="to"
    this.idusuario=localStorage.getItem('token');  

    this.llenainfo();

   //esto es para el CBO de tipo de Canto
   this.carga.getTipC().subscribe(data=>{
    this.listaipC=data;
    this.listaipC2=data;
   });

   //esto es para los cbo de notas 

   this.carga.getNOT().subscribe(data=>{
    this.listanotas1=data
    this.listanotas2=data
    this.listanotas3=data
   })

     //esto es para los cbo de tipodenota 

     this.carga.getTipNot().subscribe(data=>{
      this.listatiponota1=data
      this.listatiponota2=data
      this.listatiponota3=data
     })
  }

  llenainfo(){
    this.carga.GetDatosCTon().subscribe(data=>{
      this.listadodato=data
      this.listadodatoPrin=data
    })

  }
  get filteredProducts(): any[] {
   
    const search =this.Ticanto2.toLowerCase().trim()
    const searchnombc=this.filterPost.toLowerCase().trim();


     // si esta vacio todo 
if (this.Ticanto2.trim()=="to") {
  
  if (this.filterPost.toLowerCase()=="") {
    this.datafilter= this.listadodato ;
    
  }

  // si esta vacio el tipo y no esta vacio el texto 
  if (this.filterPost.toLowerCase()!="") {
    this.datafilter= this.listadodato.filter(product => product.nombrec.toLowerCase().includes(searchnombc) );

  }

}else{
  if (this.filterPost.toLowerCase()=="") {
    this.datafilter= this.listadodato.filter(product => product.ticanto.toLowerCase().includes(search) );
    
  }

  // si esta vacio el tipo y no esta vacio el texto 
  if (this.filterPost.toLowerCase()!="") {
    this.datafilter= this.listadodato.filter(product => product.ticanto.toLowerCase().includes(search) && product.nombrec.toLowerCase().includes(searchnombc)  );

  }

}
   // this.total=count(1)
    return  this.datafilter;
  }


  limpiadatos(){
    this.id=""
    this.Ticanto="";
    this.NombreC="";
    this.Autor="";
    this.Interp="";
    this.Nota1="";
    this.Nota2="";
    this.Nota3="";
    this.Mm1="";
    this. Mm2="";
    this.Mm3="";
    this.Texto="";
    this.opcion=""

   }

  guardanota(){
    let fech=formatDate(new Date(), 'dd-MM-YYYY', 'en-US');
 
    const nota:datosCTon={
      ticanto:this.Ticanto,
      nombrec:this.NombreC.toUpperCase(),
      autor:this.Autor.toUpperCase(),
      interp:this.Interp.toUpperCase(),
      texto:this.Texto,
      nota1:this.Nota1,
      mm1:this.Mm1,
      nota2:this.Nota2,
      mm2:this.Mm2,
      nota3:this.Nota3,
      mm3:this.Mm3,
      fecha:fech.toString(),
      idus:this.idusuario
    }
    this.carga.addDatosCTon(nota).then(dat=>{
     
      this.limpiadatos()
    })
  
  }

  generada():datosCTon{
    let fech=formatDate(new Date(), 'dd-MM-YYYY', 'en-US');
    const datoborrar:datosCTon={
      id:this.id,
      ticanto:this.Ticanto,
      nombrec:this.NombreC,
      autor:this.Autor,
      interp:this.Interp,
      texto:this.Texto,
      nota1:this.Nota1,
      mm1:this.Mm1,
      nota2:this.Nota2,
      mm2:this.Mm2,
      nota3:this.Nota3,
      mm3:this.Mm3,
      fecha:fech.toString(),
      idus:this.idusuario
    }
  return datoborrar
  
  }

  async borrarnota(dato:datosCTon){
    const response=await this.carga.deleteDatosCTon(dato);
    
    }
  async borrarnota2(){
    const response=await this.carga.deleteDatosCTon(this.generada());
  
    this.limpiadatos()
    }

   async actualizainfo(){
      const response=await this.carga.updateDAtosCTon(this.generada());
     
      this.limpiadatos()
    }

    async actualizacamp(){
      const response=await this.carga.updatecampCTon(this.generada());

    }

  Guardar(){
     
    if (this.opcion=="N") {
      this.guardanota()
    }else{
      this.actualizainfo()
    }

    this.isModalOpen = false;
   }

   abrirmodal(dato:datosCTon,accion:string){   

    this.opcion=accion
    if (this.opcion=="N") {
      this.limpiadatos()
      this.opcion=accion

    }else{

      this.id=dato.id
      this.Ticanto=dato.ticanto
      this.NombreC=dato.nombrec
      this.Autor=dato.autor
      this.Interp=dato.interp
      this.Texto=dato.texto
      this.Nota1=dato.nota1
      this.Mm1=dato.mm1
      this.Nota2=dato.nota2
      this.Mm2=dato.mm2
      this.Nota3=dato.nota3
      this.Mm3=dato.mm3
      this.fecha=dato.fecha
      this.idusuario=dato.idus

    }

    this.isModalOpen = true;
   }

   listaproductos:any;

   cargayopdateexcel(e:any){
   
  let cor=1;
    const reader:FileReader=new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e:any)=>{
    const binarystr:string = e.target.result;
    const wb:XLSX.WorkBook=XLSX.read(binarystr,{type:'binary'});
    const wsname:string=wb.SheetNames[0];
    const ws:XLSX.WorkSheet=wb.Sheets[wsname];
    const data=XLSX.utils.sheet_to_json(ws);
    this.listaproductos=data
    let fech=formatDate(new Date(), 'dd-MM-YYYY', 'en-US');

    this.listaproductos.map((dat:any) =>{     
     let xautor=""
     let xinterp=""
     let xnota1=""
     let xnota2=""
     let xnota3=""
     let xmm1=""
     let xmm2=""
     let xmm3=""
     let xtexto=""
     if (dat.autor!="na") {
      xautor=dat.autor.toUpperCase()
     }
     if (dat.interp!="na") {
      xinterp=dat.interp.toUpperCase()
     }
/*      if (dat.texto!="") {
      xtexto=dat.texto
     } */
/*      if (dat.nota1!="na") {
      xinterp=dat.nota1
     }

     if (dat.mm1!="na") {
      xmm1=dat.mm1
     }

     if (dat.nota2!="na") {
      xnota2=dat.nota2
     }
     if (dat.mm2!="na") {
      xmm2=dat.mm2
     }
     if (dat.nota3!="na") {
      xnota3=dat.nota3
     }
     if (dat.mm3!="na") {
      xmm3=dat.mm3
     } */

     const nota:datosCTon={
      ticanto:dat.ticanto,
      nombrec:dat.nombrec.toUpperCase(),
      autor:xautor,
      interp:xinterp,
      texto:xtexto,
      nota1:xnota1,
      mm1:xmm1,
      nota2:xnota2,
      mm2:xmm2,
      nota3:xnota3,
      mm3:xmm3,
      fecha:fech.toString(),
      idus:dat.idus
    }
    this.carga.addDatosCTon(nota)     

     //aqui estamos bien 
    });


    };

   }

}
