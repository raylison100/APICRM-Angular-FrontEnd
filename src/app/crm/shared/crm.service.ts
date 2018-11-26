import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fornecedores } from './fornecedores.model';


@Injectable()
export class CrmService {

  
  url = 'http://localhost:8000/api/monitorar';
  constructor(private http: HttpClient) { 
  }

  listarTodos(){
    return this.http.get<Fornecedores>(this.url);
  	//return fornecedores ? JSON.parse(fornecedores) : [];
  }
}