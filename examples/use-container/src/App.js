import React from "react"

import C from './components/TestComponent/index.js'
import CT from './components/TestComponentWithUseContainer/index.js'
import CP from './components/TestComponentWithProvider/index.js'

function App() {
    return (
      <div className="App">
        <C name='A'>
          <C name='A1'/>
          <CP name='A2'>
            <C name='A2.1'/>
            <CT name='A2.2'/>
            <C name='A2.3'/>
            <CT name='A2.4'>
              <C name='A2.4.1'/>
              <C name='A2.4.2'>
                <C name='A2.4.2.1'/>
                <C name='A2.4.2.2'/>
                <CT name='A2.4.2.2'/>
              </C>
              <C name='A2.4.3'/>
            </CT>
          </CP>
          <C name='A3'/>
        </C>
      </div>
    )
}

export default App
