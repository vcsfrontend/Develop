import { Injectable,NgZone } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authState: any;
  afAuth: any;
  afs: any;
  public showLoader:boolean=false;
  private apiUrl = `${environment.webURL}auth/signin`;

  constructor(private afu: AngularFireAuth, private router: Router,public ngZone: NgZone,
    private http: HttpClient
  ) {
    this.afu.authState.subscribe((auth: any) => {
      this.authState = auth;
    });

  }
  
  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return this.authState !== null ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return this.authState !== null ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if (this.authState !== null && !this.isUserAnonymousLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  registerWithEmail(email: string, password: string) {
    return this.afu
      .createUserWithEmailAndPassword(email, password)
      .then((user: any) => {
        this.authState = user;
      })
      .catch((_error: any) => {
        console.log(_error);
        throw _error;
      });
  }

  loginWithEmail(email: string, password: string) {
    return this.afu
      .signInWithEmailAndPassword(email, password)
      .then((user: any) => {
        this.authState = user;
      })
      .catch((_error: any) => {
        console.log(_error);
        throw _error;
      });
  }

  singout(): void {
    this.afu.signOut();
    this.router.navigate(['/login']);
  }
  

    // Sign up with email/password
    SignUp(email:any, password:any) {
      return this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((result:any) => {
          /* Call the SendVerificaitonMail() function when new user sign
          up and returns promise */
          this.SendVerificationMail();
          this.SetUserData(result.user);
        }).catch((error:any) => {
          window.alert(error.message)
        })
    }


    // main verification function
    SendVerificationMail() {
      return this.afAuth.currentUser.then((u:any) => u.sendEmailVerification()).then(() => {
          this.router.navigate(['/dashboard/sales']);
        })
    }
      // Set user
  SetUserData(user:any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL || 'src/favicon.ico',
      emailVerified: user.emailVerified
    };
    userRef.delete().then(function () {})
          .catch(function (error:any) {});
    return userRef.set(userData, {
      merge: true
    });
  }
 // sign in function
 SignIn(email:any, password:any) {
  return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((result:any) => {
      if (result.user.emailVerified !== true) {
        this.SetUserData(result.user);
        this.SendVerificationMail();
        this.showLoader = true;
      } else {
        this.showLoader = false;
        this.ngZone.run(() => {
          this.router.navigate(['/auth/login']);
        });
      }
    }).catch((error:any) => {
      throw error;
    })
}
ForgotPassword(passwordResetEmail:any) {
  return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error:any) => {
      window.alert(error);
    });
}




  // Login method: send credentials and get JWT token
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password })
      .pipe(
        tap((response: any) => {
          // Save the token in localStorage
          this.router.navigate(['/auth/login']);
          localStorage.setItem('userDetails', JSON.stringify(response));
          // localStorage.setItem('jwtToken', response.token);
        })
      );
  }

  // Logout method: remove JWT token
  logout() {
    localStorage.removeItem('jwtToken');
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwtToken');
  }

  // Retrieve the stored token
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }
}
