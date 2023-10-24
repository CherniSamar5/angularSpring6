import { Marque } from './marque.model';
export class MarqueWrapper{
_embedded!: {
    marques: Marque[]
  };
}

