import { Routes } from '@angular/router';
import { HomeComponent } from '@dashboard/pages/home/home.component';
import { LayoutComponent } from '@dashboard/shared/components/layout/layout.component';
import { ProductCreateComponent } from "@dashboard/pages/products/product-create/product-create.component";

export const routes: Routes = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path:"product",
                children: [
                    {
                        path: "create",
                        component: ProductCreateComponent
                    }
                ]
            }
        ]
    }
];
