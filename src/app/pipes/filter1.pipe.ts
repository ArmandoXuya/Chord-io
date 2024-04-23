import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, arg: any):any {
    if(!arg) return value;
    const resultadopost=[];
    for(const post of value){
     if (post.colgar==(arg)>-1) {
         resultadopost.push(post)
       
     };
    };

    return resultadopost
  }

}
