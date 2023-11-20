import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { PanierComponent } from './panier/panier.component';

const appRoutes: Routes = [
  { path: '', component: ListeProduitComponent },
  { path: 'panier', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
