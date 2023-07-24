'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

interface ContextProps {
  children: ReactNode
}

export function ContextProvider ({ children }: ContextProps) {
  const [showForm, setShowForm] = useState(false)
  return (
    <GlobalContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </GlobalContext.Provider>
  )
}

interface ContextType {
  showForm: boolean
  setShowForm: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<ContextType>({
  showForm: false,
  setShowForm: (): boolean => false
})

export const useGlobalContext = () => useContext(GlobalContext)
