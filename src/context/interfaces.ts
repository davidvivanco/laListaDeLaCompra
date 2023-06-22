import { UseIonRouterResult } from "@ionic/react";
import { ShoppinList } from "../shared/models/interfaces";

export interface AuthContextValue {
    logged: boolean,
    user: any
    login: (
        email: string,
        password: string,
        setLoading: React.Dispatch<React.SetStateAction<boolean>>
    ) => Promise<void>,
    logout: (router: UseIonRouterResult) => void,
    isLoggedIn: (router: UseIonRouterResult) => void,
}


export interface ShoppingListContextValue {
    shoppingList: Partial<ShoppinList>,
    dispatchShoppingList: React.Dispatch<any>
    setStreamShoppingList: (setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void,
    updateShoppingListInFirestore: (shoppingList: Partial<ShoppinList>) => Promise<void>,
}
