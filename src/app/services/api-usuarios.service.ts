import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService implements OnInit{

  Myurl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getMostrarUsuarios();
  }

  getMostrarUsuarios(){
    return this.http.get<any>(this.Myurl);
  }

}
