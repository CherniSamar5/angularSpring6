import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { MarqueService } from '../services/marque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-marques',
  templateUrl: './add-marques.component.html',
  styleUrls: ['./add-marques.component.css']
})
export class AddMarquesComponent implements OnInit {

  newMarque = new Marque();
  showMessage: boolean = false;
  message! :String;
  constructor(private marqueService : MarqueService ,private router :Router) { }

  addMarque(){
    this.marqueService.ajouterMarque(this.newMarque).subscribe(marq => {
      console.log(marq);
      this.router.navigate(['marques']);
      });
    this.showMessage = true;
    this.message = "marque" +this.newMarque.nomMarque +" ajoutée avec succees";
    }

  ngOnInit(): void {
    this.marqueService.ajouterMarque(this.newMarque);

  }

}
