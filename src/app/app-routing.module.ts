import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'persons',
    loadChildren: () => import('./modules/persons/persons.module').then(mod => mod.PersonsModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./modules/companies/companies.module').then(mod => mod.CompaniesModule)
  },
  {
    path: 'objects',
    loadChildren: () => import('./modules/objects/objects.module').then(mod => mod.ObjectsModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./modules/projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path: 'sections',
    loadChildren: () => import('./modules/sections/sections.module').then(mod => mod.SectionsModule)
  },
  {
    path: 'quotes',
    loadChildren: () => import('./modules/quotes/quotes.module').then(mod => mod.QuotesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
