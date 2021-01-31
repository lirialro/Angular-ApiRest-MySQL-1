import { Component, OnInit, HostBinding } from '@angular/core';
import { Disco } from '../../models/disco';
import { DiscosService } from '../../shared/discos.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  
  deleteId : number = 0; 
  constructor(private discosService: DiscosService) { }

  ngOnInit(): void {
  }
  /*
  borrarDisco(id:number) {
    this.discosService.deleteDisco(id).subscribe(
      res => {
        this.disco = res;
      },
      err => console.error(err)
    );

  }
  */
  borrarDisco() {
    this.discosService.deleteDisco(this.deleteId).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );

  }
  
  
}
