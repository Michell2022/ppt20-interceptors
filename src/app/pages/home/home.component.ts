import { Component, OnInit } from '@angular/core';
import { ApiUsuariosService } from 'src/app/services/api-usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  //CREO MI VARIABLE entrada QUE RECIBIRA LOS DATOS.
  entrada:any = [];

  mostrar = false;

  constructor(private llamarServicio:ApiUsuariosService){ }

  ngOnInit(): void {
    // LLAMO A MI FUNCION PARA QUE SE EJECUTE AL INICIAR.
    this.getImprimirServicio();
  }

  // CREO UNA FUNCION
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
