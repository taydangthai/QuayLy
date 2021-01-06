import { Routes } from '@angular/router';

import { DashboardComponent } from '../../trangchu/dashboard.component';
import {CategoryComponent} from '../../QLCT/category/category.component';
import {TransactionsComponent} from '../../QLCT/transactions/transactions.component';
import {WalletComponent} from '../../QLCT/wallet/wallet.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'home',           component: DashboardComponent },
    { path: 'category',       component: CategoryComponent},
    { path: 'transactions',   component: TransactionsComponent},
    { path: 'wallet',         component: WalletComponent},
];
