import { NgModule } from '@angular/core';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {provideAuth,getAuth} from '@angular/fire/auth'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from '../environment'
import { BasedatosService } from './services/basedatos.service';
import { UserService } from './services/user.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import {canActivate,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { Filter1Pipe } from './pipes/filter1.pipe';
import { Filter2Pipe } from './pipes/filter2.pipe'
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, 
     IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(()=>initializeApp(environment)),
    provideAuth(()=>getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    IonicStorageModule.forRoot(), 
  ],
  providers: [
     {provide:LocationStrategy,useClass:HashLocationStrategy},
     CookieService,
     BasedatosService,
     UserService ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
