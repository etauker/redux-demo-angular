import * as UserActions from '../actions/user.actions';
import { AppState, UserSettings } from '../models/shop.model';

const defaultState: UserSettings = {
  id: 'ben',
  name: 'Ben',
  language: 'en'
};

export function UserReducer(state: UserSettings = defaultState, action: UserActions.All) {

    switch (action.type) {

        case UserActions.CHANGE:
            return Object.assign({}, state, action.payload );

        case UserActions.RESET:
            return defaultState;

        default:
            return state;
    }
}
