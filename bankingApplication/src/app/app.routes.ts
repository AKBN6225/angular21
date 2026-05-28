import { Routes } from '@angular/router';
import { Topics } from './topics/components/topics/topics';
import { Polyfills } from './topics/components/polyfills/polyfills';
import { Promises } from './topics/components/promises/promises';
import { Signals } from './topics/components/signals/signals';
import { Observables } from './topics/components/observables/observables';
import { SimpleSubject } from './topics/components/simple-subject/simple-subject';
import { BehaviouralSubject } from './topics/components/behavioural-subject/behavioural-subject';
import { ReplaySubject } from './topics/components/replay-subject/replay-subject';
import { AsyncSubject } from './topics/components/async-subject/async-subject';
import { CreationOperators } from './topics/components/creation-operators/creation-operators';
import { TransformOperators } from './topics/components/transform-operators/transform-operators';

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
        path: "observables",
        component: Observables,
        children: [
            {
                path: "Subject",
                component: SimpleSubject
            },
            {
                path: "BehaviouralSubject",
                component: BehaviouralSubject
            },
            {
                path: "ReplaySubject",
                component: ReplaySubject
            },
            {
                path: "AsyncSubject",
                component: AsyncSubject
            },
            {
                path: "creationOperators",
                component: CreationOperators
            },
            {
                path: "transformOperators",
                component: TransformOperators
            }
        ]
    }
];
