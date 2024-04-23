import { Injectable } from '@angular/core';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,
  signInWithPopup, sendPasswordResetEmail,Auth} from '@angular/fire/auth'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth:Auth) { }
  userReg:any;

  get GeUserRegis(): string {
    return this.userReg;
  }
  SetUserReg(token: string): void {
    this.userReg = token;
  }

 register({email,password}:any){
  return createUserWithEmailAndPassword(this.auth,email,password)
 }
 
login({email,password}:any){
  return signInWithEmailAndPassword(this.auth,email,password)
}

logout(){
  return signOut(this.auth);
}

/* loginWithGoole(){
return signInWithPopup(this.auth,new GoogleAuthProvider())
} */

resetpasswordClient({email,password}:any){
  return sendPasswordResetEmail(this.auth,email);
}

}
