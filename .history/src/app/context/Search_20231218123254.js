"use client"

import { createContext, useContext, useState} from "react"

export const SearchContext = createContext()


export const SearchContextProvider =  ({children}) => {
    return (
        <SearchContextProvider>
            {children}
        </SearchContextProvider>
    )
}


export const useSearchContext = () => {
    
}