import * as CartActions from '../actions/cart.actions';
import { AppState, Product } from '../models/shop.model';

const defaultState: Product[] = [
    {
        id: 'vanilla',
        name: 'Vanilla',
        description: 'Plain and tasty',
        price: 1.5,
        inCart: 0
    },
    {
        id: 'strawberry',
        name: 'Strawberry',
        description: 'Refreshing and fruity',
        price: 2.5,
        inCart: 0
    },
    {
        id: 'chocolate',
        name: 'Chocolate',
        description: 'The chocolatey one',
        price: 3,
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
