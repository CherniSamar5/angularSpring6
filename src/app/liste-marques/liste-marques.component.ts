import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styleUrls: ['./liste-marques.component.css']
})
export class ListeMarquesComponent implements OnInit {

  marques! : any ;
  updatedMarq:Marque = {"idMarque":0,"nomMarque":"","descriptionMarque":""};
  ajout:boolean=true;


  constructor(private voitureService : VoitureService , public authService: AuthService) { }

  ngOnInit(): void {
    this.voitureService.listeMarques().
    subscribe(marqs =>{
      this.marques = marqs._embedded.marques;
      console.log(marqs);
    })
  }
  marqueUpdated(marq:Marque){
    console.log("marq updated event",marq);
    this.voitureService.ajouterMarque(marq).
    subscribe( ()=> this.chargerMarques());
    }

    chargerMarques(){
      this.voitureService.listeMarques().
      subscribe(marqs => {this.marques = marqs._embedded.marques;
      console.log(marqs);
      });
      }
      updateMarq(marq:Marque) {
        this.updatedMarq=marq;
        this.ajout=false;

        }

}
