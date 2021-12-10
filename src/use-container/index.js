import { useCallback, useLayoutEffect,  useState } from 'react'

import Container from './container.js'

const store = new Container() 

export const useContainer = (key, defaultValue) => {
  if (store.lastValues[key]) {
    defaultValue = store.lastValues[key]
  } else {
    store.lastValues[key] = defaultValue
  }
  
  const [stateValue, setStateValue] = useState(defaultValue)
 
  const handleSubscribe = useCallback((event) => {
    if (event.key === key) {
      setStateValue(event.value)
    }
  }, [setStateValue, key])

  const handleSetStateValue = useCallback((value) => {
    store.fire({ key, value })
  }, [key])

  useLayoutEffect(() => {
    const handler = {key, fn: handleSubscribe}
    store.subscribe(handler)

    return () => {
      store.unsubscribe(handler)
    }
  }, [handleSubscribe])

  return [stateValue, handleSetStateValue]
}

export default { useContainer }
