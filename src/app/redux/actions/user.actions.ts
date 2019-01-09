import { Action } from '@ngrx/store';

export const CHANGE = '[USER] Change'
export const RESET = '[USER] Reset User Settings'

export class ChangeActiveUser implements Action {
    readonly type = CHANGE;
    constructor(public payload: UserSettings) {}
}

export class ResetUserSettings implements Action {
    readonly type = RESET;
}

export type All = UpdateLanguage | ResetUserSettings;
