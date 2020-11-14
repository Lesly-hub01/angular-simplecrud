import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class LibrosService{
    url = 'http://localhost:85/angularPhp/';

    constructor(private http: HttpClient){}
    
    mostrarTodos(){
        return this.http.get(`${this.url}mostrarTodos.php`);
    }
    
    agregar(articulo){
        return this.http.post(`${this.url}agregar.php`,JSON.stringify(articulo));
    }

    eliminar(cLIB_IdLibro: number){
        return this.http.get(`${this.url}eliminar.php?cLIB_IdLibro=${cLIB_IdLibro}`);
    }

    seleccionar(cLIB_IdLibro: number){
        return this.http.get(`${this.url}seleccionar.php?cLIB_IdLibro=${cLIB_IdLibro}`);        
    }
    
    update(articulo){
        return this.http.post(`${this.url}update.php`,JSON.stringify(articulo));
    }
}