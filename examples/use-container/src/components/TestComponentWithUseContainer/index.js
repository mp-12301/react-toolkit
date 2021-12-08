import React from 'react'

import { useContainer } from "react-toolkit"

function TestComponent({name = "foobar", children, bgColor}) {
  const randomColor = () => Math.floor(Math.random()*16777215).toString(16)
  const [count, setCount] = useContainer('count', 0)

  return (
    <div style={{backgroundColor: bgColor ?? `#${randomColor()}`}} className="container">
      <div className="name">Im component {name} - I have useContainer</div>

      <div className="children">{children}</div>
    </div>
  );
}

export default TestComponent;
