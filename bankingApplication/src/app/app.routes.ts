import { Routes } from '@angular/router';
import { Topics } from './topics/components/topics/topics';
import { Polyfills } from './topics/components/polyfills/polyfills';
import { Promises } from './topics/components/promises/promises';
import { Signals} from './topics/components/signals/signals';
import { Observables } from './topics/components/observables/observables'

export const routes: Routes = [
    {
        path: "",
        component: Topics
    },
    {
        path: "polyfills",
        component: Polyfills
    },
    {
        path: "promises",
        component: Promises
    },
    {
        path: "signals",
        component: Signals
    },
    {
        path : "observables",
        component: Observables
    }
];
