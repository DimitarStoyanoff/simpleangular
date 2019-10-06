import { NgModule } from "@angular/core";
import {Route, RouterModule} from "@angular/router"
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contacts',
        component: ContactListComponent,
        children: [
            {
                path: ':name',
                component: ContactDetailComponent
            }
        ]
    }
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}