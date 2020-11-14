import { Component, OnInit } from '@angular/core';
import { LibrosService } from './libros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Libreria';

  libros = null;

  lib = {
    cLIB_IdLibro: null,
    cLIB_Nombre: null,
    cLIB_Estatus: null,
    cALU_IdAlumno: null
  }  

  constructor(private librosServicio: LibrosService ){}

  ngOnInit(): void {
    this.MostrarTodos();
  }

  MostrarTodos(){
    this.librosServicio.mostrarTodos().subscribe(      
      result=>this.libros=result
      );
  }

  Agregar(){
    console.log(this.lib);
    this.librosServicio.agregar(this.lib).subscribe(datos=>{
      if(datos['resultado'] === 'OK'){
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
    });
  }

  Eliminar(cLIB_IdLibro){
    this.librosServicio.eliminar(cLIB_IdLibro).subscribe(datos=> {
      if(datos['resultado'] === 'OK'){
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
    });
  }

  Modificar(){
    this.librosServicio.update(this.lib).subscribe(datos=>{
      if(datos['resultado'] === 'OK'){
        alert(datos['mensaje']);
        this.MostrarTodos();
      }
    });
  }

  openForEdit(libSelected){
    this.lib = libSelected;
  }

  Seleccionar(cLIB_IdLibro){
    this.librosServicio.seleccionar(cLIB_IdLibro).subscribe(
     res=>this.libros=res[0]
    );
    this.MostrarTodos();
  }

  hayRegistros(){
    if(this.libros == null){
      return false;
    }else{
      return true;
    }
  }

}
