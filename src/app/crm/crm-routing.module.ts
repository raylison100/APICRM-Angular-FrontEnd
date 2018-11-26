import { Routes } from '@angular/router';

import { CrmComponent } from './crm-component/crm.component';

export const CrmRouter: Routes = [
	{ 
		path: 'crm', 
		redirectTo: 'crm/listar' 
	},
	{ 
		path: 'crm/listar', 
		component: CrmComponent 
    }, 
];