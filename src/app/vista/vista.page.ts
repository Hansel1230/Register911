import { Component, OnInit } from '@angular/core';
import { FirestoreDBService } from 'src/app/services/firestore-db.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {

  register: register[] = [];

  constructor(private Database: FirestoreDBService) { }

  ngOnInit() {
    this.getRegistro();
  }

  getRegistro(){
   this.Database.getCollection<register>('RegistroLlamadas').subscribe(res =>{ 
    console.log('res',res);
    this.register = res;
   });
  }
}

export interface register { 
  date: string;
  description: string;
  photo: string; 
  title: string;
}


//15:48 interface register