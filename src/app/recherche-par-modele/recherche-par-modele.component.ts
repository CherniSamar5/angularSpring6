import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../services/voiture.service';
import { Voiture } from '../model/voiture.model';

@Component({
  selector: 'app-recherche-par-modele',
  templateUrl: './recherche-par-modele.component.html',
  styleUrls: ['./recherche-par-modele.component.css']
})
export class RechercheParModeleComponent implements OnInit {

  constructor(private voitureService : VoitureService) { }


  modeleVoiture! :string;
  voitures! : Voiture[];
  allVoitures! : Voiture[];
  searchTerm!: string;

  ngOnInit(): void {
    this.voitureService.listeVoiture().subscribe(voits => {
      console.log(voits);
      this.voitures = voits;
      });
  }
  rechercherVoits(){
    this.voitureService.rechercherParModele(this.modeleVoiture).
    subscribe(voits => {
    this.voitures = voits;
    console.log(voits)});
    }


    onKeyUp(filterText : string){
      this.voitures = this.allVoitures.filter(item =>
      item.modeleVoiture?.toLowerCase().includes(filterText));
      }
}
