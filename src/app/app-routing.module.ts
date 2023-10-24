import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoituresComponent } from './voitures/voitures.component';
import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { UpdateVoitureComponent } from './update-voiture/update-voiture.component';
import { MarquesComponent } from './marques/marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { AddMarquesComponent } from './add-marques/add-marques.component';
import { RechercheParMarqueComponent } from './recherche-par-marque/recherche-par-marque.component';
import { RechercheParModeleComponent } from './recherche-par-modele/recherche-par-modele.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { VoitureGuard } from './services/voiture.guard';

const routes: Routes = [
  {path: "voitures", component : VoituresComponent},
  {path : "add-voiture", component : AddVoitureComponent, canActivate:[VoitureGuard]},
  {path: "", redirectTo: "voitures", pathMatch: "full" },
  {path: "updateVoiture/:id", component: UpdateVoitureComponent},
  {path: "marques", component : MarquesComponent },
  {path: "add-Marque", component : AddMarquesComponent ,  canActivate:[VoitureGuard]},
  {path: "updateMarque/:id", component: UpdateMarqueComponent},
  {path: "rechercheParMarque", component : RechercheParMarqueComponent},
  {path: "rechercheParModele", component : RechercheParModeleComponent},
  {path: "listeMarques", component : ListeMarquesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
