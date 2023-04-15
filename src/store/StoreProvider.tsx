import { createContext, useEffect, useReducer } from 'react';
import storeReducer, { initialStore } from './StoreReducer';
import { DispatchStoreData, Store } from './model';

const StoreContext = createContext({} as {
    store: Partial<Store>,
    dispatchStore: React.Dispatch<DispatchStoreData>
});

const StoreProvider = ({ children }: any) => {

    const [store, dispatchStore] = useReducer(storeReducer, initialStore)
    return (
        <StoreContext.Provider value={{ store, dispatchStore }}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext };
export default StoreProvider; 