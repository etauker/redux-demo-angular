import * as CartActions from '../actions/cart.actions';
import { AppState, CartItem } from '../models/shop.model.ts';

// export type Action = CartActions.All;

const defaultState: CartItems[] = [];
// const getNewState = (state, newData) => {
//     // return Object.assign({}, state, newData);
//     return Array.from(state);
// }


export function CartReducer(state: CartItems[] = defaultState, action: Action) {

    switch (action.type) {
        case PostActions.ADD:
            let copy = state.map(item => Object.assign({}, item))
        case PostActions.REMOVE_ONE:
            return newState(state, {likes: state.likes + 1});]
        case PostActions.REMOVE_ALL:
            return newState(state, {likes: state.likes - 1});
        case PostActions.CLEAR:
            return defaultState;
        default:
            return state;
    }
}
