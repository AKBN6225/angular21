import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Queryparam } from '../queryparam/queryparam';


@Component({
  selector: 'app-routing-base',
  imports: [],
  templateUrl: './routing-base.html',
  styleUrl: './routing-base.scss',
})
export class RoutingBase implements OnInit {

  initialTopics: any = ['1.routing', '2.routerOutlet', '3.routerLink', '4.routerlinkActive', '5.wildCard', '6.childRouting', '7.loadChildren: for lazyLoading'];
  midTopics: any = ['1.routeParameters', '2.queryParameters'];
  usersList: any = [];
  routeGaurds: any = ['1.canActivate', '2.canDeactivate', '3.resolve', '4.canLoad', '5.canActivateChild'];

  constructor(
    private path: Router,
    private http: HttpClient
  ) {

  };

  ngOnInit() {
    this.basicRoutingItems();
    this.callingUsersApi();
  };

  basicRoutingItems() {
    // routerOutlet: The place where we want to display the current component ideally we will router outlet at app.component.html, here it will loads the current component. app component is the place holder to display the current component

    // routerLink: which we will use in anchor tag to directly navigate to the component
    // <!-- Basic navigation at template level-->
    // <a routerLink="/home">Home</a>
    // <a routerLink="/about">About</a>
    // <a routerLink="/contact">Contact</a>

    // routerLinkActivate: This will heighlight the current route
    // <a routerLink="/home" routerLinkActive="active">Home</a>
    // <a routerLink="/about" routerLinkActive="active">About</a>
    // <a routerLink="/contact" routerLinkActive="active">Contact</a>

    // wildcardrouting: if no route is matching in routes array and if we want to display some component at that time we will use wildcard routing
    // {path:"**", component:pageNotFound}

    // childRouting: once the component is loaded and again if we want to load some other component inside the current component we use child routing. again here also in parent component we need to keep routeroutlet to as a place holder where we want to show child component
    // {path: "xyz", component:xyzComponent,
    //   children: [
    //     {path: "abc", component:abccomponent,}
    //   ]
    // };

    // routeParameters: these will be like  routing/2   
    // {
    //   path: 'routing/:id',
    //         component: RoutrParamsList
    // };

    // querryParameters: these will be like 
    //  ?page=5 in the browser url
    // we can pass multiple queryparameters
    // these queryparameters we need to give in template and ts file also in both ways
    // <a routerLink="produts" [Queryparam] = "{'pageno':8,'size':10}">
    // http://localhost:4200/products/pageno=8&size=10
    // this.router.navigate(['/users'], { queryParams: { id: 3, name: 'Leanne' } });

    // routeGaurds: 
    // . diff btw ngIf and routeGaurd: ngif hides the Ui , but if we manuallay hit the url angular will navigate to the component. so we have to use routeGaurds to restrict users .

    // canActivate : it is used to check weather the user is allowed to access that component or not
    // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },

    // @Injectable({ providedIn: 'root' })
    // export class AuthGuard implements CanActivate {
    //   constructor(private router: Router) {}
    //   canActivate(): boolean {
    //     const isLoggedIn = !!localStorage.getItem('token'); // simple check

    //     if (!isLoggedIn) {
    //       // redirect if not logged in
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //     return true;
    //   }
    // }

    // canDeactivate : it is restricts user to navigate to other component if
    //  changes are not saved

    // { path: 'profile', component: ProfileComponent, canDeactivate: [UnsavedChangesGuardService] },

    // export class ProfileComponent {
    //   formDirty = true; // simulate unsaved changes
    //   hasUnsavedChanges(): boolean {
    //     return this.formDirty;
    //   }
    // }

    // @Injectable({ providedIn: 'root' })
    // export class UnsavedChangesGuard implements CanDeactivate<ProfileComponent> {
    //   canDeactivate(component: ProfileComponent): boolean {
    //     // 'component' is the live instance currently on screen
    //     if (component.hasUnsavedChanges()) {
    //       return confirm('You have unsaved changes. Do you really want to leave this page?');
    //     }
    //     return true;
    //   }
    // }

    // loadChildren: it's lazyloading and it's not routerGaurd, it will load lazy loaded module js from server when that path is invoked
    // ex: invoking or card module when we click cards journey
    // {
    //   path: 'admin',
    //     loadChildren: () =>
    //       import('./admin/admin.module').then(m => m.AdminModule) // lazy load
    // }

    // canLoad: it will decides weather lazyLoaded module can be loaded or not. if not it will completely don't load that module from server
    // // @Injectable({ providedIn: 'root' })
    // export class AuthGuard implements CanLoad {
    //   constructor(private router: Router) { }

    //   canLoad(route: Route, segments: UrlSegment[]): boolean {
    //     const isLoggedIn = !!localStorage.getItem('token'); // simple check

    //     if (!isLoggedIn) {
    //       // block lazy bundle download and redirect
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //     return true;
    //   }
    // }

    // {
    //   path: 'admin',
    //     loadChildren: () =>
    //       import('./admin/admin.module').then(m => m.AdminModule),
    //       canLoad: [AuthGuard]   // guard applied here
    // }

    // canActivateChild: it wil actiavtes child routing if it's allowed to be
    // canActiavte : can control one component, through canActivate if you want to contro you need to apply canActiavte to all components
    // canActivateChild : it can control all child components naviation at a time

    // resolve : it’s used to fetch data before a route is activated.
    //     {
    //   path: 'users/:id',
    //   component: UserDetailComponent,
    //   resolve: { user: UserResolverService }
    // }

    // @Injectable({ providedIn: 'root' })
    // export class UserResolverService implements Resolve<User> {
    //   constructor(private userService: UserService) {}

    //   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    //     const id = route.paramMap.get('id');
    //     return this.userService.getUserById(id!);
    //   }

    //   export class UserDetailComponent implements OnInit {
    //   user!: User;
    //   constructor(private route: ActivatedRoute) {}

    //   ngOnInit() {
    //     this.route.data.subscribe(data => {
    //       this.user = data['user']; // resolved data
    //     });
    //   }
    // }
    // }


  };

  onUserClick(val: any) {
    console.log(val);
    this.path.navigate([`/routing/${val}`]);
  };

  callingUsersApi() {
    let url = 'https://jsonplaceholder.typicode.com/users';

    // fetch(url).then((data) => {
    //   return data.json();
    // }).then((y) => {
    //   this.usersList = y;
    //   console.log(y); 
    // })

    this.http.get(url).subscribe((data) => {
      console.log(data);
      this.usersList = data;
    })


  };





}
