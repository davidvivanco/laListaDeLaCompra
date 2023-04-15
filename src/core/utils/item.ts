import { Item } from "../../store/model"

const itemBuilder = (value: string): Item => {
    return {
        id: new Date().getTime().toString(),
        name: value,
        done: false,
        createdAt: new Date()
    }
}




export { itemBuilder }