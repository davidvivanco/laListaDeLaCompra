export interface Store {
    loading: boolean;
    isLogged: boolean;
    user: any;
    items: Item[];
}


export interface Item {
    name: string,
    id: string,
    done: boolean,
    checked?: boolean
    createdAt: Date,
}

export interface DispatchStoreData {
    type: DispatchTypes,
    payload: Partial<Store> | boolean | Item
}

export type DispatchTypes = 'UPDATE STORE' | 'SET LOADING' | 'ADD ITEM'