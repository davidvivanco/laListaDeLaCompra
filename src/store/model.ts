export interface Store {
    items: Item[]
}


export interface Item {
    name: string,
    id: string
    createdAt: Date
}