// import * as CartActions from '../actions/cart.actions';
// import { AppState, CartItem } from '../models/shop.model.ts';
// // import { IPost } from './ipost.model';
//
// export type Action = CartActions.All;
//
// const defaultState: AppState = {
//     settings: {
//         userId: '',
//         username: ''
//     },
//     cart: []
// };
//
// const getNewState = (state, newData) => {
//     return Object.assign({}, state, newData);
// }
//
//
// export function CartReducer(state: AppState = defaultState, action: Action) {
//
//     switch (action.type) {
//         case PostActions.ADD:
//             return newState(state, {text: action.payload});
//         case PostActions.REMOVE_ONE:
//             return newState(state, {likes: state.likes + 1});]
//         case PostActions.REMOVE_ALL:
//             return newState(state, {likes: state.likes - 1});
//         case PostActions.CLEAR:
//             return defaultState;
//         default:
//             return state;
//     }
// }
