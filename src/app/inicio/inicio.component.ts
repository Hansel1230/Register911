import { Component, OnInit } from '@angular/core';

import { FirestoreDBService } from 'src/app/services/firestore-db.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  constructor(private Firestore: FirestoreDBService) { }

  ngOnInit() {}


  getRegistro(){
    this.Firestore.createDoc
   }
}

//Hansel De Los Santos Ramirez 202010355
