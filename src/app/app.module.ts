// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';

// Services
import { ProduitService } from './produit.service';

// Composants
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { SearchComponent } from './search/search.component';
import { PanierComponent } from './panier/panier.component';

// States
import { PanierState } from './shared/states/panier-state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListeProduitComponent,
    SearchComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([PanierState]),
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent],
})
export class AppModule {}
