import { Component, OnInit, HostBinding } from '@angular/core';
import { Disco } from 'src/app/models/disco';
import { DiscosService } from '../../shared/discos.service';

@Component({
  selector: 'app-vistadiscos',
  templateUrl: './vistadiscos.component.html',
  styleUrls: ['./vistadiscos.component.css']
})
export class VistadiscosComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  disco: Disco = {
    id:0,
    titulo:'',
    interprete: '',
    anyoPublicacion: 0,

  };
  
  discos: any = [];
  idQuery: number = 0;

  constructor(private discosService: DiscosService) 
  {
    this.mostrarDisco(0);
  }

  mostrarDiscos() {
    this.mostrarDisco(this.idQuery);
  }

  mostrarDisco(id:number) {
    if (id == 0)
    {
      this.discosService.getDiscos().subscribe(
        res => {
          this.discos = res;
        },
        err => console.error(err)
      );
    } else 
    {
      this.discosService.getDisco(id).subscribe(
        res => {
          this.discos = res;
        },
        err => console.error(err)
      );
    }
  }

  ngOnInit(): void {
    
  }

}
