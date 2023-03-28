import { Component, OnInit } from '@angular/core';
import { FirestoreDBService } from 'src/app/services/firestore-db.service';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  fecha:string;
  Date: string = "";
  Title: string = "";
  Description: string = "";
  Photo: string = "";

  person = { 
    Date: this.Date,
    Title: this.Title,
    Description:this.Description,
    Photo: this.Photo,
 }; 

  constructor(private Database: FirestoreDBService, public toastController: ToastController) {
    moment.locale('es-mx');
    this.fecha = moment().format();

   }

  ngOnInit() {
    this.enty();
  }
  getRegister(){
    //this.Database.getCollection();
  }

  enty(){
    this.Date = '';
    this.Title = '';
    this.Description = '';
    this.Photo = '';
  }
  async CreateRegister(){


      this.person.Date = this.Date;
      this.person.Description = this.Description;
      this.person.Photo = this.Photo;
      this.person.Title = this.Title;
      this.Database.CreateRegister(this.person,'RegistroLlamadas',this.Title)
      console.log('person -> ', this.person);

      const toast = await this.toastController.create({
        message: 'Datos guardados',
        duration: 2000
      });
      toast.present();
      this.vEnty();
    
  }

  isvalid(b:boolean)
  {
    if (this.Date === '' && this.Title === ''){
      this.Photo = "Debe Ingresar el numero."
      
    }
    else 
    {

    }
  }

  vEnty(){
    this.fecha = "";
    this.Date = "";
    this.Title  = "";
    this.Description  = "";
    this.Photo  = "";
  }

}

export interface register { 
  register:{
  Date: string ;
  Title: string;
  Description: string;
  Photo: string;
  }
}
