import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  newVoiture = new Voiture();
  showMessage: boolean = false;
  message! :String;

  marques! : any ;
  newIdMarq! : number;
  newMarque! : Marque;
  uploadedImage!: File;
  imagePath: any;
  constructor(private voitureService : VoitureService , private router :Router) {}



  ngOnInit(): void {
        this.voitureService.listeMarques().subscribe(marqs => {console.log(marqs);
          this.marques = marqs;
        });
    }






    addVoiture(){
      this.showMessage = true;
      this.voitureService
        .uploadImage(this.uploadedImage, this.uploadedImage.name)
        .subscribe((img: Image) => {
        this.newVoiture.image=img;
        this.newVoiture.marque = this.marques.find((marq: { idMarque: number; }) => marq.idMarque == this.newIdMarq)!;
        this.voitureService
        .ajouterVoiture(this.newVoiture)
        .subscribe(() => {
        this.router.navigate(['voitures']);
        });
        });

     
      }


















    onImageUpload(event: any) {
      this.uploadedImage = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.uploadedImage);
      reader.onload = (_event) => { this.imagePath = reader.result; }
      }
      
}
