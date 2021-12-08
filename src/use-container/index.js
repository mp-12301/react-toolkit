import React, { useContext, useState } from 'react'

const contexts = []

export const useContainer = (key, defaultValue) => {
  let contextValue = useState(defaultValue)
  let Context = contexts.find(context => context.key === key)?.context

  console.log('Context', Context)
  if (Context === undefined) {
    Context = React.createContext(null)

    contexts.push({
      key,
      context: Context
    })
  } else {
    contextValue = useContext(Context) ?? contextValue
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
