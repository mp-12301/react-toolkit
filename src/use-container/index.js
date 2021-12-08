import React, { useContext, useState } from 'react'

const contexts = []

export const useContainer = (key, defaultValue) => {
  let contextValue = useState(defaultValue)
  let Context = contexts.find(context => context.key === key)?.context

  if (Context === undefined) {
    Context = React.createContext(null)

    contexts.push({
      key,
      context: Context
    })
  } else {
    contextValue = useContext(Context)
  }

  const ContainerProvider = ({children}) => {
    return (
      <Context.Provider value={contextValue}>
        {children}
      </Context.Provider>
    )
  }

  return [...contextValue, ContainerProvider]
}

export default useContainer
