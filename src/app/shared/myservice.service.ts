import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Student } from './student.model';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class MyserviceService {

  stdTable: AngularFireList<any>;
  stdsList: any[];
  constructor(private fdb: AngularFireDatabase) {
    this.stdTable = fdb.list('/student');
  }

  addStudent(record) {
    this.stdTable.push(record);
  }

  update(key, updatedStd) {

    this.stdsList.forEach((std, index) => {
      console.log(index);
      if (index == 0) {
        key = std.$key;
        updatedStd = { "rn": "999" }
      }
    });
    console.log("key = ", key);
    console.log("std = ", updatedStd);
    this.stdTable.update(key, updatedStd);
  }


  removeStudent(key = undefined) {
    this.stdTable.remove(key);
  }

  getTableName() {
    return this.stdTable;
  }

  getSubjectsTable(key) {
    // console.log("got key", key);
  //  let data =   this.fdb.list('/student', 
  //   ref => ref.orderByChild('name').equalTo("shabir")).snapshotChanges().subscribe(items => {
  //     // this.stdsList = [];
  //     items.forEach(element => {
  //       var item = element.payload.toJSON();
  //       console.log(item);
  //     });
  //   });

    return this.fdb.list('/subjects/'+key);

    
  }
}




