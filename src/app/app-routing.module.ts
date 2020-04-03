import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ArticleComponent} from './shared/components/article/article.component';
import {EventComponent} from './shared/components/event/event.component';
import {ServerDataComponent} from './shared/components/server-data/server-data.component';
import {ServerDataResolver} from './shared/resolvers/server-data.resolver';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./modules/pages/pages.module').then(mod => mod.PagesModule)
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
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then(mod => mod.SearchModule)
  },
  {
    path: 'article',
    component: ArticleComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: ServerDataComponent,
    resolve: {
      data: ServerDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    urlUpdateStrategy: 'eager',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
