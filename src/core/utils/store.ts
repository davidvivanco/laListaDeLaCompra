import { DispatchStoreData, Store } from "../../store/model"

const updateStore = (
    dispatchStore: (value: DispatchStoreData) => void,
    store: Partial<Store>) => {
    dispatchStore({ type: 'UPDATE STORE', payload: { ...store } });
}


export { updateStore }