import * as CartActions from '../actions/cart.actions';
import { AppState, Product } from '../models/shop.model';

const defaultState: Product[] = [
    {
        id: 'item_1',
        name: 'Item 1',
        description: 'Item 1',
        price: 20,
        inCart: 0
    },
    {
        id: 'item_2',
        name: 'Item 2',
        description: 'Item 2',
        price: 2,
        inCart: 0
    },
    {
        id: 'item_3',
        name: 'Item 3',
        description: 'Item 3',
        price: 8,
        inCart: 0
    }
];

export function CartReducer(state: Product[] = defaultState, action: CartActions.All) {

    switch (action.type) {

        case CartActions.ADD:
            // Array.prototype.map returns a new array instance
            return state.map(oldItem => {
                // Object.assign returns a new instance of nested objects
                let newItem = Object.assign({}, oldItem);
                if (newItem.id === action.payload) {
                    newItem.inCart++;
                }
                return newItem;
            });

        case CartActions.REMOVE_ONE:
            return state.map(oldItem => {
                let newItem = Object.assign({}, oldItem);
                if (newItem.id === action.payload && newItem.inCart > 0) {
                    newItem.inCart--;
                }
                return newItem;
            });

        case CartActions.REMOVE_ALL:
            return state.map(oldItem => {
                let newItem = Object.assign({}, oldItem);
                if (newItem.id === action.payload) {
                    newItem.inCart = 0;
                }
                return newItem;
            });

        case CartActions.CLEAR:
            return state.map(oldItem => {
                let newItem = Object.assign({}, oldItem);
                newItem.inCart = 0;
                return newItem;
            });

        default:
            // Return the same state instance if no change was made
            return state;
    }
}
