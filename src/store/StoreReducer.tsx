import { Store } from "./model";

const initialStore = {
    loading: true,
    items: []
} as Partial<Store>;

const storeReducer = (store, action): Partial<Store> => {
    switch (action.type) {
        case 'UPDATE STORE':
            return { ...store, ...action.payload }
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

console.log('STORE REDUCER')
