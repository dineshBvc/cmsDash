import {
  AuthGuard
} from "./chunk-G3S4ODZK.js";
import "./chunk-OEWCSYJ6.js";
import "./chunk-7FRACAAN.js";
import "./chunk-GXWPZK3Z.js";
import "./chunk-F7B77NAZ.js";
import "./chunk-DGUGGTGJ.js";
import "./chunk-FIELU7AB.js";
import "./chunk-R4QHACMO.js";
import "./chunk-66NQU5P4.js";
import "./chunk-EZ7BZKXF.js";
import "./chunk-YFFHIQ2L.js";
import "./chunk-UCFYK5O2.js";
import "./chunk-3H2XENQN.js";
import "./chunk-2HSCIEP3.js";
import "./chunk-36T2BHYJ.js";
import "./chunk-YCY464VT.js";
import "./chunk-Q2LVCW5Y.js";
import "./chunk-K2HBFHW4.js";
import "./chunk-UNONYLPV.js";
import "./chunk-MIOLVGSM.js";
import "./chunk-5RZA5OD4.js";
import "./chunk-WTQ2A753.js";
import "./chunk-MP3VKTEY.js";
import "./chunk-22VAUMV7.js";
import "./chunk-F6IUCLRN.js";
import "./chunk-7LRYXUKF.js";
import "./chunk-RSZAZW36.js";
import "./chunk-2M4P3T54.js";
import "./chunk-VMW4IG5E.js";
import "./chunk-QZNYZEIB.js";
import "./chunk-GHFEINSK.js";
import "./chunk-OJO5RD3M.js";
import "./chunk-3JGBPQET.js";

// src/app/pages/machines/report/machinereport.routes.ts
var machineReportRoutes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-GH3I7UW5.js").then((m) => m.ReportPage),
        canActivate: [AuthGuard]
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
        path: "**",
        redirectTo: ""
      }
    ]
  }
];
export {
  machineReportRoutes
};
