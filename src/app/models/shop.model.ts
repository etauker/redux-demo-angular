export interface UserSettings {
    id: number;
    name: string;
    [key: string]?: string | number | boolean;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

export interface AppState {
    settings: UserSettings;
    cart: CartItem[];
}
