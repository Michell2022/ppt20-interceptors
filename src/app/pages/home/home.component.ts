import { Component, OnInit } from '@angular/core';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  entrada:any = [];

  mostrar = false;

  constructor(private llamarServicio:ApiUsuariosService){ }

  ngOnInit(): void {
    this.getImprimirServicio();
  }

  getImprimirServicio(){

    this.llamarServicio.getMostrarUsuarios().subscribe(
      res => {
        // console.log(res);
      
        this.entrada = res;
        // console.log(this.entrada);
        
      },
      err =>{
        console.log(err);
      }
    );
  }
}