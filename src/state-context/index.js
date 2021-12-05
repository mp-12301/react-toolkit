import React, { useContext } from 'react'

const contexts = []

export const StateContextProvider = ({ key, state, setState, children }) => {
  let Context = contexts.find(context => context.key === key)?.context

  const contextValue = [
    state,
    setState,
  ]

  if (Context === undefined) {
    Context = React.createContext(contextValue)

    contexts.push({
      key,
      context: Context
    })
  }

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = (key) => {
  const Context = contexts.find(context => context.key === key)?.context ??
    React.createContext(null)

  const {state, setState} = useContext(Context)

  return [state, setState]
}
