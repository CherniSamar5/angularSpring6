import { Injectable } from '@angular/core';
import { Marque } from '../model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  apiURLMarque: string = 'http://localhost:8080/voitures/api/marques';
  marques : Marque[];
  constructor(private http : HttpClient) {
    this.marques = [
      {idMarque : 1, nomMarque : "Renault", descriptionMarque :"c'est une marque Renault"},
      {idMarque : 2, nomMarque : "BMW", descriptionMarque :"c'est une marque BMW"},
      {idMarque : 3, nomMarque : "Peugeot", descriptionMarque :"c'est une marque Peugeot"},
      ];
  }
  listeMarque(): Observable<Marque[]>{
  return this.http.get<Marque[]>(this.apiURLMarque);
  }

  ajouterMarque( marq: Marque) : Observable<Marque>{
    return this.http.post<Marque>(this.apiURLMarque, marq, httpOptions);
  }
  supprimerMarque( id: number){
    const url = `${this.apiURLMarque}/${id}`;
    return this.http.delete(url, httpOptions);
    }

  consulterMarque(id: number): Observable<Marque> {
    const url = `${this.apiURLMarque}/${id}`;
    return this.http.get<Marque>(url);
  }

  trierMarques(){
    this.marques = this.marques.sort((n1,n2) => {
      if (n1.idMarque! > n2.idMarque!) {
      return 1;
      }
      if (n1.idMarque! < n2.idMarque!) {
      return -1;
      }
      return 0;
    });
    }

    updateMarque(marq:Marque): Observable<Marque>
    {
        return this.http.put<Marque>(this.apiURLMarque+"/"+marq.idMarque, marq, httpOptions);
    }
}
