import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { escalas } from 'src/app/interface/escala.interface';
import { BasedatosService } from 'src/app/services/basedatos.service';

@Component({
  selector: 'app-escalamenor',
  templateUrl: './escalamenor.page.html',
  styleUrls: ['./escalamenor.page.scss'],
})
export class EscalamenorPage implements OnInit {
  title="Escalas Menores"
  texttitulo:any;
 textoa:any;
 textob:any;
 scalaVer!:Observable<escalas[]>;
 scalaSost:any;

  constructor(private data:BasedatosService) { }
  @ViewChild('popover') popover!:PopoverController;

  isOpen = false;

  presentPopover(e: Event) {
    this.isOpen = true;
  }

  ngOnInit() {
    this.scalaVer=this.data.getEscalaMenor();
   this.scalaSost=this.data.getEscalaMenorSostenido();
   
  }

  openModal(ops:string,btn:string){
    switch (btn) {
      case '1':  //scale blues 
        
        break;
        case '2':  //scale jazz 
        
        break;
        case '3':  //armonico 
        this.verificainfoaCORDET1(ops);
        break;
        case '4': //// tabla de sostenidos 
        this.verificainfoaCORDET2(ops);
          break;
  
    }
  
   this.isOpen=true
  
   }

   verificainfoaCORDET2(numreg:string){
    this.texttitulo="El Circulo Armonico de "
    this.textoa="La Armonia se compone con la siguiente esctructura:"
    switch (numreg.toString().trim()) {
      case '1':
        this.texttitulo=this.texttitulo+" A#m";
        this.textob=" A#m - Cdim  - C#m - D#m  - Fm - F#m - G# "
        break;
        case '2':
          this.texttitulo=this.texttitulo+" C#m";
          this.textob=" c#m - d#dim  - E - F#m  - G#m - A - B "
          break;
          case '3':
            this.texttitulo=this.texttitulo+" D#m";
            this.textob=" D#m - Edim  - F - G#m  - A#m - B - C# "
            break;
            case '4':
              this.texttitulo=this.texttitulo+" F#m";
              this.textob=" F#m - G#dim  - A - Bm  - C#m - D - E "
              break;
              case '5':
                this.texttitulo=this.texttitulo+" G#m";
                this.textob=" G#m - A#dim  - B - C#m  - D#m - E - F# "
                break;
    
      default:
        break;
    }
  }
  verificainfoaCORDET1(numreg:string){
    this.texttitulo="El Circulo Armonico de "
    this.textoa="La Armonia se compone con la siguiente esctructura:"
  
  switch (numreg.toString().trim()) {
    case '1':
      this.texttitulo=this.texttitulo+" Am";
       this.textob=" Am - Bdim  - C - Dm  - Em - F - G "
      break;
      case '2':
        this.texttitulo=this.texttitulo+" Bm";
         this.textob=" Bm - C#dim  - D - Em  - F#m - G - A "
        break;
        case '3':
          this.texttitulo=this.texttitulo+" Cm";
           this.textob=" Cm - Ddim  - D# - Fm  - Gm - A# - G# "
          break;
          case '4':
            this.texttitulo=this.texttitulo+" Dm";
             this.textob=" Dm - Edim  - F - Gm  - Am - A# - C "
            break;
            case '5':
              this.texttitulo=this.texttitulo+" Em";
               this.textob=" Em - F#dim  - G - Am  - Bm - C - D "
              break;
              case '6':
                this.texttitulo=this.texttitulo+" Fm";
                 this.textob=" Fm - Gdim  - G# - A#m  - Cm - C# - D# "
                break;
                case '7':
                  this.texttitulo=this.texttitulo+" Gm";
                   this.textob=" Gm - Adim  - C - Cm  - Dm - D# - F "
                  break;
  }
  
  }


}
