import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VistadiscosComponent } from './pages/vistadiscos/vistadiscos.component';
import { NavegadorComponent } from './pages/navegador/navegador.component';
import { DiscosService } from './shared/discos.service';
import { DeleteComponent } from './pages/delete/delete.component';
import { PutComponent } from './pages/put/put.component';
/*import { HttpClientXsrfModule } from '@angular/common/http';*/

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    VistadiscosComponent,
    NavegadorComponent,
    DeleteComponent,
    PutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DiscosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
