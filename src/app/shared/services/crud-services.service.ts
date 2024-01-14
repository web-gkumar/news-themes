import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { catchError, map, Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
  ) {}

  createPost(postData:any, collectionName:any) {
    return this.db.collection(collectionName).add({ ...postData });
  }
  getAllPost(collectionName:any) {
    return this.db.collection(collectionName);
  }
  updatePost(id: string, data: any, collectionName: any) {
    return this.db.collection(collectionName).doc(id).update(data);
  }
}
