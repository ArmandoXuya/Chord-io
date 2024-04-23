import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any, arg: any):any {
    if(arg=='' || arg.length<3) return value;
    const resultadopost=[];
    for(const post of value){
     if (post.titulo.toLowerCase().indexOf(arg.toLowerCase())>-1 || post.descripcion.toLowerCase().indexOf(arg.toLowerCase())>-1) {
         resultadopost.push(post)
     };
    };

    return resultadopost
  }
}
