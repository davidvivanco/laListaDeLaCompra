import { Store } from "./model";

const initialStore = {
    loading: false,
    items: []
} as Partial<Store>;

const storeReducer = (store: Partial<Store>, action: any): Partial<Store> => {
    switch (action.type) {
        case 'UPDATE STORE':
            return { ...store, ...action.payload }
        case 'SET LOADING':
            return { ...store, loading: action.payload }
        case 'ADD ITEM':
            const items = store.items || [];
            items.push(action.payload)
            return { ...store, items }

        default:
            return store;
    }
}

export { initialStore };
export default storeReducer;

