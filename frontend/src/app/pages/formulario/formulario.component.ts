import { Component, HostBinding, OnInit } from '@angular/core';
import { Disco } from '../../models/disco';
import { DiscosService } from '../../shared/discos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  disco: Disco = {
    id:0,
    titulo:'',
    interprete: '',
    anyoPublicacion: 0,

  };


  constructor(private discosService: DiscosService) { }

  ngOnInit(): void {
  }

  crearDisco() {


    this.discosService.postDisco(this.disco).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );

  }
  
}
