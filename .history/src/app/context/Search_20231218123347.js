"use client"

import { createContext, useContext, useState} from "react"

export const SearchContext = createContext()


export const SearchContextProvider =  ({children}) => {
    return (
        <SearchContextProvider value={sear}>
            {children}
        </SearchContextProvider>
    )
}


export const useSearchContext = useContext(SearchContext)