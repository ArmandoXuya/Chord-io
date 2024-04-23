import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import datos from 'src/app/interface/datos';
import { BasedatosService } from 'src/app/services/basedatos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-misnotas',
  templateUrl: './misnotas.page.html',
  styleUrls: ['./misnotas.page.scss'],
})
export class MisnotasPage implements OnInit {
  title = 'Crear Notas';
  TituloNota:string="";
  FechaIng:any;
  txtdes:string="";
  agrandarAuto=15;
  colgar=false
  colgarfiltro=false;
  color:string="";
  colorpr:string="white"
  idusuario:any;
  fechamod:any;
  newdate:Date=new Date()
  descorta:any
  listadodato:any;
  listadodatoPrin:any;
  listaempty:any;
  datoborrar:any;
  imgpin:any;
  id:any
  textobusqueda:any
  filterpost='';
  filterpost1='';
  isModalOpen = false;
opcion="";

handleRefresh(e:any) { 
  setTimeout(() => {
    // Any calls to load data go here
    this.llenainfo()
    e.target.complete();
  }, 2000);
}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor(private route:Router,private userService:UserService,private carga:BasedatosService,private cookies:CookieService){}

  ngOnInit() {
    this.idusuario=localStorage.getItem('token');  

    this.llenainfo();

  }

  llenainfo(){
    this.carga.GetDatos().subscribe(data=>{
      this.listadodato=data
      this.listadodatoPrin=data
    })

  }

  limpiadatos(){
    this.id=""
    this.FechaIng=""
    this.TituloNota=""
    this.txtdes=""
    this.colgar=false 
    this.fechamod=""
    this.color=""
    this.opcion=""

   }
   activapinfiltro(){
    if (this.colgarfiltro) {
      this.colgarfiltro=false
    }else if(!this.colgarfiltro){
      this.colgarfiltro=true  
    }
  
  
  }
  
  activapin(ops:number){
    if (this.colgar) {
      this.colgar=false
  
    }else if(!this.colgar){
      this.colgar=true  
    }
  
    if (ops==2) {
      this.actualizacamp()
    }
  }

  guardanota(){
    let fech=formatDate(new Date(), 'dd-MM-YYYY', 'en-US');
    const cantd=this.txtdes.length
    const textde=this.txtdes.substring(0,20)
    const nota:datos={
      titulo:this.TituloNota,
      descripb:textde,
      descripcion:this.txtdes,
      colgar:this.colgar,
      color:this.color,
      fecha:this.FechaIng.toString(),
      fechaMod:fech,
      idus:this.idusuario
    }
    this.carga.addDatos(nota).then(dat=>{
     
      this.limpiadatos()
    })
  
  }

  generada():datos{
    let fech=formatDate(new Date(), 'dd-MM-YYYY', 'en-US');
    const datoborrar:datos={
      id:this.id,
      titulo:this.TituloNota,
      descripb:this.txtdes,
      descripcion:this.txtdes,
      colgar:this.colgar,
      color:this.color,
      fecha:this.FechaIng, 
      fechaMod:fech,
      idus:this.idusuario
    }
  return datoborrar
  
  }

  async borrarnota(dato:datos){
    const response=await this.carga.deleteDatos(dato);
    
    }
    
    async borrarnota2(){
      const response=await this.carga.deleteDatos(this.generada());
    
      this.limpiadatos()
      }
    
    async actualizainfo(){
      const response=await this.carga.updateDAtos(this.generada());
     
      this.limpiadatos()
    }
    async actualizacamp(){
      const response=await this.carga.updatecamp(this.generada());

    }


    abrirmodal(dato:datos,accion:string){   

      this.opcion=accion
      if (this.opcion=="N") {
        this.limpiadatos()
        this.opcion=accion

      }else{

        this.id=dato.id
        this.FechaIng=dato.fecha
        this.TituloNota=dato.titulo
        this.txtdes=dato.descripcion
        this.colgar=Boolean(dato.colgar) 
        this.fechamod=dato.fechaMod
        this.color=dato.color
        this.idusuario=dato.idus
      }

      this.isModalOpen = true;
     }


     Guardar(){
     
      if (this.opcion=="N") {
        this.guardanota()
      }else{
        this.actualizainfo()
      }

      this.isModalOpen = false;
     }
    
  
}
