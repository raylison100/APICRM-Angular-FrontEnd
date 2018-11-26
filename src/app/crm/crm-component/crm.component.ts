import { Component, OnInit } from '@angular/core';
import { CrmService } from '../shared/crm.service';
import { Fornecedores } from '../shared/fornecedores.model'


@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
 
  fornecedor: Fornecedores[];
  constructor(
    private crmService: CrmService,
  ) { }

  ngOnInit() {
    this.crmService.listarTodos()
      .subscribe((response: any) =>  {
        console.log(response.data)
        this.fornecedor = response.data;   
      });
  }
}