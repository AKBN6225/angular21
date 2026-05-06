import { Routes } from '@angular/router';
import { Topics } from './topics/components/topics/topics';
import { Polyfills } from './topics/components/polyfills/polyfills';
import { Promises } from './topics/components/promises/promises';

export const routes: Routes = [
    {
        path: "",
        component: Topics
    },
    {
        path: "Polyfills",
        component: Polyfills
    },
    {
        path: "Promises",
        component: Promises
    }
];
