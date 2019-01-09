export interface UserSettings {
    id: string;
    name: string;
    language: string;
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
