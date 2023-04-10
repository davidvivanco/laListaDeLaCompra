export interface Store {
    loading: boolean;
    items: Item[];
}


export interface Item {
    name: string,
    id: string
    createdAt: Date
}