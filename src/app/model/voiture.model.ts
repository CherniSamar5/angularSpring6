import { Image } from "./image.model";
import { Marque } from "./marque.model";

export class Voiture {
  idVoiture? : number;
  modeleVoiture? : string;
  prixVoiture? : number;
  dateFabrication? : Date ;
  marque? :Marque;
  image? : Image;
  imageStr?:string;

  }
