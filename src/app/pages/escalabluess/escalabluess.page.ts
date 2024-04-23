import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { escalas } from 'src/app/interface/escala.interface';
import { BasedatosService } from 'src/app/services/basedatos.service';

@Component({
  selector: 'app-escalabluess',
  templateUrl: './escalabluess.page.html',
  styleUrls: ['./escalabluess.page.scss'],
})
export class EscalabluessPage implements OnInit {

  title="Escalas de Bluess"
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
    this.scalaVer=this.data.getEscalabluess();
   this.scalaSost=this.data.getEscalabluessSostenidos();
   
  }

}
