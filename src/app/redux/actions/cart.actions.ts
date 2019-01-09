import { Action } from '@ngrx/store';

export const ADD = '[CART] Add'
export const REMOVE_ONE = '[CART] Remove One'
export const REMOVE_ALL = '[CART] Remove All'
export const CLEAR = '[CART] Clear'

export class Add implements Action {
    readonly type = ADD;
    constructor(public payload: string) {}
}

export class Remove implements Action {
    readonly type = REMOVE_ONE;
    constructor(public payload: string) {}
}

export class RemoveAll implements Action {
    readonly type = REMOVE_ALL;
    constructor(public payload: string) {}
}

export class Clear implements Action {
    readonly type = CLEAR;
}

export type All = Add | Remove | RemoveAll | Clear;
