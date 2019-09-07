import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'seleccion', loadChildren: './seleccion/seleccion.module#SeleccionPageModule' },
  { path: 'detalle', loadChildren: './detalle/detalle.module#DetallePageModule' },
  { path: 'huesped', loadChildren: './huesped/huesped.module#HuespedPageModule' },
  { path: 'resumen', loadChildren: './resumen/resumen.module#ResumenPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
