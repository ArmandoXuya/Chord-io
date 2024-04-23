import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { escalas } from 'src/app/interface/escala.interface';
import { BasedatosService } from 'src/app/services/basedatos.service';

@Component({
  selector: 'app-escalamayor',
  templateUrl: './escalamayor.page.html',
  styleUrls: ['./escalamayor.page.scss'],
})
export class EscalamayorPage implements OnInit {
  title="Escalas Mayores"
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
    this.scalaVer=this.data.getEscalaMayor();
    this.scalaSost=this.data.getEscalaMayorSostenido();
    
  }

  openModal(ops:string,btn:string){
        
  
    switch (btn.trim()) {
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
        this.texttitulo=this.texttitulo+" A#";
        this.textob=" A# - Cm  - Dm - D#  - F - Gm - Adim "
        break;
        case '2':
          this.texttitulo=this.texttitulo+" C#";
          this.textob=" C# - D#m  - Fm - F#  - G# - A#m - Cdim "
          break;
          case '3':
            this.texttitulo=this.texttitulo+" D#";
            this.textob=" D# - Fm  - Gm - G#  - A#m - Cm - Ddim "
            break;
            case '4':
              this.texttitulo=this.texttitulo+" F#";
              this.textob=" F# - G#m  - A#m - B  - C# - D#m - Edim "
              break;
              case '5':
                this.texttitulo=this.texttitulo+" G#m";
                this.textob=" G#m - A#m - Cm  - C# - D#  - Fm - Gdim "
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
      this.texttitulo=this.texttitulo+" A";
       this.textob=" A - Bm  - C#m - D  - E - F#m - G#dim "
      break;
      case '2':
        this.texttitulo=this.texttitulo+" B";
         this.textob=" B - C#m  - D#m - E  - F# - G#m - A#dim "
        break;
        case '3':
          this.texttitulo=this.texttitulo+" C";
           this.textob=" C - Dm  - Em - F  - G - Am - Bdim "
          break;
          case '4':
            this.texttitulo=this.texttitulo+" D";
             this.textob=" D - Em  - F#m - G  - A - Bm - C#dim "
            break;
            case '5':
              this.texttitulo=this.texttitulo+" E";
               this.textob=" E - F#m  - G#m - A  - B - C#m - D#dim "
              break;
              case '6':
                this.texttitulo=this.texttitulo+" F";
                 this.textob=" F - Gm  - Am - A#  - C - Dm - Edim "
                break;
                case '7':
                  this.texttitulo=this.texttitulo+" G";
                   this.textob=" G - Am  - Bm - C  - D - Em - F#dim "
                  break;
  }
  
  }
}
