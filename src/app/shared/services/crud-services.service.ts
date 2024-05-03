import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServicesService {

  constructor(private db: AngularFirestore) {}

  createPost(postData:any, collectionName:any) {
    return this.db.collection(collectionName).add({ ...postData });
  }
  getAllPost(collectionName:any) {
    return this.db.collection(collectionName);
  }
  updatePost(id: string, data: any, collectionName: any) {
    return this.db.collection(collectionName).doc(id).update(data);
  }
  getItemById(itemId: string, collection:any): Observable<any> {
    return this.db.collection(collection).doc(itemId).snapshotChanges()
      .pipe(
        map(item => {
          const data = item.payload.data();
          const id = item.payload.id;
          return { id, data };
        })
      );
  }
}
