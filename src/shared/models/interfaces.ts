export interface Item {
    name: string;
    id: string;
    done: boolean;
    checked?: boolean;
    createdAt: Date;
}

export interface ShoppinList {
    id: string;
    users: string[];
    items: Item[];
    recommendations: string[];
    needsUpdate?: boolean;
}

export interface LoadingContextState {
    isLoading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}