import { Routes } from '@angular/router';
import { HomeComponent } from '@dashboard/pages/home/home.component';
import { LayoutComponent } from '@dashboard/shared/components/layout/layout.component';
import path from 'path';

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            }
        ]
    }
];
