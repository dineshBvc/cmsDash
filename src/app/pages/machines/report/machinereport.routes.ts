import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";

export const machineReportRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                loadComponent: () => import('./report.page').then(m => m.ReportPage), canActivate: [AuthGuard]
            },
            // {
            //     path: 'stock',
            //     loadComponent: () => import('./stock/stock.page').then(m => m.StockPage), canActivate: [AuthGuard]
            // },
            // {
            //     path: 'required',
            //     loadComponent: () => import('./stock-required/stock-required.page').then(m => m.StockRequiredPage), canActivate: [AuthGuard]
            // },
            // {
            //     path: 'sales',
            //     loadComponent: () => import('./sales/sales.page').then(m => m.SalesPage), canActivate: [AuthGuard]
            // },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
]