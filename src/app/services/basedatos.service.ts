import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc,collectionData,doc,deleteDoc, updateDoc,setDoc, getDoc, getFirestore } from '@angular/fire/firestore';
import datos from '../interface/datos';
import { HttpClient } from '@angular/common/http';
import { componentes } from '../interface/interfaces';
import { getDatabase, ref, onValue, get, child } from "firebase/database";
import { getAuth } from 'firebase/auth';
import { escalas } from '../interface/escala.interface';
import datosCTon from '../interface/datoCTon';
import { componentes2 } from '../interface/interfaces2';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
  constructor(private firestore:Firestore,private http:HttpClient) { }

  usuarioids=localStorage.getItem('token')
  usRegtonal="registrocantoscompartido"

  addDatos(datos:datos){
    const DAtosRef=collection(this.firestore,''+this.usuarioids);
    return addDoc(DAtosRef,datos);
  }

 GetDatos():Observable<datos[]>{
  const DAtosRef1=collection(this.firestore,''+this.usuarioids);
  return collectionData(DAtosRef1,{idField:'id'}) as Observable<datos[]>;

 }

 deleteDatos(dato:datos){
  const datosRef=doc(this.firestore,''+this.usuarioids+`/${dato.id}`)
  return deleteDoc(datosRef);
 }

 updateDAtos(dato:datos){
  const datosRef=doc(this.firestore,''+this.usuarioids+`/${dato.id}`)
  return updateDoc(datosRef,{
    titulo:dato.titulo,
    descripb:dato.descripb,
    descripcion:dato.descripcion,
    colgar:dato.colgar,
    color:dato.color,
    fecha:dato.fecha,
    fechaMod:dato.fechaMod,
  })
 }

 updatecamp(dato:datos){
  const datosRef=doc(this.firestore,''+this.usuarioids+`/${dato.id}`)
  return updateDoc(datosRef,{
    colgar:dato.colgar,
    color:dato.color,
    fechaMod:dato.fechaMod,
  })
 }
 
 // esto es para el registro de tonalidades de cantos //

 GetDatosCTon():Observable<any>{
  const DAtosRef1=collection(this.firestore,''+this.usRegtonal);
  return collectionData(DAtosRef1,{idField:'id'}) as Observable<any>;

 }
 
 addDatosCTon(datos:datosCTon){
  const DAtosRef=collection(this.firestore,''+this.usRegtonal);
  return addDoc(DAtosRef,datos);
}

deleteDatosCTon(dato:datosCTon){
  const datosRef=doc(this.firestore,''+this.usRegtonal+`/${dato.id}`)
  return deleteDoc(datosRef);
 }
 
 updateDAtosCTon(dato:datosCTon){
  const datosRef=doc(this.firestore,''+this.usRegtonal+`/${dato.id}`)
  return updateDoc(datosRef,{
    ticanto:dato.ticanto,
    nombrec:dato.nombrec,
    autor:dato.autor,
    interp:dato.interp,
    texto:dato.texto,
    nota1:dato.nota1,
    mm1:dato.mm1,
    nota2:dato.nota2,
    mm2:dato.mm2,
    nota3:dato.nota3,
    mm3:dato.mm3,
    fecha:dato.fecha,
    idus:dato.idus

  })
 }

 updatecampCTon(dato:datosCTon){
  const datosRef=doc(this.firestore,''+this.usRegtonal+`/${dato.id}`)
  return updateDoc(datosRef,{
    
  })
 }

//-----------------------------------------------------//

getNOT(){

  return this.http.get('/assets/data/notas.json')
}

getTipC(){
  const dat=this.http.get('/assets/data/TipoCanto.json')
 
  return dat
}

getTipNot(){
  return this.http.get<componentes2[]>('/assets/data/meMa.json')
}

getMenuOpts(){
  return this.http.get<componentes[]>('/assets/data/menu.json')
}


/*   --------- Base de datos para las opciones de Escalas ---------- */

getEscalaMenor(){
  return this.http.get<escalas[]>('/assets/data/EscalasMenores.json')
}

getEscalaMenorSostenido(){
  return this.http.get<escalas[]>('/assets/data/EscalasMenoresSostenidos.json')
}

getEscalaMayor(){
  return this.http.get<escalas[]>('/assets/data/EscalasMayores.json')
}

getEscalaMayorSostenido(){
  return this.http.get<escalas[]>('/assets/data/EscalasMayoresSostenidos.json')
}

getEscalabluess(){
  return this.http.get<escalas[]>('/assets/data/EscalaBlues.json')
}
getEscalabluessSostenidos(){
  return this.http.get<escalas[]>('/assets/data/EscalaBluesSistenidos.json')
}

getEscalaArabe(){
  return this.http.get<escalas[]>('/assets/data/EscalaArabes.json')
}
getEscalaArabeSostenidos(){
  return this.http.get<escalas[]>('/assets/data/EscalaArabeSostenido.json')
}

}
