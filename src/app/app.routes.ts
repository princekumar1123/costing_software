import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CredentialComponent } from './pages/credential/credential.component';
import { TestComponent } from './pages/test/test.component';
import { ProductCostingPageComponent } from './pages/product-costing-page/product-costing-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CredentialComponent,
    },
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        children: [
            {
                path: '',
                component: ProductCostingPageComponent, 
            },
            {
                path: 'test',
                component: TestComponent, 
            },
            {
                path: 'costing',
                component: ProductCostingPageComponent, 
            },
        ],
    },
];

// export const routes: Routes = [

// ];
// {
//     path:'/dash',component:DashboardPageComponent
// }