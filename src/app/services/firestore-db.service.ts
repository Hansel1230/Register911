import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { observable } from 'rxjs';
import { collection, getDocs } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirestoreDBService {

  constructor(private firestore: AngularFirestore) {
  }
  
  CreateRegister(data:any,path: string,id:string){
    const collection = this.firestore.collection(path)
    return collection.doc(id).set(data);
  }

  createDoc(){ 
    this.firestore.collection('RegistroLlamadas')
  }

  getCollection<Tipo>(path:string){
  
    const collection = this.firestore.collection<Tipo>(path)
    return collection.valueChanges();

      // console.log('res -> ', res);
    
  
  }




  
}
