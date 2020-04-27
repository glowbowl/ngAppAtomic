import { Injectable, NgZone } from '@angular/core';
import { UserSignIn, UserSignUp, UserUpdate, UserAdditionalUpdate } from "../../models/models";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    userData: any;
    private basePath: string = '/users';

    items: UserSignUp[] = null; //  list of objects
    item = null;

    constructor(
        public afs: AngularFirestore,
        public afAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone,
    ) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        })
    }

    getUser(key: string):Observable<UserSignUp> {
        const itemPath = `${this.basePath}`;
        //this.item = this.afs.collection(itemPath).doc(`${key}`).valueChanges();
        //return this.item;
        return this.afs.collection<UserSignUp>(itemPath).doc<UserSignUp>(`${key}`).valueChanges();
    }

    deleteUser(key: string){
        const userPath = `${this.basePath}`;
        return this.afs.collection(userPath).doc(`${key}`).delete();
    }

    getAll(): Observable<UserSignUp[]>{
        const itemPath = `${this.basePath}`;
        //this.item = this.afs.collection(itemPath).valueChanges();
        //return this.item
        return this.afs.collection<UserSignUp>(itemPath).valueChanges();
    }

    async SignIn(email, password) {
        try {
            const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
            this.router.navigate(['']);
        }
        catch (error) {
            window.alert(error.message);
        }
    }

    async SignUp(email, password, value) {
        try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            this.router.navigate(['']);
            this.SetUserDataSignUp(result.user, value);
        }
        catch (error) {
            window.alert(error.message);
        }
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null) ? true : false;
    }

    SetUserDataSignUp(user, value) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const userData: UserSignUp = {
            uid: user.uid,
            email: user.email,

            firstName: value.firstName,
            lastName: value.lastName,
            nickname: value.nickname,
            phone: value.phone,
            addressType: value.addressType,
            address: value.address,
            country: value.country,
            postalCode: value.postalCode,
        }
        return userRef.set(userData, {
            merge: true
        })
    }

    updateUser(userId, value) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userId}`);
        const userData: UserUpdate  = {
            firstName: value.firstName,
            lastName: value.lastName,
            nickname: value.nickname,
            phone: value.phone,
        }
        return userRef.set(userData, {
            merge: true
        })
    }

    updateAdditionalUser(userId, value) {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${userId}`);
        const userData: UserAdditionalUpdate = {
            addressType: value.addressType,
            address: value.address,
            country: value.country,
            postalCode: value.postalCode,
        }
        return userRef.set(userData, {
            merge: true
        })
    }

    async SignOut() {
        try{
            window.location.reload();
            localStorage.removeItem('user');
            await this.afAuth.auth.signOut();
        }
        catch(error){
            window.alert(error.message);
        }
    }
    
}