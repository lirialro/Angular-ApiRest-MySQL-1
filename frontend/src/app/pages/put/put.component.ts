import { Component, OnInit, HostBinding } from '@angular/core';
import { Disco } from 'src/app/models/disco';
import { DiscosService } from '../../shared/discos.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {
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

  modificarDisco() {
    this.discosService.putDisco(this.disco).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
