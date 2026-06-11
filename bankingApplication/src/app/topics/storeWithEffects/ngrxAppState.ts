import { organisationState } from './basicDetails/basicDetailsState';
import { basicState } from '../storeReal/basicInfo/basicState';

export interface AppState {
  effectsReducer: organisationState;
  basic: basicState;
}
