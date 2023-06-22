import { useState } from "react"

export const useItem = () => {

    const itemBuilder = (value: string) => {
        return {
            id: new Date().getTime().toString(),
            name: value,
            done: false,
            createdAt: new Date()
        }
    }

    return {
        itemBuilder
    }

}