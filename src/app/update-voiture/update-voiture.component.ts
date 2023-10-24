import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styleUrls: ['./update-voiture.component.css']
})
export class UpdateVoitureComponent implements OnInit {

  marques? : any ;
  updatedMarqId?: number ;
  currentVoiture = new Voiture();
  myImage! :string;

  uploadedImage!: File;
  isImageUpdated: Boolean=false;

        constructor(private activatedRoute: ActivatedRoute,
        private voitureService: VoitureService,
        private router :Router) { }

  ngOnInit() : void {
  this.voitureService.listeMarques().subscribe(marqs => {this.marques = marqs;
  console.log(marqs);
  //console.log("samar");

  });

  this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params['id']).
  subscribe( voit =>{ this.currentVoiture = voit;
  this.updatedMarqId = this.currentVoiture.marque?.idMarque;
  
  this.voitureService
  .loadImage(this.currentVoiture.image?.idImage!)
  .subscribe((img: Image) => {
  this.myImage = 'data:' + img.type + ';base64,' + img.image;
  });
} ) ;
}

onImageUpload(event: any) {
  if(event.target.files && event.target.files.length) {
  this.uploadedImage = event.target.files[0];
  this.isImageUpdated =true;
  const reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = () => { this.myImage = reader.result as string; };
  }
}

  updateVoiture(){
    this.currentVoiture.marque = this.marques.find((marq: { idMarque: number | undefined; }) => marq.idMarque ==
      this.updatedMarqId)!;
      //tester si l'image du produit a été modifiée
      if (this.isImageUpdated)
      {
      this.voitureService
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe((img: Image) => {
      this.currentVoiture.image = img;
      this.voitureService
      .updateVoiture(this.currentVoiture)
      .subscribe((voit) => {
      this.router.navigate(['voitures']);
      });
      });
      }
      else{
      this.voitureService
      .updateVoiture(this.currentVoiture)
      .subscribe((voit) => {
      this.router.navigate(['voitures']);
      });
      }
      
    }
}
