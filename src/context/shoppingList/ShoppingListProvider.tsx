import { createContext, useReducer } from 'react';
import { collection, doc, getFirestore, onSnapshot, query, updateDoc, where } from 'firebase/firestore';
import { firebaseApp } from '../../../firebase';
import { shoppinListReducer } from './ShoppingListReducer';
import { ShoppingListContextValue } from '../interfaces';
import { ShoppinList } from '../../shared/models/interfaces';
import { shoppingListTypes } from '../../shared/models/types';

const initialShoppinList = {
    items: [],
    recommendations: []
} as Partial<ShoppinList>;


const ShoppinListContext = createContext({
} as ShoppingListContextValue);

const ShoppinListProvider = ({ children }: any) => {
    const [shoppingList, dispatchShoppingList] = useReducer(shoppinListReducer, initialShoppinList);
    const db = getFirestore(firebaseApp);

    const setStreamShoppingList = (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const q = query(
            collection(db, 'shoppingLists'),
            where('users', 'array-contains', user.id));

        const shoppingLists: Partial<ShoppinList>[] = [];

        onSnapshot(q, {
            next: (data) => {
                data.forEach(sl => {
                    const shoppingList = { ...sl.data(), id: sl.id }
                    shoppingLists.push(shoppingList)
                    console.log('streammmmm', shoppingList)
                    dispatchShoppingList({ type: shoppingListTypes.updateShoppingList, payload: shoppingList })
                })
                setLoading(false)
            },
            error: () => setLoading(false)
        })
    };

    const updateShoppingListInFirestore = async (shoppingList: Partial<ShoppinList>) => {
        shoppingList.needsUpdate = false;
        const docRef = doc(db, 'shoppingLists', shoppingList.id);
        await updateDoc(docRef, shoppingList);
    }

    return (
        <ShoppinListContext.Provider value={{
            shoppingList,
            dispatchShoppingList,
            updateShoppingListInFirestore,
            setStreamShoppingList
        }}>
            {children}
        </ShoppinListContext.Provider>
    );
}

export { ShoppinListContext };
export default ShoppinListProvider; 