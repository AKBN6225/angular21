import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch  } from '@angular/common/http';
import { userReducer } from './topics/store/userInfo';
import { basicReducer } from './topics/storeReal/basicInfo/basicReducer';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { basicDetailsReducerEff } from './topics/storeWithEffects/basicDetails/basicDetailsReducer';
import { provideEffects } from '@ngrx/effects';
import { BasicDetailsEffects } from './topics/storeWithEffects/basicDetails/basicDetailsEffects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideStore({
      userDetails: userReducer,
      basic: basicReducer,
      effectsReducer: basicDetailsReducerEff,
    }),
    provideEffects([BasicDetailsEffects]),
    provideStoreDevtools()
  ],
};
