import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CredentialComponent } from './pages/credential/credential.component';
import { TestComponent } from './pages/test/test.component';
import { ProductCostingPageComponent } from './pages/product-costing-page/product-costing-page.component';
import { ProductCostingTableComponent } from './pages/product-costing-page/tables/product-costing-table/product-costing-table.component';

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
                component: ProductCostingTableComponent, 
            },
            {
                path: 'test',
                component: TestComponent, 
            },
            {
                path: 'costingtable',
                component: ProductCostingTableComponent, 
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