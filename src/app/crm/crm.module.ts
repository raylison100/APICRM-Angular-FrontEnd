import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmComponent } from './crm-component/crm.component';
import { RouterModule } from '@angular/router';
import { CrmService } from '../crm/shared/crm.service'
import { from } from 'rxjs';

@NgModule({
  declarations: [CrmComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    CrmService,
  ]
})
export class CrmModule { }
