import { Routes } from '@angular/router';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';
import { MachinesPage } from './pages/machines/machines.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    canActivate: [AutoLoginGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'machines/:id',
    component: MachinesPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/machines/home/home.page').then(m => m.HomePage), canActivate: [AuthGuard]
          }
        ],
      },
      {
        path: 'stock',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/machines/stock/stock.page').then(m => m.StockPage), canActivate: [AuthGuard]
          },
        ],
      },

      {
        path: 'live',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/machines/live/live.page').then(m => m.LivePage), canActivate: [AuthGuard]
          },
        ],
      },

      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/machines/report/machinereport.routes').then(m => m.machineReportRoutes), canActivate: [AuthGuard]
          },
        ],
      },

    ]

  },
  {
    path: 'category/:apptype',
    loadComponent: () => import('./pages/category/category.page').then(m => m.CategoryPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'products/:apptype',
    loadComponent: () => import('./pages/products/products.page').then(m => m.ProductsPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'stocks',
    loadComponent: () => import('./pages/stocks/stocks.page').then(m => m.StocksPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/current-stock',
    loadComponent: () => import('./pages/reports/current-stock/current-stock.page').then(m => m.CurrentStockPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/stock-required',
    loadComponent: () => import('./pages/reports/stock-required/stock-required.page').then(m => m.StockRequiredPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/sales',
    loadComponent: () => import('./pages/reports/sales/sales.page').then(m => m.SalesPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/sales-product',
    loadComponent: () => import('./pages/reports/sales-product/sales-product.page').then(m => m.SalesProductPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/sales-user',
    loadComponent: () => import('./pages/reports/sales-user/sales-user.page').then(m => m.SalesUserPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/stock-refill',
    loadComponent: () => import('./pages/reports/stock-refill/stock-refill.page').then(m => m.StockRefillPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/stock-cleared',
    loadComponent: () => import('./pages/reports/stock-cleared/stock-cleared.page').then(m => m.StockClearedPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/stock-refill-summary',
    loadComponent: () => import('./pages/reports/stock-refill-summary/stock-refill-summary.page').then(m => m.StockRefillSummaryPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports/cash-refund-request',
    loadComponent: () => import('./pages/reports/cash-refund-request/cash-refund-request.page').then( m => m.CashRefundRequestPage)
  }
];
