import { Routes } from "@angular/router";
import { UserDetailsComponent } from "./user-details.component";
import { UserNewComponent } from "./user-new.component";
import { UserEditComponent } from "./user-edit.component";

export const USER_ROUTES: Routes =[
    { path: 'new', component: UserNewComponent },
        { path: 'edit', component: UserEditComponent },
        { path: 'details', component: UserDetailsComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'new' }
];