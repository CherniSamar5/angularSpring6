import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MarqueService } from '../services/marque.service';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styleUrls: ['./update-marque.component.css']
})
export class UpdateMarqueComponent implements OnInit {

  currentMarque = new Marque();

        constructor(private activatedRoute: ActivatedRoute,
        private marqueService: MarqueService,
        private router :Router) { }

  ngOnInit(): void {
    this.marqueService.consulterMarque(this.activatedRoute.snapshot.params['id']).
    subscribe( marq =>{ this.currentMarque = marq
    } ) ;
  }


  updateMarque(){
    this.marqueService.updateMarque(this.currentMarque).subscribe(prod => {
      this.router.navigate(['marques']); }
      );
  }

}
