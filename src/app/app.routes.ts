import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
	{ path: '', component: IndexComponent, pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'accounting',
    loadChildren: () =>
      import('./modules/accounting/accounting.module').then(
        (m) => m.AccountingModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'firms',
    loadChildren: () =>
      import('./modules/firms/firms.module').then(
        (m) => m.FirmsModule
      ),
  },

  {
    path: 'members',
    loadChildren: () =>
      import('./modules/members/members.module').then(
        (m) => m.MembersModule
      ),
  },
  {
    path: 'zone-admin',
    loadChildren: () =>
      import('./modules/zone-admin/zone-admin.module').then(
        (m) => m.ZoneAdminModule
      ),
  },
];

