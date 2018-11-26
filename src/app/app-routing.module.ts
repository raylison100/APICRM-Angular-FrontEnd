import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CrmRouter } from './crm/crm-routing.module';

export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/crm/listar', 
		pathMatch: 'full' 
	},
	...CrmRouter
];

@NgModule({
    imports:[ RouterModule.forRoot(routes) ],      
    exports:[RouterModule]
})
export class AppRoutingModule { }
