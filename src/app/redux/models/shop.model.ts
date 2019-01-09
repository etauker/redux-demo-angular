export interface UserSettings {
    id: string;
    name: string;
    [key: string]: string | number | boolean;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    inCart: number;
}

export interface AppState {
    settings: UserSettings;
    cart: Product[];
}
