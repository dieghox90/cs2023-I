import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  usuarios:Usuario[]=[];

  constructor(private service:UsuarioService) { }

  ngOnInit(): void {

    console.log("BIENVENIDO A LISTA DE USUARIOS");

    this.service.getUsuarios().subscribe(users =>{
      console.log(users.length);
    });


  }

}
