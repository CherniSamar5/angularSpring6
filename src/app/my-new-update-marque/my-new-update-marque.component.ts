import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-my-new-update-marque',
  templateUrl: './my-new-update-marque.component.html',
  styleUrls: ['./my-new-update-marque.component.css']
})
export class MyNewUpdateMarqueComponent implements OnInit {

  @Input()
  marque! : Marque;

  @Output()
  marqueUpdated = new EventEmitter<Marque>()

  @Input()
  ajout!:boolean;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant MyNewUpdateMarque ",this.marque);

  }
  saveMarque(){
    this.marqueUpdated.emit(this.marque);
    }

}
