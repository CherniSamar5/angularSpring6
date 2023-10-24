import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../services/marque.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-marques',
  templateUrl: './marques.component.html',
  styleUrls: ['./marques.component.css']
})
export class MarquesComponent implements OnInit {
  marques? : Marque[]; //un tableau de produits

  constructor(private marqueService: MarqueService , public authService: AuthService) { }

  chargerMarques(){
    this.marqueService.listeMarque().subscribe(marqs => {
      console.log(marqs);
      this.marques = marqs;
      });
  }
  ngOnInit(): void {

    this.chargerMarques();
  }

  supprimerMarque(marq : Marque)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
    this.marqueService.supprimerMarque(marq.idMarque!).subscribe(() => {
          console.log("produit supprimé");
          this.chargerMarques();

  });
}

}
