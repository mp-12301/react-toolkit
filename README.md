# React Toolkit
Toolkit that provides utilities developed by me for React projects that have been useful.
## Table of Contents
- [useContainer](#use-container)
- [Modal Handler](#modal-handler)

## 📦 useContainer <a name="use-container"></a>
A hook that provides a global state across the React components without the need to setup a `Context` from React or passing down properties.

This is implemented through the use of the `Observable` pattern that provides an object where you can subscribe in conjunction with `useState`.

Quite useful if you just wanna quickly implement a state that is shared between a few components in a small scenario and you feel its overkill to implement a reducer, action dispatchers, selectors, etc in your state container for it

🚨️ _This is not meant to replace Redux or any State Containers, there is a lot more going on those that are saving you from all sorts of disasters._

### Example
```jsx
import { useContainer } from 'react-toolkit'

const componentA = () => {
  const [counter, setCounter] = useContainer('counter', 0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
    </div>
  )
}

// Somewhere else in another component to use the same state we just provide the same key
const componentB = () => {
  const [counter, setCounter] = useContainer('counter')

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>Increment counter</button>
    </div>
  )
}
```
 

## 📦 Modal Handler <a name="modal-handler"></a>
_coming soon_

This is a wrapper around the modal component in React (this would also include React Native and the native modal component). 
This would provide a hook that would allow to use the modal in a more functional way rather than declaring on each component and hiding it.

With a Provider from `useContext` we wrap around the main app component and we can use `useModal` to get methods and states that can help manage modals and select any specific you want to open. 

