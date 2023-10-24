import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Marque } from '../model/marque.model';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent implements OnInit {

  constructor(private voitureService : VoitureService) { }
  voitures! : Voiture[];
  idMarque! : number;
  marques? : any  ;


  onChange() {
    this.voitureService.rechercherParMarque(this.idMarque).
    subscribe(voits =>{this.voitures=voits});
    }
  ngOnInit(): void {
    this.voitureService.listeMarques().
      subscribe(marqs => {this.marques = marqs;
      console.log(marqs);
      //console.log("samar");
  });
  }

}
