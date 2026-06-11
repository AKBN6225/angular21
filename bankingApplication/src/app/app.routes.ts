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
import { RoutingBase } from './topics/components/routing-base/routing-base';
import { Pagenotfound } from './topics/components/pagenotfound/pagenotfound';
import { Queryparam } from './topics/components/queryparam/queryparam';
import { Routeparameters } from './topics/components/routeparameters/routeparameters';
import { RoutrParamsList } from './topics/components/routr-params-list/routr-params-list';
import { DataBinding } from './topics/components/data-binding/data-binding';
import { Directives } from './topics/components/directives/directives';
import { ControlFlowStatements } from './topics/components/control-flow-statements/control-flow-statements';
import { NgTemplateContentContainer } from './topics/components/ng-template-content-container/ng-template-content-container';
import { Pipes } from './topics/components/pipes/pipes';
import { TemplateRefereneceVariable } from './topics/components/template-referenece-variable/template-referenece-variable';
import { AsyncPipe } from './topics/components/async-pipe/async-pipe';
import { Ngrx } from './topics/components/ngrx/ngrx';
import { NgrxDataBind } from './topics/components/ngrx-data-bind/ngrx-data-bind';
import { NgrxBasic } from './topics/components/ngrxComponents/ngrx-basic/ngrx-basic';
import { NgrxBasicConsume } from './topics/components/ngrxComponents/ngrx-basic-consume/ngrx-basic-consume';
import { One } from './topics/components/ngrxWithEffetsComponents/one/one';

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
    },
    {
        path: "routing",
        component: RoutingBase,
    },
    {
        path: 'routing/:id',
        component: RoutrParamsList
    },
    {
        path : 'dataBinding',
        component: DataBinding
    },
    {
        path: 'directives',
        component: Directives
    },
    {
        path: 'pipes',
        component: Pipes
    },
    {
        path: "templateRefVar",
        component: TemplateRefereneceVariable
    },
    {
        path: "asyncPipe",
        component: AsyncPipe
    },
    {
        path: 'ngrx',
        component: Ngrx
    },
    {
        path: 'ngrxReal',
        component: NgrxBasic
    },
    {
        path: "ngrxBasicConsume",
        component: NgrxBasicConsume
    },
    {
        path: 'ngrxDataBind',
        component: NgrxDataBind
    },
    {
        path: "ngrxWithEffects",
        component: One
    },
    {
        path: 'controlFlow',
        component: ControlFlowStatements
    },
    {
        path: "ngTemplate:ngContent:ngContainer",
        component: NgTemplateContentContainer
    },
    {
        path:"**",
        component: Pagenotfound
    }
];
